import { Card } from '@/components/ui/card';
import { CheckCircle, Clock, Globe, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: 'Expert Guidance',
    description: 'Professional support from experienced consultants'
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your needs'
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Global Network',
    description: 'Connections with institutions worldwide'
  },
  {
    icon: <HeadphonesIcon className="h-8 w-8" />,
    title: 'Personalized Service',
    description: 'Tailored solutions for your unique goals'
  }
];

export const ServiceFeatures = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600">What makes our services stand out</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="text-primary mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};