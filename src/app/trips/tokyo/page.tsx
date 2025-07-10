'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';

export default function TokyoTripPage() {
  const itinerary = [
    {
      day: 'Day 1: Arrival & Shibuya',
      details: [
        '✈️ Arrive at Haneda Airport (or Narita).',
        '🚆 Take airport train to Shibuya (~40 min).',
        '🛏️ Check-in at hotel (e.g., Shibuya Stream Excel Hotel Tokyu).',
        '🌆 Explore Shibuya Crossing, Hachiko Statue.',
        '🛍️ Shopping at Shibuya 109 & Center Gai.',
        '🍽️ Dinner at Uobei Sushi (fun sushi train experience).',
      ],
    },
    {
      day: 'Day 2: Shinjuku & Michelin Dining',
      details: [
        '🌳 Morning walk at Shinjuku Gyoen National Garden.',
        '🛍️ Explore Takashimaya and Don Quijote for souvenirs.',
        '⛩️ Visit Hanazono Shrine.',
        '🍽️ Lunch at Ichiran Ramen (private booth experience).',
        '🗼 Evening view at Tokyo Metropolitan Government Building (free).',
        '🌟 Dinner at Narisawa (2 Michelin stars, innovative Japanese cuisine).',
      ],
    },
    {
      day: 'Day 3: Asakusa & Akihabara',
      details: [
        '⛩️ Visit Senso-ji Temple in Asakusa.',
        '🚴 Rent a bike or rickshaw for a local tour.',
        '🍡 Try traditional street snacks on Nakamise Street.',
        '🚇 Head to Akihabara (Electric Town).',
        '🕹️ Explore anime shops, arcades, and maid cafes.',
        '🍛 Dinner at Go! Go! Curry for local fast food vibes.',
      ],
    },
    {
      day: 'Day 4: Harajuku & Shinjuku Nightlife',
      details: [
        '🚇 Start at Meiji Jingu Shrine (serene morning walk).',
        '👗 Fashion hunt on Takeshita Street (Harajuku).',
        '🍵 Stop by a Japanese tea café.',
        '🛍️ Omotesando for high-end window shopping.',
        '🌃 Shinjuku Golden Gai at night — tiny local bars with character.',
        '🍢 Grab late night skewers at Omoide Yokocho.',
      ],
    },
    {
      day: 'Day 5: Tokyo Disneyland or Chill + Departure',
      details: [
        '🎢 Optional full-day at Tokyo Disneyland or DisneySea.',
        '🧖‍♂️ Or relax at an onsen (spa) like Oedo Onsen Monogatari.',
        '🛍️ Last-minute shopping at Tokyo Station underground mall.',
        '✈️ Train back to airport & departure.',
      ],
    },
  ];

  return (
    <>
      {/* Navbar on top */}
      <Navbar />
      {/* Banner with Background Image and Back Button */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="/tokyo.jpg" // replace with your Tokyo image path
          alt="Tokyo Skyline"
          fill
          className="object-cover"
          priority
        />

        {/* Dark overlay with flex layout */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col">

          {/* Centered Title */}
          <div className="flex-grow flex items-center justify-center px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
              🇯🇵 Explore Tokyo in 5 Days
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8 text-pink-700">🇯🇵 5-Day Tokyo Adventure</h1>
        <p className="text-lg text-gray-700 mb-12">
          A perfect mix of modern vibes, traditional temples, food experiences, and iconic neighborhoods — all mapped out with smart time planning.
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
          <h3 className="text-xl font-semibold text-gray-800 mb-2">🚉 Transport Tips</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
            <li>Get a Suica or Pasmo IC Card for easy metro/train access.</li>
            <li>Google Maps or Japan Travel app (by Navitime) for routes.</li>
            <li>Subways are clean, punctual, and safe even late at night.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
