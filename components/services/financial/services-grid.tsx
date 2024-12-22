import { Card } from '@/components/ui/card';
import { Wallet, Building2, PiggyBank, LineChart, Shield, Users } from 'lucide-react';

const services = [
  {
    icon: <Wallet className="h-10 w-10" />,
    title: 'Financial Planning',
    description: 'Comprehensive financial planning tailored to your goals and needs',
  },
  {
    icon: <Building2 className="h-10 w-10" />,
    title: 'Estate Properties',
    description: 'Expert guidance in real estate investments and property management',
  },
  {
    icon: <PiggyBank className="h-10 w-10" />,
    title: 'Pension Services',
    description: 'Secure pension plans and retirement savings solutions',
  },
  {
    icon: <LineChart className="h-10 w-10" />,
    title: 'Investment Advisory',
    description: 'Strategic investment planning and portfolio management',
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: 'Asset Protection',
    description: 'Safeguarding your assets and wealth preservation strategies',
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: 'Family Planning',
    description: 'Multi-generational wealth planning and inheritance management',
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