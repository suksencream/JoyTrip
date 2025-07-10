'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

interface TripCardProps {
  name: string;
  title: string;
  desc: string;
  image: string;
  slug: string;
}

function TripCard({ name, title, desc, image, slug }: TripCardProps) {
  return (
    <Link href={`/trips/${slug}`} className="block">
      <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl group transform transition duration-300 hover:scale-[1.02]">
        <div className="relative w-full h-64">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            unoptimized
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

export default function HomePage() {
  const trips = [
    {
      name: 'Ivanner Mora',
      title: 'Trip to Tokyo',
      desc: 'Join me on an exciting 5-day journey through Tokyo, where we’ll visit iconic landmarks, indulge in delicious meals, and explore vibrant neighborhoods.',
      image: '/tokyo.webp',
      slug: 'tokyo',
    },
    {
      name: 'Pablo Guzman',
      title: 'Trip to New York',
      desc: 'Experience the best of New York City in just 4 days! Explore iconic landmarks, indulge in delicious meals, and immerse yourself in culture.',
      image: '/newyork.avif',
      slug: 'new-york',
    },
    {
      name: 'Rosarinho Alves',
      title: 'Trip to Switzerland',
      desc: 'A breathtaking journey across the Alps with panoramic train rides, lakeside villages, and chocolate delights.',
      image: '/swit.webp',
      slug: 'switzerland',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />

      {/* Hero */}
      <section className="flex-1 bg-gradient-to-b from-blue-50 to-white py-20 text-center px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-800 mb-8 mt-45">
          Your <span className="text-blue-600">AI-Powered</span> Trip
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto">
          Your Personal Travel Assistant.<br /> Smarter than Google. Cooler than a Tour Guide.
        </p>
        <Link
          href="/chat"
          className="bg-blue-600 text-white px-14 py-4 rounded-xl text-lg hover:bg-blue-700 mb-10 inline-block"
        >
          Create a Trip
        </Link>
      </section>

      {/* Feature Showcase */}
      <section id="about" className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">
              <span className="bg-blue-300 px-1">Meet JoyTrip</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              JoyTrip is your all-in-one AI-powered travel planner. Instead of manually researching destinations, restaurants, and things to do, JoyTrip generates a personalized day-by-day itinerary in seconds. Whether you’re chasing hidden gems, Michelin-star restaurants, or scenic nature spots — JoyTrip finds it, organizes it, and adapts it just for you.
            </p>
          </div>

          <div className="flex justify-center">
            <Image src="/pic1.jpg" alt="JoyTrip AI Planning" width={300} height={300} />
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 mt-24 items-center">
          <div className="flex justify-center md:order-1">
            <Image src="/pic2.jpg" alt="Explore with JoyTrip" width={300} height={300} />
          </div>

          <div className="md:order-2">
            <h2 className="text-2xl font-bold text-black mb-4">
              <span className="bg-blue-300 px-1">Smarter Than Just Search</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              JoyTrip pulls insights from real traveler reviews, local forums, and even viral content like Instagram reels and TikToks. It doesn’t just give you a list — it gives you context, opinions, and recommendations from people who’ve been there. All you need to do is pack your bags.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Feature Cards */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-20 text-center mt-20 mb-20">
          {[
            { title: '🧠 AI Trip Planner', desc: 'Input your dream trip, get a full itinerary in seconds.' },
            { title: '🍜 Food Intelligence', desc: 'Finds Michelin-star restaurants & local favorites.' },
            { title: '💬 Chatbot Concierge', desc: 'Ask questions and edit your plan anytime.' },
            { title: '🌦️ Adaptive Planning', desc: 'Changes your plan based on weather or time.' },
            { title: '🧳 Personalized Tips', desc: 'It learns your style: relaxed, food-lover, adventure.' },
            { title: '🗺️ Smart Map', desc: 'See all your spots clearly on a map.' },
          ].map((f, i) => (
            <div key={i} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Trips */}
      <section id="community" className="py-24 bg-white px-6 mb-40 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Journey Inspirations from Travelers
          </h2>
          <p className="text-lg text-gray-600 mb-20 max-w-2xl mx-auto">
            Dive into unique trip itineraries crafted by our global travelers. Find your next adventure and share your own journey with fellow explorers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {trips.map((trip, i) => (
            <TripCard
              key={i}
              name={trip.name}
              title={trip.title}
              desc={trip.desc}
              image={trip.image}
              slug={trip.slug}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
