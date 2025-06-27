"use client"
import React, { useState } from 'react';
import { ChevronDown, Facebook, Instagram, Twitter, Linkedin, Music } from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = ['EN', 'FR', 'ES', 'DE'];

  const handleLanguageSelect = (lang: string) => {
    setSelectedLanguage(lang);
    setIsLanguageOpen(false);
  };

  return (
    <footer className="bg-white border-t border-gray-100 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Navigation */}
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
        <div className='w-full h-[1px] my-4 sm:my-5 bg-gray-400'></div>
        
        {/* Bottom Section */}
        <div className="flex flex-col space-y-6 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
          
          {/* Left section - Logo and Language */}
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4 sm:justify-center lg:justify-start">
            {/* Logo */}
            <div className="flex items-center">
              <Image src={"/logo.png"} width={500} height={500} alt='' className='w-16 sm:w-20'/>
            </div>
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 bg-gray-300 hover:bg-gray-200 rounded-full px-3 py-2 sm:px-4 text-sm text-gray-500 transition-colors duration-200"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-400 flex items-center justify-center">
                  <Image src={"/globe.png"} width={500} height={500} alt=''/>
                </div>
                <span className="font-medium">{selectedLanguage}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 sm:left-0 sm:transform-none mb-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-full">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageSelect(lang)}
                      className="flex items-center space-x-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-xs text-white">🌐</span>
                      </div>
                      <span>{lang}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
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
                className="text-black hover:text-gray-500 transition-colors duration-200 p-1"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-black hover:text-gray-500 transition-colors duration-200 p-1"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-black hover:text-gray-500 transition-colors duration-200 p-1"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-black hover:text-gray-500 transition-colors duration-200 p-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-black hover:text-gray-500 transition-colors duration-200 p-1"
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