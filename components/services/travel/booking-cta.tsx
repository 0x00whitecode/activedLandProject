import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const BookingCTA = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact our travel experts and let us help you plan your educational journey abroad
        </p>
        <Button asChild variant="secondary" size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  );
};