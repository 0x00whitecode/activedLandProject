import { PageHeader } from '@/components/services/education/page-header';
import { ServicesGrid } from '@/components/services/education/services-grid';
import { ProcessSection } from '@/components/services/education/process-section';
import { TestimonialsSection } from '@/components/services/education/testimonials-section';
import { FAQSection } from '@/components/services/education/faq-section';
import { ConsultationCTA } from '@/components/services/education/consultation-cta';

export default function EducationServices() {
  return (
    <>
      <PageHeader />
      <ServicesGrid />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ConsultationCTA />
    </>
  );
}