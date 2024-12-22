import { Card } from '@/components/ui/card';
import { FileText, Video, Calendar, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const resources = [
  {
    icon: <FileText className="h-6 w-6" />,
    title: 'Application Guides',
    description: 'Step-by-step guides for different scholarship applications',
    action: 'Download Guide',
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: 'Video Tutorials',
    description: 'Video lessons on essay writing and interview preparation',
    action: 'Watch Now',
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: 'Deadline Tracker',
    description: 'Tool to track important scholarship deadlines',
    action: 'Access Tool',
  },
  {
    icon: <Download className="h-6 w-6" />,
    title: 'Templates',
    description: 'Professional templates for applications and essays',
    action: 'Get Templates',
  },
];

export const ResourcesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Helpful Resources</h2>
          <p className="text-gray-600">Access our collection of resources to support your application</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="p-6">
              <div className="text-primary mb-4">{resource.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <Button variant="outline" className="w-full">{resource.action}</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};