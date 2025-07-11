'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between relative">
        {/* Left: Logo + Brand */}
        <div className="flex items-center space-x-3">
          <Image 
            src="/logo.jpg" 
            alt="JoyTrip Logo" 
            width={40}
            height={40} 
            className="rounded-full"
          />
          <span className="text-xl sm:text-2xl font-bold text-blue-600">JoyTrip</span>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6 text-gray-700 absolute left-1/2 transform -translate-x-1/2">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#features">Features</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/chat"
          className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Create a Trip
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-700"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu (dropdown) */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-6 py-4 border-t shadow">
          <ul className="flex flex-col space-y-4 text-gray-800">
            <li><Link href="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
            <li><Link href="/#about" onClick={() => setMobileOpen(false)}>About</Link></li>
            <li><Link href="/#features" onClick={() => setMobileOpen(false)}>Features</Link></li>
            <li><Link href="/#contact" onClick={() => setMobileOpen(false)}>Contact</Link></li>
            <li>
              <Link
                href="/chat"
                className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={() => setMobileOpen(false)}
              >
                Create a Trip
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
