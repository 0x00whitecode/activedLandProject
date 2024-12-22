import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_EMAIL, OFFICE_LOCATIONS, SOCIAL_LINKS } from '@/lib/constants/contact';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Active Land</h3>
            <p className="text-gray-400">
              Empowering dreams through education and travel. Your journey to success starts here.
            </p>
            <div className="mt-4">
              <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center text-gray-400 hover:text-white">
                <Mail className="h-5 w-5 mr-2" />
                {COMPANY_EMAIL}
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-white">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Offices</h4>
            <ul className="space-y-4">
              {OFFICE_LOCATIONS.map((location) => (
                <li key={location.id} className="text-gray-400">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 mt-1" />
                    <span>{location.address}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.facebook} className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href={SOCIAL_LINKS.twitter} className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href={SOCIAL_LINKS.instagram} className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Active Land. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;