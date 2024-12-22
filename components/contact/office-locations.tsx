import { Card } from '@/components/ui/card';
import { MapPin, Phone } from 'lucide-react';
import { OFFICE_LOCATIONS } from '@/lib/constants/contact';

export const OfficeLocations = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {OFFICE_LOCATIONS.map((location) => (
        <Card key={location.id} className="p-6">
          <div className="flex items-start space-x-4">
            <MapPin className="h-5 w-5 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">
                {location.state || location.country}
              </h3>
              <p className="text-gray-600 mb-4">{location.address}</p>
              <div className="space-y-2">
                {location.phones.map((phone, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <a
                      href={`tel:${phone}`}
                      className="text-primary hover:underline"
                    >
                      {phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};