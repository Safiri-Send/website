'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import FeatureImg from '@/public/background-img.jpg'
import Logo from "@/public/Logo.svg"
import { ArrowRight, X, Play } from 'lucide-react'

const FeatureSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

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
      <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Safiri makes it easy
            </h2>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            {/* Card 1 - USSD Payments */}
            <div className="bg-gradient-to-br from-[#753DEF] to-[#F4F2FE] p-8 rounded-2xl text-white relative overflow-hidden w-full max-w-[413px] flex flex-col" style={{ height: '500px' }}>
              <div className="relative z-10 flex-1">
                <div className="text-xs font-semibold mb-4 opacity-90">
                  USSD PAYMENTS
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  International payments using just USSD codes.
                </h3>
                <p className="text-sm mb-6 opacity-90 leading-relaxed">
                  Send and receive international payments wherever you are using simple USSD codes.
                </p>
              </div>
              {/* Button at bottom */}
              <div className="relative z-10 mt-auto">
                <button
                  onClick={openModal}
                  className="flex items-center gap-2 text-sm font-semibold bg-white/20 hover:bg-white/30 transition-all duration-200 px-4 py-3 rounded-lg group"
                >
                  See how it works
                  <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
              {/* Decorative elements */}
              <div className="absolute bottom-4 right-4 w-20 h-20 bg-white/10 rounded-full"></div>
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/5 rounded-full"></div>
            </div>

            {/* Card 2 - Center Image with Logo */}
            <div className="relative rounded-2xl overflow-hidden w-full max-w-[413px]" style={{ height: '500px' }}>
              <Image
                src={FeatureImg}
                alt="Person using Safiri on mobile"
                fill
                className="object-cover"
                quality={100}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>
              {/* Logo positioned at bottom */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <Image
                  src={Logo}
                  alt="Safiri Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Card 3 - Web Payment */}
            <div className="bg-gradient-to-br from-[#CCE2F0] to-[#2C6CFF] p-8 rounded-2xl text-white relative overflow-hidden w-full max-w-[413px] flex flex-col" style={{ height: '500px' }}>
              <div className="relative z-10 flex-1">
                <div className="text-xs font-semibold mb-4 opacity-90">
                  WEB PAYMENT
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  Receive money instantly using the web app
                </h3>
                <p className="text-sm mb-6 opacity-90 leading-relaxed">
                  Create flexible and secure payment solutions with your custom payment code.
                </p>
              </div>
              {/* Button at bottom */}
              <div className="relative z-10 mt-auto">
                <button className="flex items-center gap-2 text-sm font-semibold bg-white/20 hover:bg-white/30 transition-all duration-200 px-4 py-3 rounded-lg">
                  Coming Soon
                  <div className="bg-white/20 rounded-full p-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
              {/* Decorative elements */}
              <div className="absolute bottom-4 right-4 w-20 h-20 bg-white/10 rounded-full"></div>
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/5 rounded-full"></div>
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
                <h3 className="text-xl font-bold text-white">How Safiri USSD Payment Work</h3>
                <p className="text-gray-400 text-sm">Step-by-step guide to sending international payments</p>
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
                <source src="/path-to-your-video.mp4" type="video/mp4" />
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
                  className="px-4 py-2 bg-[#753DEF] hover:bg-[#753DEF]/80 text-white text-sm font-medium rounded-lg transition-colors"
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

export default FeatureSection