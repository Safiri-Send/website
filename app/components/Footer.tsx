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
    <footer className="bg-white border-t border-gray-100 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Navigation */}
        <div className="flex justify-center mb-8">
          <nav className="flex items-center space-x-12">
            <a href="/about" className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-sm">
              About
            </a>
            <a href="/compliance" className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-sm">
              Compliance
            </a>
            <a href="/privacy" className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-sm">
              Privacy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-sm">
              Terms
            </a>
          </nav>
        </div>
        <div className='w-full h-[1px] my-5 bg-gray-400'></div>
        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          
          {/* Left section - Logo and Language */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="flex items-center">
              <Image src={"/logo.png"} width={500} height={500} alt='' className='w-20'/>
            </div>
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 bg-gray-300 hover:bg-gray-200 rounded-full px-4 py-2 text-sm text-gray-500 transition-colors duration-200"
              >
                <div className="w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center">
                  <Image src={"/globe.png"} width={500} height={500} alt=''/>
                </div>
                <span className="font-medium">{selectedLanguage}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-full">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageSelect(lang)}
                      className="flex items-center space-x-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                    >
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-xs text-white">🌐</span>
                      </div>
                      <span>{lang}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

       
          <div className="flex items-center space-x-8">
            {/* Email */}
            <a 
              href="mailto:info@safirisend.xyz" 
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-sm"
            >
              info@safirisend.xyz
            </a>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="text-black hover:text-gray-500 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-black hover:text-gray-500 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-black hover:text-gray-500 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-black hover:text-gray-500 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-black hover:text-gray-500 transition-colors duration-200"
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