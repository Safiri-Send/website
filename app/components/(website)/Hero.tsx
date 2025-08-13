'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Background from '@/public/background-img.jpg'
import { X, Play } from 'lucide-react'
import spiral from '@/public/spiral.svg'

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Handle modal open/close
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  // Auto-play video when modal opens
  useEffect(() => {
    if (isModalOpen && videoRef.current) {
      videoRef.current.play().catch(console.error)
    }
  }, [isModalOpen])

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with optimizations */}
        <div className="absolute inset-0">
          <Image
            src={Background}
            alt="Hero background - Person using mobile phone for money transfer"
            fill
            className={`object-cover object-center transition-opacity duration-700 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            priority
            quality={85}
            sizes="100vw"
            onLoad={() => setImageLoaded(true)}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBobHB0eH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/2gAMAwEAAhEDEQA/AJvBYONMlJDMF25+hoa"
          />
          
          {/* Enhanced dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>

        {/* Decorative Spiral positioned at bottom right */}
        <div className="absolute bottom-8 right-8 opacity-30 pointer-events-none z-20">
          <Image
            src={spiral}
            alt=""
            width={200}
            height={200}
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 animate-spin-slow"
            loading="lazy"
          />
        </div>

        {/* Additional decorative elements */}
        <div className="absolute left-0 bottom-0 w-32 h-32 bg-gradient-to-tr from-[#5E19B3]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute right-1/4 top-1/4 w-24 h-24 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full blur-2xl"></div>
        
        <div className="relative z-10 mx-28 px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-start">
            <div className="max-w-2xl">
              {/* Main Content */}
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-2xl">
                  The Better way to{' '}
                  <span className="block bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                    send money.
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-white/95 mb-8 max-w-xl leading-relaxed drop-shadow-lg font-light">
                  Safiri gives you all the power and flexibility you need to send 
                  money to anyone on the planet via USSD code or Web app.
                </p>
                
                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="group bg-[#5E19B3] hover:bg-[#4A1590] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 border border-white/10 hover:border-white/20">
                    <span className="flex items-center justify-center space-x-2">
                      <span>Dial *347*771#</span>
                      
                    </span>
                  </button>
                  
                  <button 
                    onClick={openModal}
                    className="group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-medium px-8 py-4 rounded-xl text-lg transition-all duration-300 border border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <span>Learn about USSD</span>
                    </span>
                  </button>
                </div>

                {/* Trust indicators */}
                <div className="pt-8 flex items-center space-x-6 text-white/70">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Secure & Fast</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">24/7 Available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">No Internet Required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-4xl mx-4 bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-scale-in">
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
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </>
  )
}

export default Hero