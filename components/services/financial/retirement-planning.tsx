import { Card } from '@/components/ui/card';
import { Target, TrendingUp, ShieldCheck, BarChart3 } from 'lucide-react';

const strategies = [
  {
    icon: <Target className="h-12 w-12" />,
    title: 'Goal Setting',
    description: 'Define your retirement goals and create a roadmap to achieve them',
  },
  {
    icon: <TrendingUp className="h-12 w-12" />,
    title: 'Investment Strategy',
    description: 'Develop a balanced investment portfolio aligned with your risk tolerance',
  },
  {
    icon: <ShieldCheck className="h-12 w-12" />,
    title: 'Risk Management',
    description: 'Protect your retirement savings with comprehensive risk assessment',
  },
  {
    icon: <BarChart3 className="h-12 w-12" />,
    title: 'Income Planning',
    description: 'Create a sustainable retirement income stream from your investments',
  },
];

export const RetirementPlanning = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Retirement Planning</h2>
          <p className="text-gray-600">Secure your future with our comprehensive retirement strategies</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strategies.map((strategy, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="text-primary mb-4 flex justify-center">
                {strategy.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{strategy.title}</h3>
              <p className="text-gray-600">{strategy.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};