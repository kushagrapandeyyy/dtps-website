import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import dbConnect from '@/lib/mongodb';
import Appointment from '@/models/Appointment';

const appointmentServices = ['weight-loss', 'pcod', 'wedding', 'therapeutic'] as const;

const collapseWhitespace = (value: string) => value.trim().replace(/\s+/g, ' ');

const normalizePhoneNumber = (value: string) => {
  const digitsOnly = value.replace(/\D/g, '');

  if (digitsOnly.length === 12 && digitsOnly.startsWith('91')) {
    return digitsOnly.slice(-10);
  }

  if (digitsOnly.length === 11 && digitsOnly.startsWith('0')) {
    return digitsOnly.slice(-10);
  }

  return digitsOnly;
};

const todayDateString = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const appointmentSchema = z.object({
  firstName: z
    .string()
    .transform(collapseWhitespace)
    .pipe(z.string().min(2, 'First name is required').max(60, 'First name is too long')),
  lastName: z
    .string()
    .transform(collapseWhitespace)
    .pipe(z.string().min(1, 'Last name is required').max(60, 'Last name is too long')),
  email: z
    .string()
    .transform((value) => collapseWhitespace(value).toLowerCase())
    .pipe(z.string().email('Enter a valid email address').max(120, 'Email is too long')),
  phoneNumber: z
    .string()
    .transform(normalizePhoneNumber)
    .refine((value) => /^[0-9]{10}$/.test(value), 'Enter a valid 10-digit phone number'),
  service: z.enum(appointmentServices, {
    error: 'Select a valid service',
  }),
  preferredDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Select a valid date')
    .refine((value) => !Number.isNaN(Date.parse(`${value}T00:00:00.000Z`)), 'Select a valid date')
    .refine((value) => value >= todayDateString(), 'Preferred date cannot be in the past'),
});

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const parsedAppointment = appointmentSchema.safeParse(body);

    if (!parsedAppointment.success) {
      const firstError = parsedAppointment.error.issues[0]?.message || 'Invalid appointment details';

      return NextResponse.json(
        {
          success: false,
          error: firstError,
          issues: parsedAppointment.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, phoneNumber, service, preferredDate } = parsedAppointment.data;

    const appointment = await Appointment.create({
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`,
      email,
      phoneNumber,
      service,
      preferredDate: new Date(`${preferredDate}T00:00:00.000Z`),
      preferredDateLabel: preferredDate,
      source: 'website-appointment-page',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Appointment booked successfully',
        appointmentId: appointment.appointmentId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving appointment:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to save appointment. Please try again.',
      },
      { status: 500 }
    );
  }
}