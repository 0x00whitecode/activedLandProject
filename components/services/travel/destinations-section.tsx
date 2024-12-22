'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StaggerChildren } from '@/components/animations/stagger-children';
import { FadeIn } from '@/components/animations/fade-in';
import { motion } from 'framer-motion';

const destinations = [
  {
    name: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80',
    universities: '150+',
    rating: '4.8',
    popular: true,
  },
  {
    name: 'United States',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80',
    universities: '200+',
    rating: '4.9',
    popular: true,
  },
  {
    name: 'Canada',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80',
    universities: '100+',
    rating: '4.7',
    popular: true,
  },
  {
    name: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80',
    universities: '40+',
    rating: '4.6',
    popular: true,
  },
  {
    name: 'Saudi Arabia',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&q=80',
    universities: '50+',
    rating: '4.5',
    popular: true,
  },
];

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  }
};

export const DestinationsSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Study Destinations</h2>
            <p className="text-gray-600">Explore top educational destinations worldwide</p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <motion.div key={destination.name} variants={cardVariants}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={destination.image}
                    alt={`Study in ${destination.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">{destination.name}</h3>
                    {destination.popular && (
                      <Badge variant="secondary">Popular</Badge>
                    )}
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{destination.universities} Universities</span>
                    <span>Rating: {destination.rating}/5.0</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};