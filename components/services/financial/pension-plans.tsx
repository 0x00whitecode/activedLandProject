import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

const plans = [
  {
    title: 'Personal Pension',
    features: [
      'Flexible contribution options',
      'Tax-efficient savings',
      'Investment choice',
      'Online account management',
    ],
  },
  {
    title: 'Company Pension',
    features: [
      'Employer contributions',
      'Group life insurance',
      'Investment options',
      'Regular statements',
    ],
  },
  {
    title: 'Self-Employed Pension',
    features: [
      'Tailored contribution plans',
      'Tax benefits',
      'Investment flexibility',
      'Retirement planning support',
    ],
  },
];

export const PensionPlans = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Pension Plans</h2>
          <p className="text-gray-600">Choose the right pension plan for your future</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};