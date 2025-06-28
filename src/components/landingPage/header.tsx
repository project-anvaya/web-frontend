import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">EventConnect</h1>
          </div>

          <div className="hidden md:block">
            <nav className="flex space-x-8">
              <Link
                href="/organizers"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                Organizers
              </Link>
              <Link
                href="/vendors"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                Vendors
              </Link>
              <Link
                href="/events"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                Events
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/signin"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
