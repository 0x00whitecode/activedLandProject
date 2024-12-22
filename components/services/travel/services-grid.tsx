import { Card } from '@/components/ui/card';
import { Plane, FileCheck, Shield, Globe, CreditCard, HeadphonesIcon } from 'lucide-react';

const services = [
  {
    icon: <FileCheck className="h-10 w-10" />,
    title: 'Visa Assistance',
    description: 'Expert guidance through the visa application process with high success rates',
  },
  {
    icon: <Plane className="h-10 w-10" />,
    title: 'Flight Bookings',
    description: 'Best deals on international flights with flexible booking options',
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: 'Travel Insurance',
    description: 'Comprehensive travel insurance packages for peace of mind',
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: 'Study Abroad Packages',
    description: 'Complete travel packages tailored for international students',
  },
  {
    icon: <CreditCard className="h-10 w-10" />,
    title: 'Payment Solutions',
    description: 'Secure and flexible payment options for all travel services',
  },
  {
    icon: <HeadphonesIcon className="h-10 w-10" />,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your travel needs',
  },
];

export const ServicesGrid = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};