import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Properties from './components/Properties';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Navbar />
      <Hero />
      
      {/* Marquee Section */}
      <div className="bg-blue-900 text-white py-4 overflow-hidden border-b border-blue-800">
        <div className="whitespace-nowrap animate-marquee flex items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-8 text-sm font-bold tracking-widest uppercase">• New Luxury Properties Added</span>
              <span className="mx-8 text-sm font-bold tracking-widest uppercase text-blue-300">• Interest Rates at All Time Low</span>
              <span className="mx-8 text-sm font-bold tracking-widest uppercase">• Partnered with Top 10 Global Banks</span>
              <span className="mx-8 text-sm font-bold tracking-widest uppercase text-blue-300">• AI Valuation Tool Now Live</span>
            </div>
          ))}
        </div>
      </div>

      <Services />
      
      {/* About Section Teaser */}
      <section id="about" className="bg-blue-600 py-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Why Choose O3Gen AI?</h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            We are not just a real estate agency. We are a technology company that simplifies property transactions. 
            By leveraging data science and AI, we cut down search times by 40% and ensure you get the best market value.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div><div className="text-4xl font-bold mb-2">500+</div><div className="text-blue-200 text-sm">Properties Sold</div></div>
            <div><div className="text-4xl font-bold mb-2">98%</div><div className="text-blue-200 text-sm">Client Satisfaction</div></div>
            <div><div className="text-4xl font-bold mb-2">24h</div><div className="text-blue-200 text-sm">Average Response</div></div>
            <div><div className="text-4xl font-bold mb-2">$50M</div><div className="text-blue-200 text-sm">Volume Traded</div></div>
          </div>
        </div>
      </section>

      <Properties />
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div>
            <h4 className="text-white text-xl font-bold mb-6">O3Gen AI</h4>
            <p className="text-sm leading-relaxed">Innovating Real Estate with Artificial Intelligence. Your future home is just one click away.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#properties" className="hover:text-white transition-colors">Properties</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Banking Partners</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-800 px-3 py-1 rounded text-xs border border-gray-700">HDFC</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-xs border border-gray-700">SBI</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-xs border border-gray-700">ICICI</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-xs border border-gray-700">AXIS</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-16 text-xs text-gray-600">
          © 2026 O3Gen AI Realty. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;