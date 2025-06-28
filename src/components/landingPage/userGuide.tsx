import React from 'react';

export default function UserGuide() {
  return (
    <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            First Time User Guide
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Simple steps for a first time user
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-8 text-center text-2xl font-bold text-blue-600">
              Organize Your First Event
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                  1
                </div>
                <div>
                  <h5 className="mb-2 text-lg font-semibold text-gray-900">
                    Create Your Event
                  </h5>
                  <p className="text-gray-600">Add details about your event</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                  2
                </div>
                <div>
                  <h5 className="mb-2 text-lg font-semibold text-gray-900">
                    Browse & Connect
                  </h5>
                  <p className="text-gray-600">
                    Discover the perfect vendor for you
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                  3
                </div>
                <div>
                  <h5 className="mb-2 text-lg font-semibold text-gray-900">
                    Coordinate & Execute
                  </h5>
                  <p className="text-gray-600">
                    Coordinate vendors and make your event a success
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-8 text-center text-2xl font-bold text-green-600">
              List your Service/Product
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-600">
                  1
                </div>
                <div>
                  <h5 className="mb-2 text-lg font-semibold text-gray-900">
                    Build Your Profile
                  </h5>
                  <p className="text-gray-600">
                    Showcase your services, portfolio, and client testimonials
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-600">
                  2
                </div>
                <div>
                  <h5 className="mb-2 text-lg font-semibold text-gray-900">
                    Get Discovered
                  </h5>
                  <p className="text-gray-600">
                    Receive inquiries from event organizers for your services
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-600">
                  3
                </div>
                <div>
                  <h5 className="mb-2 text-lg font-semibold text-gray-900">
                    Grow Your Business
                  </h5>
                  <p className="text-gray-600">
                    Close deals, deliver services and build your client base
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
