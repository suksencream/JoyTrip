'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar'; 


export default function NewYorkTripPage() {
  const itinerary = [
    {
      day: 'Day 1: Arrival & Times Square',
      details: [
        '✈️ Arrive at JFK or LaGuardia Airport.',
        '🚕 Taxi or AirTrain + Subway to Manhattan.',
        '🛏️ Check-in at hotel near Times Square (e.g., The Row NYC).',
        '🌆 Explore Times Square, Broadway signs, and street performers.',
        '🍕 Grab dollar pizza or try Joe’s Pizza for classic NY slice.',
        '🎭 Optionally catch a Broadway show in the evening.',
      ],
    },
    {
      day: 'Day 2: Central Park & Museums',
      details: [
        '🌳 Stroll through Central Park (start at Columbus Circle).',
        '🖼️ Visit The MET or Natural History Museum.',
        '🧺 Have a picnic lunch in Sheep Meadow.',
        '🛍️ 5th Avenue walk: Apple Store, St. Patrick’s Cathedral.',
        '🍽️ Dinner at Eleven Madison Park (Michelin 3-star, modern American).',
        '🌉 Optional: Walk across Brooklyn Bridge at night.',
      ],
    },
    {
      day: 'Day 3: Downtown NYC',
      details: [
        '🗽 Take ferry to Statue of Liberty & Ellis Island (book early).',
        '📸 Visit Wall Street & Charging Bull statue.',
        '🕊️ Reflect at 9/11 Memorial & Museum.',
        '🏙️ Explore Oculus mall & World Trade Center observatory.',
        '🍣 Dinner at Nobu Downtown (Michelin-recommended fusion sushi).',
      ],
    },
    {
      day: 'Day 4: Brooklyn & Views',
      details: [
        '☕ Morning coffee at Brooklyn Heights Promenade (amazing skyline views).',
        '🖼️ Explore DUMBO — art shops, Instagram spot under Manhattan Bridge.',
        '🍔 Try a Shake Shack or Smorgasburg food market (weekends).',
        '🛍️ Thrift shopping in Williamsburg or vintage bookstores.',
        '🌃 Rooftop drinks at Westlight or 230 Fifth.',
      ],
    },
    {
      day: 'Day 5: Free Day + Departure',
      details: [
        '🛍️ Last-minute shopping at Macy’s Herald Square.',
        '🖼️ Optional stop at MoMA or Chelsea art galleries.',
        '🥯 Grab a New York bagel and coffee.',
        '🚇 Subway or Uber back to airport for flight.',
      ],
    },
  ];

  return (
    <>
      {/* Navbar on top */}
      <Navbar />

      {/* Banner with Back Button */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="/swit.webp"
          alt="Switzerland Alps"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col">

          {/* Centered Title */}
          <div className="flex-grow flex items-center justify-center px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
              🗽 Explore New York City in 5 Days
            </h1>
          </div>
        </div>
      </div>

      {/* Itinerary Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8 text-blue-700">🗽 5-Day New York City Adventure</h1>
        <p className="text-lg text-gray-700 mb-12">
          Discover iconic sights, rooftop views, world-class food, and unforgettable city energy with this perfectly balanced NYC itinerary.
        </p>

        {itinerary.map((day, i) => (
          <div key={i} className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{day.day}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1 pl-5">
              {day.details.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">🚇 NYC Transport Tips</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 pl-5">
            <li>Get a MetroCard or use tap-to-pay with Apple/Google Pay.</li>
            <li>Google Maps and Citymapper are best for subway navigation.</li>
            <li>Subways run 24/7 — safe but be aware late at night.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
