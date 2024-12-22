'use client';

import { Button } from '@/components/ui/button';
import { PopupButton } from 'react-calendly';
import { Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CalendlyButtonProps {
  className?: string;
}

export const CalendlyButton = ({ className }: CalendlyButtonProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button size="lg" variant="secondary" className={`gap-2 ${className}`}>
        <Calendar className="h-5 w-5" />
        Schedule Consultation
      </Button>
    );
  }

  return (
    <PopupButton
      url="https://calendly.com/x10tion007/active-land-nig-limited"
      rootElement={document.getElementById('__next') || document.body}
      text={
        <Button size="lg" variant="secondary" className={`gap-2 ${className}`}>
          <Calendar className="h-5 w-5" />
          Schedule Consultation
        </Button>
      }
      styles={{
        height: '100%',
        width: '100%',
        minWidth: 'fit-content',
      }}
    />
  );
};
