'use client';

import Image from 'next/image';
import Link from 'next/link';

interface TripCardProps {
  name: string;
  title: string;
  desc: string;
  image: string;
  slug: string;
}

export default function TripCard({ name, title, desc, image, slug }: TripCardProps) {
  return (
    <Link href={`/trips/${slug}`} className="block h-full">
      <div className="h-full bg-white shadow-md hover:shadow-xl transition rounded-2xl overflow-hidden flex flex-col">
        
        {/* Image Section */}
        <div className="relative w-full h-48 sm:h-56 md:h-64">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Text Section */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-500 mb-2">by {name}</p>
          <p className="text-gray-700 text-sm sm:text-base flex-grow">{desc}</p>
        </div>
      </div>
    </Link>
  );
}
