import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

const properties = [
  {
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80',
    title: 'Luxury Villa',
    location: 'Palm Jumeirah',
    beds: 4,
    baths: 3,
    sqft: '3,500',
    price: '$1,200,000',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    title: 'Modern Apartment',
    location: 'Downtown',
    beds: 2,
    baths: 2,
    sqft: '1,200',
    price: '$450,000',
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
    title: 'Family Home',
    location: 'Suburban Area',
    beds: 5,
    baths: 4,
    sqft: '4,200',
    price: '$850,000',
  },
];

export const EstateProperties = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
          <p className="text-gray-600">Explore our selection of premium real estate investments</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{property.location}</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    <span>{property.beds} beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>{property.baths} baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-primary">{property.price}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};