import mongoose, { Document, Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const APPOINTMENT_SERVICES = [
  'weight-loss',
  'pcod',
  'wedding',
  'therapeutic',
] as const;

export type AppointmentService = (typeof APPOINTMENT_SERVICES)[number];

export interface IAppointment extends Document {
  appointmentId: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  service: AppointmentService;
  preferredDate: Date;
  preferredDateLabel: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  source: string;
  createdAt: Date;
  updatedAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>(
  {
    appointmentId: {
      type: String,
      required: true,
      unique: true,
      default: () => uuidv4(),
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 60,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 60,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 140,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 120,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
      match: /^[0-9]{10}$/,
    },
    service: {
      type: String,
      required: true,
      enum: APPOINTMENT_SERVICES,
    },
    preferredDate: {
      type: Date,
      required: true,
    },
    preferredDateLabel: {
      type: String,
      required: true,
      match: /^\d{4}-\d{2}-\d{2}$/,
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'completed', 'cancelled'],
      default: 'pending',
    },
    source: {
      type: String,
      default: 'website-appointment-page',
      trim: true,
    },
  },
  { timestamps: true }
);

AppointmentSchema.index({ createdAt: -1 });
AppointmentSchema.index({ service: 1, preferredDate: 1 });

export default mongoose.models.Appointment || mongoose.model<IAppointment>('Appointment', AppointmentSchema);