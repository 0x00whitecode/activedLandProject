import { Card } from '@/components/ui/card';
import { GraduationCap, Globe, Book, Briefcase, Award, Users } from 'lucide-react';

const categories = [
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: 'Academic Excellence',
    description: 'Merit-based scholarships for outstanding academic achievements',
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'International Students',
    description: 'Dedicated scholarships for international study opportunities',
  },
  {
    icon: <Book className="h-8 w-8" />,
    title: 'Research Grants',
    description: 'Funding opportunities for research and innovation projects',
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: 'Professional Development',
    description: 'Scholarships for career advancement and specialized training',
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Sports Excellence',
    description: 'Athletic scholarships for talented sports performers',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Need-Based Aid',
    description: 'Financial assistance based on economic circumstances',
  },
];

export const ScholarshipCategories = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Scholarship Categories</h2>
          <p className="text-gray-600">Explore various scholarship opportunities tailored to your profile</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="text-primary">{category.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};