import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 text-sm font-medium mb-6 backdrop-blur-sm animate-fade-in-up">
          AI-Powered Real Estate
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          Find Your Future <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Without the Hassle</span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Experience the next generation of property dealing. Smart matching, instant valuations, and seamless transactions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <a 
            href="#properties" 
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Browse Properties
          </a>
          <a 
            href="#contact" 
            className="bg-blue-600/90 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-full hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 border border-blue-500/30"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;