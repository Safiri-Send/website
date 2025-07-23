"use client"
import React from 'react';
import Image from 'next/image';
import Logo from "@/public/Logo-black.svg";

const WaitlistFooter = () => {
  const handleTesterClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSc5de7cuwXhG6qvxaIRCnnXxgIlD5EvLMXlqHbz6vI-MDBJCg/viewform?usp=dialog', '_blank');
  };
 
  return (
    <footer className="bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Card */}
        <div className="relative mb-8 sm:mb-12">
      
        </div>

        {/* Footer Content - Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              
              <Image 
                src={Logo} 
                width={120} 
                height={40} 
                alt='Safiri Logo' 
                className='w-24'
              />
            
            </div>
            <p className="text-black text-sm leading-relaxed">
              Join the future of payment
            </p>
          </div>

          {/* Community Column */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-black mb-4">Community</h3>
            <nav className="flex flex-col space-y-3">
              <a href="/faqs" className="text-black hover:text-gray-800 transition-colors duration-200 text-sm">
                FAQs
              </a>
              <a href="/blogs" className="text-black hover:text-gray-800 transition-colors duration-200 text-sm">
                Blogs
              </a>
              <a href="/about" className="text-black hover:text-gray-800 transition-colors duration-200 text-sm">
                About Us
              </a>
            </nav>
          </div>

          {/* Contact/CTA Column */}
          <div className="lg:col-span-2 lg:text-right">
            <div className="flex flex-col lg:items-end space-y-4">
              <button 
                onClick={handleTesterClick}
                className="text-white font-medium px-6 py-3 rounded-lg text-sm transition-all duration-200 shadow-md hover:shadow-lg w-fit cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #CCE2F0 0%, #2C6CFF 100%)'
                }}
              >
                Be an early tester
              </button>
              
              <div className="text-sm text-black">
                <div className="mb-2 font-medium">Contact us</div>
                <a 
                  href="mailto:info@safirisend.xyz" 
                  className="text-black hover:text-gray-800 transition-colors duration-200"
                >
                  info@safirisend.xyz
                </a>
              </div>
            </div>
          </div>
        </div>
        
     
        
   
      </div>
    </footer>
  );
};

export default WaitlistFooter;