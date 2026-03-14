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

const getTodayParts = () => {
  const today = new Date();
  return {
    day: today.getDate(),
    month: today.getMonth() + 1,
    year: today.getFullYear(),
  };
};

const parseAppointmentDate = (value: string) => {
  const match = value.match(/^(\d{2})\/(\d{2})\/(\d{2})$/);

  if (!match) {
    return null;
  }

  const [, dayValue, monthValue, yearValue] = match;
  const day = Number(dayValue);
  const month = Number(monthValue);
  const fullYear = 2000 + Number(yearValue);

  const parsedDate = new Date(Date.UTC(fullYear, month - 1, day));

  if (
    Number.isNaN(parsedDate.getTime()) ||
    parsedDate.getUTCFullYear() !== fullYear ||
    parsedDate.getUTCMonth() !== month - 1 ||
    parsedDate.getUTCDate() !== day
  ) {
    return null;
  }

  return parsedDate;
};

const isPastAppointmentDate = (value: string) => {
  const parsedDate = parseAppointmentDate(value);

  if (!parsedDate) {
    return true;
  }

  const today = getTodayParts();
  const appointmentDate = {
    day: parsedDate.getUTCDate(),
    month: parsedDate.getUTCMonth() + 1,
    year: parsedDate.getUTCFullYear(),
  };

  if (appointmentDate.year !== today.year) {
    return appointmentDate.year < today.year;
  }

  if (appointmentDate.month !== today.month) {
    return appointmentDate.month < today.month;
  }

  return appointmentDate.day < today.day;
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
    .regex(/^\d{2}\/\d{2}\/\d{2}$/, 'Use date format dd/mm/yy')
    .refine((value) => parseAppointmentDate(value) !== null, 'Select a valid date')
    .refine((value) => !isPastAppointmentDate(value), 'Preferred date cannot be in the past'),
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
    const parsedDate = parseAppointmentDate(preferredDate);

    if (!parsedDate) {
      return NextResponse.json(
        {
          success: false,
          error: 'Select a valid date',
        },
        { status: 400 }
      );
    }

    const appointment = await Appointment.create({
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`,
      email,
      phoneNumber,
      service,
      preferredDate: parsedDate,
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

    const message = error instanceof Error ? error.message : 'Failed to save appointment. Please try again.';
    const status = message.includes('MONGODB_URI is not configured') || message.includes('MongoDB connection failed')
      ? 503
      : 500;

    return NextResponse.json(
      {
        success: false,
        error: message,
      },
      { status }
    );
  }
}