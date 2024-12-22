'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Our Services', href: '/#services' },
  { name: 'Educational Services', href: '/services/education' },
  { name: 'Scholarships', href: '/services/scholarships' },
  { name: 'Travel Services', href: '/services/travel' },
  { name: 'Financial Services', href: '/services/financial' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'
    )}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <GraduationCap className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
              <span className="ml-2 text-xl font-bold">Active Land</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium text-gray-700 rounded-md group"
                onClick={handleNavClick}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 w-full h-full bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-200 ease-out" />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          'md:hidden absolute left-0 right-0 bg-white px-2 pt-2 pb-3 space-y-1 shadow-lg transition-all duration-200 ease-in-out',
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        )}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              onClick={handleNavClick}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};