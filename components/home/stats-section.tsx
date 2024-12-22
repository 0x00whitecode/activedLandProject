import { Users, BookOpen, Globe } from 'lucide-react';

const stats = [
  { icon: <Users className="h-8 w-8" />, value: '5000+', label: 'Students Assisted' },
  { icon: <BookOpen className="h-8 w-8" />, value: '500+', label: 'Universities' },
  { icon: <Globe className="h-8 w-8" />, value: '50+', label: 'Countries' },
];

export const StatsSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {stat.icon}
              <div className="mt-4 text-4xl font-bold">{stat.value}</div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};