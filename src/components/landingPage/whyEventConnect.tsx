import React from 'react';
import { Shield, MessageCircle, CreditCard } from 'lucide-react';

export default function WhyEventConnect() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Why Choose EventConnect
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Experience the difference with our comprehensive event management
            platform
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="mb-4 text-center text-xl font-bold text-gray-900">
              Verified Partners
            </h3>
            <p className="text-center leading-relaxed text-gray-600">
              All of our vendors go through rigorous verification processes
              including background checks, portfolio reviews, past client
              referrals and testimonials.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <MessageCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="mb-4 text-center text-xl font-bold text-gray-900">
              Seamless Communication
            </h3>
            <p className="text-center leading-relaxed text-gray-600">
              Built-in communication and collaboration features keep track of
              progress and ensure that vendors and organizers remain connected
              throughout the process.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
              <CreditCard className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="mb-4 text-center text-xl font-bold text-gray-900">
              Secure Payments
            </h3>
            <p className="text-center leading-relaxed text-gray-600">
              Our custom protected payment system enables you as an organizer to
              release payments on your terms, in multiple stages or a single
              transaction.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Ready to Connect?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Join the community that has successfully hosted 10000+ Events
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-blue-700 hover:shadow-xl">
              Join As Vendor
            </button>
            <button className="rounded-lg border-2 border-blue-600 bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-colors duration-200 hover:bg-gray-50 hover:shadow-xl">
              Join As Organizer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
