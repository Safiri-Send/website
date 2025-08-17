"use client";
import React, { useState, useEffect, useRef } from "react";
import Logo from "@/public/Logo-black.svg";
import Image from "next/image";
import { Menu, X, Play } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle modal open/close
  const openModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Auto-play video when modal opens
  useEffect(() => {
    if (isModalOpen && videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, [isModalOpen]);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left section - Logo and Safiri text */}
            <div className="flex items-center space-x-2">
              <Image
                src={Logo}
                alt="Safiri Logo"
                className="h-8 w-auto md:h-10"
                priority
                width={120}
                height={40}
              />
            </div>

            {/* Right section - Navigation and Button */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Desktop Navigation */}
              <div className="flex items-center space-x-8">
                <a
                  href="#products"
                  className="text-black/90 hover:text-black transition-colors duration-300 font-medium relative group"
                >
                  Products
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5E19B3] transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#learn"
                  className="text-black/90 hover:text-black transition-colors duration-300 font-medium relative group"
                >
                  Learn
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5E19B3] transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#company"
                  className="text-black/90 hover:text-black transition-colors duration-300 font-medium relative group"
                >
                  The Company
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5E19B3] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>

              {/* Desktop Auth Button */}
              <button 
                onClick={openModal}
                className="bg-[#5E19B3] hover:bg-[#4A1590] text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
              >
                <Play className="w-4 h-4" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black hover:text-black/80 transition-colors duration-200 p-2 rounded-lg hover:bg-black/10"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-lg rounded-lg mt-2 border border-black/10 shadow-xl">
              <div className="px-6 py-6 space-y-4">
                <a
                  href="#products"
                  className="block text-black hover:text-[#5E19B3] transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </a>
                <a
                  href="#learn"
                  className="block text-black hover:text-[#5E19B3] transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Learn
                </a>
                <a
                  href="#company"
                  className="block text-black hover:text-[#5E19B3] transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  The Company
                </a>

                <div className="pt-4 border-t border-black/10">
                  <button 
                    onClick={openModal}
                    className="w-full bg-[#5E19B3] hover:bg-[#4A1590] text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Play className="w-4 h-4" />
                    <span>Watch Demo</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Video Modal - Fixed positioning */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] animate-fade-in">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content - Properly centered */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-scale-in max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-[#5E19B3]/20 to-transparent border-b border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-white">What is USSD?</h3>
                  <p className="text-gray-300 text-sm">Learn about Unstructured Supplementary Service Data and how it works</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg group"
                >
                  <X className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                </button>
              </div>
              
              {/* Video Container */}
              <div className="relative aspect-video bg-black">
                <video
                  ref={videoRef}
                  className="w-full h-full"
                  controls
                  autoPlay
                  muted
                  playsInline
                >
                  <source src="/path-to-your-ussd-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Loading placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 border-4 border-[#5E19B3] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p>Loading video...</p>
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="p-6 bg-gradient-to-r from-gray-900 to-black border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400 flex items-center space-x-2">
                    <span>Press</span>
                    <kbd className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs text-white">ESC</kbd>
                    <span>to close</span>
                  </div>
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 bg-[#5E19B3] hover:bg-[#4A1590] text-white text-sm font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;