import { Card } from '@/components/ui/card';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const resources = [
  {
    title: 'University Application Checklist',
    format: 'PDF',
    size: '1.2 MB',
  },
  {
    title: 'Scholarship Essay Templates',
    format: 'DOCX',
    size: '850 KB',
  },
  {
    title: 'Student Visa Requirements Guide',
    format: 'PDF',
    size: '2.1 MB',
  },
  {
    title: 'Study Abroad Budget Planner',
    format: 'XLSX',
    size: '1.5 MB',
  },
];

export const DownloadableResources = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Downloadable Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <FileText className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">{resource.title}</h3>
                    <p className="text-sm text-gray-500">
                      {resource.format} • {resource.size}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};