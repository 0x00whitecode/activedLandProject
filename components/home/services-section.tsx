import { Card } from '@/components/ui/card';
import { GraduationCap, Plane, Award } from 'lucide-react';

const services = [
  {
    icon: <GraduationCap className="h-12 w-12 mb-4 text-primary" />,
    title: 'Educational Consultancy',
    description: 'Expert guidance for university admissions, career counseling, and exam preparation.',
  },
  {
    icon: <Award className="h-12 w-12 mb-4 text-primary" />,
    title: 'Scholarship Support',
    description: 'Comprehensive assistance in finding and securing scholarships worldwide.',
  },
  {
    icon: <Plane className="h-12 w-12 mb-4 text-primary" />,
    title: 'Travel Services',
    description: 'Complete travel solutions including visa assistance and flight bookings.',
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for your educational and travel needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};