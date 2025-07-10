'use client';

import Image from 'next/image';
import Link from 'next/link';

interface TripCardProps {
  name: string;
  title: string;
  desc: string;
  image: string;
  slug: string; // this will be used to route to /trips/[slug]
}

export default function TripCard({ name, title, desc, image, slug }: TripCardProps) {
  return (
    <Link href={`/trips/${slug}`} className="block">
      <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl group transform transition duration-300 hover:scale-[1.02]">
        <div className="relative w-full h-64">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end text-left text-white">
          <p className="text-sm mb-1">👤 {name}</p>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-sm mt-2">{desc}</p>
        </div>
      </div>
    </Link>
  );
}
