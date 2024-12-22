import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Active Land - Educational Consultancy & Travel Services',
    template: '%s | Active Land'
  },
  description: 'Expert guidance for education, scholarships, and travel services. Specializing in international education consulting and student placement worldwide.',
  keywords: ['education consultancy', 'study abroad', 'scholarships', 'international education', 'student visa', 'travel services', 'university admissions'],
  authors: [{ name: 'Active Land' }],
  openGraph: {
    title: 'Active Land - Educational Consultancy & Travel Services',
    description: 'Your gateway to global education and seamless travel experiences',
    type: 'website',
    locale: 'en_US',
    siteName: 'Active Land'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Active Land - Educational Consultancy & Travel Services',
    description: 'Expert guidance for education, scholarships, and travel services'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="flex min-h-screen flex-col pt-16">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
};