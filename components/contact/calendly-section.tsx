import { CalendlyButton } from '@/components/calendly/calendly-button';

export const CalendlySection = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Schedule a Consultation</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Book a free consultation with our experts to discuss your educational and travel needs
        </p>
        <CalendlyButton />
      </div>
    </section>
  );
};