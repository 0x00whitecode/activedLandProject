import { ServicesHeader } from '@/components/services/header';
import { ServicesList } from '@/components/services/services-list';
import { ServiceFeatures } from '@/components/services/features';
import { ServiceTestimonials } from '@/components/services/testimonials';
import { ServiceCTA } from '@/components/services/cta';

export default function ServicesPage() {
  return (
    <>
      <ServicesHeader />
      <ServicesList />
      <ServiceFeatures />
      <ServiceTestimonials />
      <ServiceCTA />
    </>
  );
}