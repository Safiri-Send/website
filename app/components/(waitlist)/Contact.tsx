"use client"
import React, { useState } from 'react';

const WaitlistContact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    message: '',
    subscribe: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = () => {
    console.log('Contact form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-4">Send us a message</h2>
        <p className="text-gray-600 mb-12 leading-relaxed">
          If you want to partner, share ideas or talk to our support team,<br />
          just fill in the form and we will get to you.
        </p>

        <div className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                value={formData.surname}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 text-gray-900"
              />
            </div>
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 text-gray-900"
              />
            </div>
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 text-gray-900"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Enter message"
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none placeholder-gray-500 text-gray-900"
            />
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="subscribe"
              id="subscribe"
              checked={formData.subscribe}
              onChange={handleInputChange}
              className="w-5 h-5 text-blue-600 bg-white border-2 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
            />
            <label htmlFor="subscribe" className="text-sm text-gray-700 leading-relaxed">
              Subscribe me to Numa for updates & opportunities
            </label>
          </div>

          <div className="pt-4">
            <button 
              onClick={handleSubmit}
              className="w-full text-white font-medium px-6 py-4 rounded-lg text-base transition-all duration-200 shadow-md hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #CCE2F0 0%, #2C6CFF 100%)'
              }}
            >
              Send now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistContact;