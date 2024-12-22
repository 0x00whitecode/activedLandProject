import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const ConsultationCTA = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Educational Journey?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get in touch with our education experts and take the first step towards your academic success
        </p>
        <Button asChild variant="secondary" size="lg">
          <Link href="/contact">Schedule Consultation</Link>
        </Button>
      </div>
    </section>
  );
};