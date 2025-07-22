"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from "@/public/Logo.svg";

const WaitlistNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left section - Logo only (no language picker) */}
        <div className="flex items-center space-x-4">
          <Image
            src={Logo}
            alt="Safiri Logo"
            className="h-8 w-auto"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-white/90 hover:text-white text-sm transition-colors">
            Home
          </a>
          <a href="#community" className="text-white/90 hover:text-white text-sm transition-colors">
            Community
          </a>
          <a href="#faqs" className="text-white/90 hover:text-white text-sm transition-colors">
            FAQs
          </a>
          <a href="#blogs" className="text-white/90 hover:text-white text-sm transition-colors">
            Blogs
          </a>
          <a href="#about" className="text-white/90 hover:text-white text-sm transition-colors">
            About Us
          </a>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
                className="text-white font-medium px-6 py-3 rounded-lg text-sm transition-all duration-200 shadow-md hover:shadow-lg w-fit"
                style={{
                  background: 'linear-gradient(135deg, #CCE2F0 0%, #2C6CFF 100%)'
                }}
              >
            Be an early tester
          </button>
          <button className="border border-white/30 hover:bg-white/10 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors">
            Contact us
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-white/80 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md rounded-lg mt-4 border border-white/20">
          <div className="px-4 py-6 space-y-4">
            <a 
              href="#home" 
              className="block text-gray-800 hover:text-gray-600 transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#community" 
              className="block text-gray-800 hover:text-gray-600 transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </a>
            <a 
              href="#faqs" 
              className="block text-gray-800 hover:text-gray-600 transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </a>
            <a 
              href="#blogs" 
              className="block text-gray-800 hover:text-gray-600 transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </a>
            <a 
              href="#about" 
              className="block text-gray-800 hover:text-gray-600 transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            
            <div className="pt-4 border-t border-gray-300 space-y-3">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors">
                Be an early tester
              </button>
              <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-3 rounded-lg text-sm font-medium transition-colors">
                Contact us
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default WaitlistNavbar;