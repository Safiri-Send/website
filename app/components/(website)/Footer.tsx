"use client"
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Music } from 'lucide-react';
import Image from 'next/image';
import Logo from "@/public/Logo-gray.svg"
import Send from "@/public/send.svg"
import LanguagePicker from './LanguagePicker' 

const Footer: React.FC = () => {

  return (
    <footer className="bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Card */}
        <div className="relative mb-8 sm:mb-12">
          {/* Background Card with Send Image */}
          <div className="relative rounded-3xl overflow-hidden" style={{ minHeight: '300px' }}>
            <Image
              src={Send}
              alt="Send background"
              fill
              className="object-cover"
              priority
            />
            
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
            
            {/* Content overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 sm:py-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Send your first transfer<br />
                in under 2 minutes.
              </h2>
              
              <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium px-8 py-4 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Try it out— It's free
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            <a href="/about" className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-sm whitespace-nowrap">
              About
            </a>
            <a href="/compliance" className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-sm whitespace-nowrap">
              Compliance
            </a>
            <a href="/privacy" className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-sm whitespace-nowrap">
              Privacy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-sm whitespace-nowrap">
              Terms
            </a>
          </nav>
        </div>
        
        {/* Divider */}
        <div className='w-full h-[1px] my-4 sm:my-6 bg-gray-200'></div>
        
        {/* Bottom Section */}
        <div className="flex flex-col space-y-6 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
          
          {/* Left section - Logo and Language */}
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4 sm:justify-center lg:justify-start">
            {/* Logo */}
            <div className="flex items-center">
              <Image src={Logo} width={80} height={32} alt='Safiri Logo' className='w-16 sm:w-20'/>
            </div>
            
            {/* Language Selector */}
            <LanguagePicker variant="footer" />
          </div>

          {/* Right section - Email and Social Icons */}
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-6 md:space-x-8 lg:justify-end">
            {/* Email */}
            <a 
              href="mailto:info@safirisend.xyz" 
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-sm text-center break-all sm:break-normal"
            >
              info@safirisend.xyz
            </a>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1"
                aria-label="TikTok"
              >
                <Music className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;