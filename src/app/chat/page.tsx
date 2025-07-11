'use client';

import { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatMessage from '../components/ChatMessage';
import { sendMessageToN8n } from '../utils/n8nService';

interface Message {
  role: 'user' | 'bot';
  text: string;
  weather?: {
    location: string;
    temperature: number;
    condition: string;
  };
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hi! How can I assist you with your trip planning today?' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll only when user sends a message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setIsLoading(true);

    // Add user message and scroll
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    scrollToBottom();

    try {
      // Send to n8n webhook
      const response = await sendMessageToN8n(userMessage);

      // Add bot response
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: response.text,
          weather: response.weather,
        },
      ]);
    } catch (error) {
      console.error('Error handling message:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: 'Sorry, I encountered a problem. Please try again later.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />

      <main className="flex-1 flex justify-center bg-gradient-to-b from-blue-50 to-white px-4 py-6 sm:py-10 mb-12 sm:mb-20">
        <div className="w-full max-w-3xl flex flex-col bg-white shadow-xl rounded-xl border border-gray-200
          mx-2 sm:mx-4
          ">
          {/* Header */}
          <div className="bg-blue-600 text-white text-center py-4 rounded-t-xl font-semibold text-lg sm:text-xl">
            ✈️ JoyTrip AI Travel Assistant
          </div>

          {/* Messages */}
          <div
            className="flex-1 px-3 py-4 space-y-4 overflow-y-auto"
            style={{ maxHeight: '70vh' }}
          >
            {messages.map((msg, i) => (
              <ChatMessage key={i} role={msg.role} text={msg.text} weather={msg.weather} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="px-5 py-3 rounded-lg shadow-md bg-gray-100 text-gray-800 rounded-bl-none flex items-center">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 bg-blue-600 rounded-full animate-bounce"></div>
                    <div
                      className="h-3 w-3 bg-blue-600 rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                    <div
                      className="h-3 w-3 bg-blue-600 rounded-full animate-bounce"
                      style={{ animationDelay: '0.4s' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-3 sm:p-4 flex gap-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask your travel assistant..."
              className="flex-grow rounded-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500
                text-sm sm:text-base
              "
              autoFocus
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              className={`${
                isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
              } text-white rounded-full px-4 sm:px-6 py-3 font-semibold transition text-sm sm:text-base`}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
