import { Metadata } from 'next';
import AppointmentBookingForm from '@/components/AppointmentBookingForm';
import PageWrapper from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Book Appointment | Dietitian Poonam Sagar',
  description:
    'Schedule your consultation with Dietitian Poonam Sagar. Start your personalized wellness journey today.',
};

 
export default function AppointmentPage() {
  return (
    <>
      <PageWrapper>
        {/* Hero Section */}
        <section className="page-header">
          <div className="container">
            <h1 className="section-title light">Appointment</h1>
            <div className="breadcrumb light">
              <span>Home</span> / <span>Book Appointment</span>
            </div>
          </div>
        </section>
      </PageWrapper>

      {/* Appointment Form Section */}
      <section className="about-section">
        <div className="container">
          <AppointmentBookingForm />
        </div>
      </section>
    </>
  );
}
