'use client';

import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TripCard from './components/TripCard';
import Link from 'next/link';

export default function HomePage() {
  const trips = [
    {
      name: 'Ivanner Mora',
      title: 'Trip to Tokyo',
      desc: 'Join me on an exciting 5-day journey through Tokyo, where we’ll visit iconic landmarks, indulge in delicious meals, and explore vibrant neighborhoods.',
      image: '/img/tokyo.jpg',
      slug: 'tokyo',
    },
    {
      name: 'Pablo Guzman',
      title: 'Trip to New York',
      desc: 'Experience the best of New York City in just 4 days! Explore iconic landmarks, indulge in delicious meals, and immerse yourself in culture.',
      image: '/img/newyork.jpg',
      slug: 'new-york',
    },
    {
      name: 'Rosarinho Alves',
      title: 'Trip to Switzerland',
      desc: 'A breathtaking journey across the Alps with panoramic train rides, lakeside villages, and chocolate delights.',
      image: '/img/swit.jpg',
      slug: 'switzerland',
    },
    {
      name: 'Claire Dubois',
      title: 'Trip to Paris',
      desc: 'Wander through charming streets, visit world-class museums, savor French pastries, and watch the Eiffel Tower sparkle at night.',
      image: '/img/paris.avif',
      slug: 'paris',
    },
    {
      name: 'Thanawat Chaiyo',
      title: 'Trip to Bangkok',
      desc: 'Explore golden temples, cruise the Chao Phraya River, shop local markets, and eat street food that will blow your mind.',
      image: '/img/bangkok.avif',
      slug: 'bangkok',
    },
    {
      name: 'Luca Romano',
      title: 'Trip to Rome',
      desc: 'Dive into ancient history with the Colosseum and Roman Forum, then enjoy gelato near the Trevi Fountain and sunset at Piazza Navona.',
      image: '/img/rome.avif',
      slug: 'rome',
    },
    
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Navbar />

      {/* Hero */}
     <section
  className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] bg-no-repeat bg-center bg-contain flex flex-col justify-center items-center px-4 text-center"
  style={{
    backgroundImage: 'url("/banner_resized.png")',
  }}
>
  {/* ปุ่มอยู่ตรงกลางด้านล่าง */}
  <Link href="/chat">
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center justify-center w-14 h-14 bg-yellow-200 text-gray-800 rounded-full relative overflow-hidden cursor-pointer z-20">
      <svg
        width="16"
        height="20"
        viewBox="0 0 16 20"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path d="M17.1,11.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L10,15.6L4.3,9.9c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l6.4,6.4c0.4,0.4,1,0.4,1.4,0L17.1,11.3z M9-2v19h2V-2H9z"></path>
      </svg>
      <span className="absolute top-0 left-0 w-32 h-32 bg-white opacity-50 rounded-full animate-ping"></span>
    </div>
  </Link>

  {/* overlay */}
  <div className="absolute inset-0 z-10">
    <Image
      src="/home-1-slider-bg.png"
      alt="Overlay Brush"
      fill
      className="object-contain scale-115"
    />
  </div>

  {/* Hero content */}
  <h1 className="text-6xl md:text-7xl font-extrabold text-gray-800 mb-8 mt-45 z-10">
    <span className="text-yellow-200"></span>
  </h1>
  <p
    className="text-xl text-yellow-200 font-bold mb-10 max-w-xl mx-auto z-10"
    style={{
      textShadow: '1px 1px 4px rgba(59, 130, 246, 0.6)',
    }}
  >
    Your Personal Travel Assistant.<br /> Smarter than Google. Cooler than a Tour Guide.
  </p>
</section>


      {/* Feature Showcase */}
      <section id="about" className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 items-center">
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

      {/* Feature Cards */}
      <section id="features" className="py-16 bg-gray-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
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

      {/* Trips Section */}
      <section className="py-16 px-4 sm:px-6 bg-white mt-20 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            Journey Inspirations from Travelers
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Dive into unique trip itineraries crafted by our global travelers. Find your next adventure and share your own journey with fellow explorers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
