'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageSquare, Users, Rocket, Globe2 } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: 'Global Network',
    description: 'Connect with students and professionals worldwide',
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    title: 'Real-time Support',
    description: 'Get instant help from our community experts',
  },
  {
    icon: <Rocket className="h-6 w-6 text-primary" />,
    title: 'Exclusive Resources',
    description: 'Access to guides, templates, and study materials',
  },
  {
    icon: <Globe2 className="h-6 w-6 text-primary" />,
    title: 'Cultural Exchange',
    description: 'Share experiences with international students',
  },
];

export const CommunitySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with fellow students, share experiences, and get support from our global community
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center sm:text-left">
              <Button
                size="lg"
                className="bg-[#4A154B] hover:bg-[#3a1139] space-x-2"
                onClick={() => window.open('https://join.slack.com/t/activelandniglimited/shared_invite/zt-2wjgy844j-sxmLgvjmxWM90WbTtT0a9w', '_blank')}
              >
                <Image
                  src="https://cdn.brandfolder.io/5H442O3W/at/pl546j-7le8zk-6gwiyo/Slack_Mark_White.png"
                  alt="Slack"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                Join Our Slack Community
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
              alt="Community collaboration"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-2xl font-semibold mb-2">5,000+ Members</p>
                <p className="text-sm opacity-90">
                  Join our thriving community of students and professionals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};