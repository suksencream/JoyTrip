'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-12 px-4 text-center">
      <div className="max-w-md mx-auto">
        <p className="mb-4 text-lg">Have any questions? Contact via LINE</p>

        <div className="flex justify-center">
          <Image
            src="/qr.JPG"
            alt="QR Code"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>

        <p className="text-sm mt-6">© {new Date().getFullYear()} JoyTrip. All rights reserved.</p>
      </div>
    </footer>
  );
}
