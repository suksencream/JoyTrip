'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Brand */}
        <div className="text-2xl font-bold text-blue-600">JoyTrip</div>

        {/* Center: Navigation links */}
        <ul className=" hidden md:flex space-x-6 text-gray-700 absolute left-1/2 transform -translate-x-1/2">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#about">about</Link></li>
          <li><Link href="/#features">Features</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>

        {/* Right: CTA */}
        <Link
          href="/chat"
          className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Create a Trip
        </Link>
      </div>
    </nav>
  );
}
