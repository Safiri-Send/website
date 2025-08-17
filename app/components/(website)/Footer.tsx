"use client"
import React from 'react';
import { Facebook, Instagram, Linkedin} from 'lucide-react';
import { FaXTwitter, FaTiktok  } from "react-icons/fa6";
import Image from 'next/image';
import Logo from "@/public/Logo-black.svg"
import Smartphone from "@/public/smartphone.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Card */}
        <div className="relative mb-8 sm:mb-12">
          {/* Dark background card with smartphone image */}
          <div className="bg-[#1B1F28] rounded-3xl overflow-hidden shadow-2xl">
             <div className="relative flex justify-center lg:justify-between flex-col">
              {/* Left side - Smartphone Image */}
              <div className="relative p-8 lg:p-12">
                {/* Blue gradient background behind phone - extended to touch bottom */}
                <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-t-2xl pb-0 pt-8 px-8 shadow-lg">
                  {/* Smartphone Image - positioned to touch bottom */}
                  <div className="flex justify-center">
                    <Image
                      src={Smartphone}
                      alt="Smartphone showing MoneyPulse app"
                      width={400}
                      height={560}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                  Send Your First Transfer<br />
                  In Under 2 Minutes.
                </h2>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Seamlessly manage your finances, invest smarter, and achieve your financial goals with our cutting-edge solutions.
                </p>

                <button className="bg-[#5E19B3] hover:bg-[#4A1590] text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Dial *347*771#
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            <a href="/about" className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm whitespace-nowrap">
              About
            </a>
            <a href="/compliance" className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm whitespace-nowrap">
              Compliance
            </a>
            <a href="/privacy" className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm whitespace-nowrap">
              Privacy
            </a>
            <a href="/terms" className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm whitespace-nowrap">
              Terms
            </a>
          </nav>
        </div>
        
        {/* Divider */}
        <div className='w-full h-[1px] my-4 sm:my-6 bg-gray-200'></div>
        
        {/* Bottom Section */}
        <div className="flex flex-col space-y-6 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
          
          {/* Left section - Logo */}
          <div className="flex items-center justify-center lg:justify-start">
            <Image src={Logo} width={90} height={32} alt='Safiri Logo' className='w-20 sm:w-20 lg:w-24'/>
          </div>

          {/* Right section - Email and Social Icons */}
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-6 md:space-x-8 lg:justify-end">
            {/* Email */}
            <a 
              href="mailto:info@safirisend.xyz" 
              className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm text-center break-all sm:break-normal"
            >
              info@safirisend.xyz
            </a>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a 
                href=" https://www.facebook.com/share/17AikhJx3Y/" 
                target='_blank'
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
                href="https://x.com/safiri_send"
                target='_blank' 
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1"
                aria-label="Twitter"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a 
                href=" https://www.linkedin.com/company/safiri-%E2%80%93-blockchain-cross-border-payments/"
                target='_blank' 
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
                <FaTiktok  className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;