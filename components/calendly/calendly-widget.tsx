'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export const CalendlyWidget = () => {
  useEffect(() => {
    const initCalendly = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/x10tion007/active-land-nig-limited',
          text: 'Schedule time with me',
          color: '#0069ff',
          textColor: '#ffffff',
        });
      }
    };

    // Initialize after script loads
    if (window.Calendly) {
      initCalendly();
    }
  }, []);

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          // Script loaded
        }}
      />
    </>
  );
};