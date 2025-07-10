'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-8 px-6 text-center">
      <p className="mb-4 text-lg">
        Have any questions? {' '}
        <Link href="tel:0812345678" className="text-white underline">
          Call 081-234‑5678
        </Link>
        <br /> or contact via LINE
      </p>
      <Image
        src="/qr.jpg"
        alt="QR Code"
        className='ml-150 mb-10'
        width={200}
        height={200}
      />

      <p className="text-sm">© {new Date().getFullYear()} JoyTrip. All rights reserved.</p>
    </footer>
  );
}
