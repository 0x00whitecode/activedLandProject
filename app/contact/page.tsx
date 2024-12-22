import { ContactHeader } from '@/components/contact/header';
import { ContactForm } from '@/components/contact/form';
import { OfficeLocations } from '@/components/contact/office-locations';
import { ContactInfo } from '@/components/contact/contact-info';
import { CalendlySection } from '@/components/contact/calendly-section';

export default function Contact() {
  return (
    <>
      <ContactHeader />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Offices</h2>
          <OfficeLocations />
        </div>
      </section>
      <CalendlySection />
    </>
  );
}