import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h5 className="mb-4 text-2xl font-bold text-white">EventConnect</h5>
            <p className="leading-relaxed text-gray-300">
              Connecting event organizers and vendors across the world
            </p>
          </div>

          <div>
            <h5 className="mb-6 text-lg font-semibold text-white">
              For Organizers
            </h5>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/vendors"
                  className="text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  Browse Vendors
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  Your Events
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-6 text-lg font-semibold text-white">
              For Vendors
            </h5>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/inquiries"
                  className="text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  Inquiries
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  Your Events
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-6 text-lg font-semibold text-white">Support</h5>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 EventConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
