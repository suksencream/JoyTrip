'use client';

import { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! How can I assist you with your trip planning today?' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: input },
      { role: 'bot', text: `You said: ${input}` }, // ← Replace with AI response later
    ]);
    setInput('');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />

      <main className="flex-1 flex justify-center bg-gradient-to-b from-blue-50 to-white px-4 py-10 mb-50">
        <div className="w-full max-w-3xl flex flex-col bg-white shadow-xl rounded-xl border border-gray-200">
          {/* Header */}
          <div className="bg-blue-600 text-white text-center py-4 rounded-t-xl font-semibold text-lg">
            ✈️ JoyTrip AI Travel Assistant
          </div>

          {/* Messages */}
          <div className="flex-1 px-4 py-6 space-y-4 overflow-y-auto" style={{ maxHeight: '70vh' }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`px-5 py-3 rounded-lg text-sm shadow-md max-w-[80%] ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4 flex gap-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask your travel assistant..."
              className="flex-grow rounded-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 font-semibold transition"
            >
              Send
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
