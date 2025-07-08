'use client';

import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />

      {/* Hero */}
      <section className="flex-1 bg-gradient-to-b from-blue-50 to-white py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Your Next Journey,<br />Optimized
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Build, personalize, and optimize your itineraries effortlessly with AI-driven travel planning.
        </p>
        <Link
          href="/chat"
          className="bg-blue-600 text-white px-6 py-4 rounded-lg text-lg hover:bg-blue-700"
        >
          Create a Trip
        </Link>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { title: 'Optimal Route Planning', desc: 'AI-powered route optimization for efficient travel.' },
            { title: 'Custom Itineraries', desc: 'Tailor your journey – add, edit or remove activities.' },
            { title: 'Local Cuisine Recommendations', desc: 'Discover dining gems tailored to your taste.' },
          ].map((f, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
