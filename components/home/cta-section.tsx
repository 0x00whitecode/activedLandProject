import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Let us help you achieve your educational and travel goals. Contact us today for a consultation.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </section>
  );
};