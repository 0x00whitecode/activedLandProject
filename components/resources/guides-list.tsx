import { Card } from '@/components/ui/card';
import { Book, FileText, Video, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const guides = [
  {
    icon: <Book className="h-6 w-6" />,
    title: 'University Application Guide',
    description: 'Step-by-step guide to applying to universities worldwide',
    downloadLink: '#',
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: 'Scholarship Essay Writing',
    description: 'Tips and templates for writing winning scholarship essays',
    downloadLink: '#',
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: 'Interview Preparation',
    description: 'Video guides for university and scholarship interviews',
    downloadLink: '#',
  },
];

export const GuidesList = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Study Guides</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <Card key={index} className="p-6">
              <div className="text-primary mb-4">{guide.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
              <p className="text-gray-600 mb-4">{guide.description}</p>
              <Button variant="outline" className="w-full gap-2">
                <Download className="h-4 w-4" />
                Download Guide
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};