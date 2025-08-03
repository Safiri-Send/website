'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Background from '@/public/background-img.jpg'
import { X, Play } from 'lucide-react'

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
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
      document.body.style.overflow = 'hidden' // Prevent background scroll
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
        {/* Background Image */}
        <Image
          src={Background}
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-start">
            <div className="max-w-2xl">
              {/* Main Content - Properly left aligned */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
                The Better way to{' '}
                <span className="block">send money.</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white mb-8 max-w-xl leading-relaxed drop-shadow-md">
                Safiri Gives you all the power and flexibility you need to send 
                money to anyone on the planet via USSD code or Web app.
              </p>
              
              {/* CTA Buttons  */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#2C6CFF] hover:from-[#B8D7ED] hover:to-[#1E5CE8] text-white font-medium px-6 py-4 rounded-md text-md transition-all duration-200 shadow-md hover:shadow-lg">
                  Dial *347*771#
                </button>
                <button 
                  onClick={openModal}
                  className="bg-transparent hover:bg-white/10 text-white font-medium px-6 py-4 rounded-md text-sm transition-all duration-200 border border-white/60 hover:border-white/80 group"
                >
                  Learn about USSD
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-4xl mx-4 bg-black rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 bg-gray-900">
              <div>
                <h3 className="text-xl font-bold text-white">What is USSD?</h3>
                <p className="text-gray-400 text-sm">Learn about Unstructured Supplementary Service Data and how it works</p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
              >
                <X className="w-6 h-6" />
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
                {/* Fallback for browsers that don't support video tag */}
                Your browser does not support the video tag.
              </video>
              
              {/* Custom play button overlay (optional) */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-6 bg-gray-900 border-t border-gray-800">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  Press <kbd className="px-2 py-1 bg-gray-800 rounded text-xs">ESC</kbd> to close
                </div>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-[#2C6CFF] hover:bg-[#2C6CFF]/80 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Hero