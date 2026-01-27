import React from 'react';
import { Search, Shield, Zap, Smartphone, TrendingUp, Key, PenTool, Users, Globe } from 'lucide-react';

const services = [
  { icon: <Search />, title: "AI Property Search", desc: "Smart algorithms find your perfect match instantly." },
  { icon: <TrendingUp />, title: "Market Analytics", desc: "Real-time data to make informed investment decisions." },
  { icon: <Shield />, title: "Secure Transactions", desc: "Blockchain-ready security for your peace of mind." },
  { icon: <Zap />, title: "Instant Valuation", desc: "Get accurate property estimates in seconds." },
  { icon: <Smartphone />, title: "Virtual Tours", desc: "Explore properties from the comfort of your phone." },
  { icon: <Key />, title: "Rental Management", desc: "End-to-end support for landlords and tenants." },
  { icon: <PenTool />, title: "Legal Assistance", desc: "We handle the paperwork, you handle the keys." },
  { icon: <Users />, title: "Expert Agents", desc: "24/7 access to top-tier real estate professionals." },
  { icon: <Globe />, title: "Global Reach", desc: "Access international markets with ease." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">Our Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Intelligent Services</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 bg-white">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-500 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;