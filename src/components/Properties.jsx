import React from 'react';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

const properties = [
  { 
    id: 1, 
    title: "The Glass House", 
    price: "₹1,250,000", 
    loc: "DADAR, MH",
    beds: 4, baths: 3, sqft: 2500,
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 2, 
    title: "Urban Loft", 
    price: "₹850,000", 
    loc: "Vasai, MH",
    beds: 2, baths: 2, sqft: 1200,
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 3, 
    title: "Modern Villa", 
    price: "₹2,100,000", 
    loc: "MAHIM, MH",
    beds: 5, baths: 4, sqft: 4000,
    img: "https://images.unsplash.com/photo-1600596542815-22b4899975d2?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 4, 
    title: "Seaside Retreat", 
    price: "₹980,000", 
    loc: "JAIPUR, RJ",
    beds: 3, baths: 2, sqft: 1800,
    img: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 5, 
    title: "Mountain Cabin", 
    price: "₹650,000", 
    loc: "BANGALORE, KA",
    beds: 3, baths: 2, sqft: 2100,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 6, 
    title: "Minimalist Studio", 
    price: "₹450,000", 
    loc: "SURAT, GJ",
    beds: 1, baths: 1, sqft: 800,
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80" 
  },
];

const Properties = () => {
  return (
    <section id="properties" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Listings</h2>
            <p className="mt-2 text-gray-500">Curated properties for the modern lifestyle</p>
          </div>
          <button className="hidden md:block text-blue-600 font-semibold hover:text-blue-700">View All Properties →</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop) => (
            <div key={prop.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={prop.img} 
                  alt={prop.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-900">
                  FOR SALE
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{prop.title}</h3>
                  <span className="text-blue-600 font-bold">{prop.price}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin size={16} className="mr-1" />
                  {prop.loc}
                </div>
                <div className="flex justify-between border-t pt-4 text-gray-500 text-sm">
                  <div className="flex items-center"><Bed size={16} className="mr-1"/> {prop.beds} Beds</div>
                  <div className="flex items-center"><Bath size={16} className="mr-1"/> {prop.baths} Baths</div>
                  <div className="flex items-center"><Square size={16} className="mr-1"/> {prop.sqft} sqft</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button className="text-blue-600 font-semibold">View All Properties →</button>
        </div>
      </div>
    </section>
  );
};

export default Properties;