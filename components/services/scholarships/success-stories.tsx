import Image from 'next/image';
import { Card } from '@/components/ui/card';

const stories = [
  {
    name: 'John Smith',
    scholarship: 'Fulbright Scholarship',
    university: 'Stanford University',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    quote: 'With Active Land\'s support, I secured a full scholarship to pursue my dreams in Computer Science.',
  },
  {
    name: 'Maria Rodriguez',
    scholarship: 'Gates Cambridge Scholarship',
    university: 'University of Cambridge',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    quote: 'The guidance I received was invaluable in helping me win this prestigious scholarship.',
  },
];

export const SuccessStories = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-600">Meet our scholars who achieved their dreams</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{story.name}</h3>
                  <p className="text-primary">{story.scholarship}</p>
                  <p className="text-sm text-gray-600">{story.university}</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic">"{story.quote}"</blockquote>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};