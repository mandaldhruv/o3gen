import React, { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Properties', href: '#properties' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className={`font-bold text-2xl flex items-center gap-2 ${scrolled ? 'text-blue-900' : 'text-white'}`}>
            <Home className="w-8 h-8" />
            <span>O3Gen AI</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-medium text-sm tracking-wide transition-colors ${
                  scrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all transform hover:scale-105 ${
                scrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-blue-900 hover:bg-gray-100'
              }`}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-gray-900' : 'text-white'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl py-4 flex flex-col items-center space-y-4 animate-fade-in-up">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-800 text-lg font-medium hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-blue-600 font-bold">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;