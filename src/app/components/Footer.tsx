// src/components/Footer.tsx
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-8 px-6 text-center">
      <p className="mb-4 text-lg">
        Have any questions?{' '}
        <Link href="tel:0812345678" className="text-white underline">
          Call 081-234‑5678
        </Link>
      </p>
      <p className="text-sm">© {new Date().getFullYear()} JoyTrip. All rights reserved.</p>
    </footer>
  );
}
