import React from 'react';
import { Users, Store, Calendar } from 'lucide-react';

export default function Banner() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl leading-tight font-bold text-gray-900 md:text-6xl">
            Connect.Plan.Execute
          </h1>
          <p className="mx-auto mb-4 max-w-3xl text-xl text-gray-600">
            The only platform where event organizers meet trusted vendors.
          </p>
          <p className="mx-auto max-w-2xl text-lg text-gray-500">
            Streamline your event planning process with our comprehensive
            marketplace
          </p>
        </div>

        <div className="mb-20 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-blue-700 hover:shadow-xl">
            Join As Vendor
          </button>
          <button className="rounded-lg border-2 border-blue-600 bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-colors duration-200 hover:bg-gray-50 hover:shadow-xl">
            Join As Organizer
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          <div className="rounded-xl bg-white p-8 shadow-lg">
            <div className="mb-4 flex justify-center">
              <Users className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="mb-2 text-4xl font-bold text-blue-600">2500+</h3>
            <p className="font-medium text-gray-600">Active Organizers</p>
          </div>
          <div className="rounded-xl bg-white p-8 shadow-lg">
            <div className="mb-4 flex justify-center">
              <Store className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="mb-2 text-4xl font-bold text-blue-600">200+</h3>
            <p className="font-medium text-gray-600">Trusted Vendors</p>
          </div>
          <div className="rounded-xl bg-white p-8 shadow-lg">
            <div className="mb-4 flex justify-center">
              <Calendar className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="mb-2 text-4xl font-bold text-blue-600">10000+</h3>
            <p className="font-medium text-gray-600">Events Organized</p>
          </div>
        </div>
      </div>
    </section>
  );
}
