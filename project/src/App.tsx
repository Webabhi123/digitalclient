import React, { useState } from 'react';
import { Twitter, Instagram, Mail, Linkedin } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the email subscription
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
            <span className="text-sm font-medium">Coming Soon</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-200">
              Something Amazing is Coming
            </span>
          </h1>
          
          <p className="text-xl mb-12 text-gray-200">
            We're working hard to bring you something extraordinary. Stay tuned!
          </p>

          <form onSubmit={handleSubmit} className="mb-12 flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:border-white/40 text-white placeholder-gray-300 w-full md:w-96"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-white text-purple-900 font-semibold hover:bg-purple-100 transition-colors"
            >
              Notify Me
            </button>
          </form>

          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-purple-300 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;