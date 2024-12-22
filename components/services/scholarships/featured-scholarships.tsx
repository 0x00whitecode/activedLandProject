import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const scholarships = [
  {
    title: 'Global Excellence Scholarship',
    institution: 'Harvard University',
    amount: '$50,000',
    deadline: 'March 15, 2024',
    tags: ['Full Tuition', 'International'],
  },
  {
    title: 'Future Leaders Program',
    institution: 'University of Oxford',
    amount: '£30,000',
    deadline: 'April 30, 2024',
    tags: ['Merit-based', 'Postgraduate'],
  },
  {
    title: 'Innovation Research Grant',
    institution: 'MIT',
    amount: '$45,000',
    deadline: 'May 20, 2024',
    tags: ['Research', 'STEM'],
  },
];

export const FeaturedScholarships = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Scholarships</h2>
          <p className="text-gray-600">Latest opportunities from top institutions worldwide</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {scholarships.map((scholarship, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-2">{scholarship.title}</h3>
              <p className="text-gray-600 mb-2">{scholarship.institution}</p>
              <p className="text-2xl font-bold text-primary mb-4">{scholarship.amount}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {scholarship.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  Application Deadline: <span className="font-semibold">{scholarship.deadline}</span>
                </p>
              </div>
              <Button className="w-full">View Details</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};