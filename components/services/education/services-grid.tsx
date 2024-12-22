import { Card } from '@/components/ui/card';
import { GraduationCap, BookOpen, Users, Target, FileCheck, Brain } from 'lucide-react';

const services = [
  {
    icon: <GraduationCap className="h-10 w-10" />,
    title: 'University Admissions',
    description: 'Strategic guidance for university selection and application process',
  },
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: 'Test Preparation',
    description: 'Comprehensive preparation for SAT, TOEFL, IELTS, and other exams',
  },
  {
    icon: <Target className="h-10 w-10" />,
    title: 'Career Counseling',
    description: 'Professional guidance to align education with career goals',
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: 'Academic Mentoring',
    description: 'One-on-one support throughout your academic journey',
  },
  {
    icon: <FileCheck className="h-10 w-10" />,
    title: 'Document Review',
    description: 'Expert review of applications, essays, and supporting documents',
  },
  {
    icon: <Brain className="h-10 w-10" />,
    title: 'Study Skills Development',
    description: 'Techniques and strategies for academic success',
  },
];

export const ServicesGrid = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};