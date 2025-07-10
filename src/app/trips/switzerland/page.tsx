'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar'; 

export default function SwitzerlandTripPage() {
  const itinerary = [
    {
      day: 'Day 1: Arrival in Zurich',
      details: [
        '✈️ Arrive at Zurich Airport in the morning.',
        '🚆 Take a train from Zurich Airport to city center (20 min).',
        '🛏️ Check-in at hotel (e.g., 25hours Hotel Langstrasse).',
        '🍽️ Dinner at Restaurant Pavillon (2 Michelin stars).',
        '🌆 Evening walk along Lake Zurich.',
      ],
    },
    {
      day: 'Day 2: Zurich → Lucerne',
      details: [
        '🚆 Take a direct train to Lucerne (50 min).',
        '🏞️ Visit Chapel Bridge, Old Town, Lion Monument.',
        '🛶 Optional: Boat ride on Lake Lucerne.',
        '🍽️ Lunch at Wirtshaus Galliker (Swiss cuisine).',
        '🏔️ Take the Golden Round Trip to Mount Pilatus (cogwheel train + cable car).',
        '🌇 Return to Lucerne and rest.',
      ],
    },
    {
      day: 'Day 3: Lucerne → Interlaken → Lauterbrunnen',
      details: [
        '🚆 Scenic train ride to Interlaken (2 hrs).',
        '🚐 Transfer to Lauterbrunnen (20 min).',
        '🏞️ Visit Trümmelbach Falls and Staubbach Falls.',
        '🚠 Optional: Take cable car to Mürren village.',
        '🍽️ Dinner at Hotel Oberland Restaurant (local alpine food).',
      ],
    },
    {
      day: 'Day 4: Jungfraujoch – Top of Europe',
      details: [
        '🚂 Take train from Lauterbrunnen → Kleine Scheidegg → Jungfraujoch.',
        '❄️ Explore Ice Palace, Observation Deck, Snow Fun Park.',
        '🧀 Try cheese fondue at Restaurant Crystal (on Jungfraujoch).',
        '📸 Photos with Alps backdrop.',
        '⬇️ Return to Lauterbrunnen in the evening.',
      ],
    },
    {
      day: 'Day 5: Return to Zurich & Departure',
      details: [
        '🚆 Take early train back to Zurich (2.5 hrs).',
        '🛍️ Quick souvenir shopping at Bahnhofstrasse.',
        '✈️ Depart from Zurich Airport.',
      ],
    },
  ];

  return (
    <>
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col">


          {/* Centered Title */}
          <div className="flex-grow flex items-center justify-center px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
              🇨🇭 Explore Switzerland in 5 Days
            </h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8 text-blue-700">🇨🇭 5-Day Trip to Switzerland</h1>
        <p className="text-lg text-gray-700 mb-12">
          This itinerary covers iconic Swiss cities, alpine adventures, scenic trains, and culinary highlights — all optimized for efficiency and beauty.
        </p>

        {itinerary.map((day, i) => (
          <div key={i} className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{day.day}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
              {day.details.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">🗺️ Transportation Notes</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
            <li>Swiss Rail Pass is highly recommended for unlimited scenic train rides.</li>
            <li>Trains are punctual and clean. No need for cars in most places.</li>
            <li>Use SBB Mobile App to check real-time train schedules.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
