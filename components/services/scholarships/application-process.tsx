import { Card } from '@/components/ui/card';
import { FileText, Users, CheckCircle, Send } from 'lucide-react';

const steps = [
  {
    icon: <FileText className="h-8 w-8" />,
    title: 'Document Preparation',
    description: 'We help you prepare all required documents, including transcripts, recommendations, and essays.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Expert Review',
    description: 'Our experts review your application materials and provide detailed feedback.',
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: 'Application Refinement',
    description: 'We help you refine your application based on expert feedback and requirements.',
  },
  {
    icon: <Send className="h-8 w-8" />,
    title: 'Submission Support',
    description: 'We guide you through the final submission process and follow-up procedures.',
  },
];

export const ApplicationProcess = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Application Process</h2>
          <p className="text-gray-600">Our step-by-step guidance for successful scholarship applications</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="text-primary mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};