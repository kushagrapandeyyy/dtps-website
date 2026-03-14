'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

type AppointmentFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  service: string;
  preferredDate: string;
};

const initialFormData: AppointmentFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  service: '',
  preferredDate: '',
};

const getTodayDateString = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export default function AppointmentBookingForm() {
  const [formData, setFormData] = useState<AppointmentFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (field: keyof AppointmentFormData, value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to book appointment');
      }

      setFeedback({
        type: 'success',
        message: `Appointment saved successfully. Reference ID: ${data.appointmentId}`,
      });
      setFormData(initialFormData);
    } catch (error) {
      setFeedback({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to book appointment',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="appointment-card">
      <div className="appointment-content-grid">
        <div className="appointment-left">
          <div className="section-label">
            <span className="star">✦</span> Appointment
          </div>
          <h2 className="section-title">Make appointment</h2>
          <p className="about-desc">
            Easy scheduling for a personalized health coaching session. Take
            the first step towards better health today!
          </p>
          <div className="appointment-image">
            <Image
              src="https://placehold.co/400x300/0d4043/ffffff?text=Health+Coaching"
              alt="Health Coaching"
              width={400}
              height={300}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="appointment-form-box">
          <form className="appointment-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="appointment-first-name">First Name</label>
                <input
                  id="appointment-first-name"
                  type="text"
                  placeholder="First Name"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={(event) => handleChange('firstName', event.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="appointment-last-name">Last Name</label>
                <input
                  id="appointment-last-name"
                  type="text"
                  placeholder="Last Name"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={(event) => handleChange('lastName', event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="appointment-email">Email Address</label>
              <input
                id="appointment-email"
                type="email"
                placeholder="Email Address"
                autoComplete="email"
                value={formData.email}
                onChange={(event) => handleChange('email', event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="appointment-phone">Phone Number</label>
              <input
                id="appointment-phone"
                type="tel"
                placeholder="Phone Number"
                autoComplete="tel"
                inputMode="tel"
                value={formData.phoneNumber}
                onChange={(event) => handleChange('phoneNumber', event.target.value)}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="appointment-service">Service</label>
                <select
                  id="appointment-service"
                  value={formData.service}
                  onChange={(event) => handleChange('service', event.target.value)}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="pcod">PCOD Management</option>
                  <option value="wedding">Wedding Plan</option>
                  <option value="therapeutic">Therapeutic</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="appointment-date">Preferred Date</label>
                <input
                  id="appointment-date"
                  type="date"
                  min={getTodayDateString()}
                  value={formData.preferredDate}
                  onChange={(event) => handleChange('preferredDate', event.target.value)}
                  required
                />
              </div>
            </div>

            {feedback ? (
              <p
                className={`appointment-form-feedback appointment-form-feedback--${feedback.type}`}
                role="status"
              >
                {feedback.message}
              </p>
            ) : null}

            <Button type="submit" disabled={isSubmitting} className="appointment-submit-button">
              {isSubmitting ? 'Saving Appointment...' : 'Book An Appointment'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}