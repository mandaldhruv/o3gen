import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50 skew-x-12 translate-x-20 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div>
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Get in Touch</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">Let's Find Your Dream Home</h2>
            <p className="text-gray-600 text-lg mb-8">
              Ready to start your journey? Our AI-powered tools and expert agents are here to guide you every step of the way.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Call Us</h4>
                  <p className="text-gray-600">+91 9876543210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Us</h4>
                  <p className="text-gray-600">hello@o3genai.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Visit Us</h4>
                  <p className="text-gray-600">123 Tech Park, Vasai 401209</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Lead Gen Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Consultation</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" placeholder="John" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" placeholder="Doe" className="input-field" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="input-field" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Interest</label>
                <select className="input-field text-gray-500">
                  <option>Select a property type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Rental</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows="4" placeholder="Tell us what you're looking for..." className="input-field"></textarea>
              </div>
              
              <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                Send Request <Send size={18} />
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;