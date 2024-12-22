import { PageHeader } from '@/components/services/travel/page-header';
import { ServicesGrid } from '@/components/services/travel/services-grid';
import { ProcessSection } from '@/components/services/travel/process-section';
import { DestinationsSection } from '@/components/services/travel/destinations-section';
import { FAQSection } from '@/components/services/travel/faq-section';
import { BookingCTA } from '@/components/services/travel/booking-cta';

export default function TravelServices() {
  return (
    <>
      <PageHeader />
      <ServicesGrid />
      <ProcessSection />
      <DestinationsSection />
      <FAQSection />
      <BookingCTA />
    </>
  );
}