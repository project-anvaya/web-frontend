import React from 'react';
import {
  Camera,
  ChefHat,
  Music,
  Palette,
  MapPin,
  Car,
  Shirt,
  Zap,
} from 'lucide-react';

export default function VendorCategories() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Vendor Categories
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Discover trusted vendors across all event categories
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-6 transition-shadow duration-300 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
              <Camera className="h-6 w-6 text-white" />
            </div>
            <h5 className="mb-2 text-lg font-semibold text-gray-900">
              Photography
            </h5>
            <p className="mb-3 text-sm text-gray-600">
              Professional Photographers & Videographers
            </p>
            <p className="text-sm font-medium text-purple-600">30+ Vendors</p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 p-6 transition-shadow duration-300 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600">
              <ChefHat className="h-6 w-6 text-white" />
            </div>
            <h5 className="mb-2 text-lg font-semibold text-gray-900">
              Catering
            </h5>
            <p className="mb-3 text-sm text-gray-600">
              Restaurants, Bakers and Food Services
            </p>
            <p className="text-sm font-medium text-orange-600">10+ Vendors</p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 p-6 transition-shadow duration-300 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-600">
              <Music className="h-6 w-6 text-white" />
            </div>
            <h5 className="mb-2 text-lg font-semibold text-gray-900">
              Entertainment
            </h5>
            <p className="mb-3 text-sm text-gray-600">
              DJ&apos;s, Bands, & other entertainment services
            </p>
            <p className="text-sm font-medium text-pink-600">15+ Vendors</p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-6 transition-shadow duration-300 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
              <Palette className="h-6 w-6 text-white" />
            </div>
            <h5 className="mb-2 text-lg font-semibold text-gray-900">Decor</h5>
            <p className="mb-3 text-sm text-gray-600">
              Artists, Designers, & Florists
            </p>
            <p className="text-sm font-medium text-green-600">25+ Vendors</p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 transition-shadow duration-300 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h5 className="mb-2 text-lg font-semibold text-gray-900">Venues</h5>
            <p className="mb-3 text-sm text-gray-600">
              Destination Venues, Convention Centers, & Hotel Locations
            </p>
            <p className="text-sm font-medium text-blue-600">40+ Vendors</p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 transition-shadow duration-300 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
              <Car className="h-6 w-6 text-white" />
            </div>
            <h5 className="mb-2 text-lg font-semibold text-gray-900">
              Transportation
            </h5>
            <p className="mb-3 text-sm text-gray-600">
              Luxury cars, Shuttles, & other Transport Facilities
            </p>
            <p className="text-sm font-medium text-indigo-600">20+ Vendors</p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-rose-50 to-rose-100 p-6 transition-shadow duration-300 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-rose-600">
              <Shirt className="h-6 w-6 text-white" />
            </div>
            <h5 className="mb-2 text-lg font-semibold text-gray-900">
              Fashion
            </h5>
            <p className="mb-3 text-sm text-gray-600">
              Makeup, Styling and Wardrobe Services
            </p>
            <p className="text-sm font-medium text-rose-600">25+ Vendors</p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 transition-shadow duration-300 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-600">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h5 className="mb-2 text-lg font-semibold text-gray-900">
              Technical
            </h5>
            <p className="mb-3 text-sm text-gray-600">
              AV Equipment, Lighting Components, & Technicians
            </p>
            <p className="text-sm font-medium text-yellow-600">35+ Vendors</p>
          </div>
        </div>
      </div>
    </section>
  );
}
