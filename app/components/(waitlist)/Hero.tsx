"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import elderlyManImage from '@/public/elderly-man.png';
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const WaitlistHero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAppleSignIn = () => {
    console.log('Apple sign in clicked');
    // Handle Apple sign in
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign in clicked');
    // Handle Google sign in
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={elderlyManImage}
        alt="Elderly man using phone"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text and Form */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Simple<br />
              Better<br />
              Finance
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Safiri allows you to send and receive international payment using USSD codes
            </p>

            {/* Early Tester Form */}
            {/* <div className="bg-white p-6 rounded-xl shadow-lg border max-w-md">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Fill to be an early tester</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">NAME</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Input text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Input text"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button
                  onClick={handleAppleSignIn}
                  className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                >
                  <FaApple className='h-8 text-white' />
                  <span>Sign in with Apple</span>
                </button>
                <button
                  onClick={handleGoogleSignIn}
                  className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <FcGoogle className='h-8'/>
                  <span>Sign in with Google</span>
                </button>
              </div>
            </div> */}
          </div>
          
          {/* Right side - Empty space (image is background) */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistHero;