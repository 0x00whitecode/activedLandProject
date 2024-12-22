import { Card } from '@/components/ui/card';
import { GraduationCap, Award, Plane } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <GraduationCap className="h-12 w-12" />,
    title: 'Educational Services',
    description: 'Expert guidance for university admissions and academic success',
    link: '/services/education'
  },
  {
    icon: <Award className="h-12 w-12" />,
    title: 'Scholarship Support',
    description: 'Find and secure scholarships worldwide',
    link: '/services/scholarships'
  },
  {
    icon: <Plane className="h-12 w-12" />,
    title: 'Travel Services',
    description: 'Complete travel solutions for international students',
    link: '/services/travel'
  }
];

export const ServicesList = () => {
  return (
    <section className="py-20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link href={service.link} key={service.title}>
              <Card className="p-6 hover:shadow-lg transition-all cursor-pointer h-full">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};