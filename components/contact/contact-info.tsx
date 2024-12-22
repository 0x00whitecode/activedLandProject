import { Mail, Phone } from 'lucide-react';
import { COMPANY_EMAIL } from '@/lib/constants/contact';

export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Have questions about our services? We're here to help you with your educational and travel needs.
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Mail className="h-5 w-5 text-primary" />
          <a href={`mailto:${COMPANY_EMAIL}`} className="text-primary hover:underline">
            {COMPANY_EMAIL}
          </a>
        </div>
        
        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5 text-primary" />
          <div className="space-y-1">
            <p className="font-medium">Zamfara State:</p>
            <div className="space-x-2">
              <a href="tel:08067677900" className="text-primary hover:underline">08067677900</a>
              <a href="tel:08035411183" className="text-primary hover:underline">08035411183</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mt-8">
        <h3 className="font-semibold mb-2">Office Hours</h3>
        <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
        <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
        <p className="text-gray-600">Sunday: Closed</p>
      </div>
    </div>
  );
};