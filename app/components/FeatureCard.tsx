'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import FeatureImg from '@/public/background-img.jpg'
import { ArrowRight } from 'lucide-react'

const SafiriMakesItEasy = () => {
  const [activeButton, setActiveButton] = useState(0) // First button active by default
  const [isVisible, setIsVisible] = useState(false)
  const [loadedButtons, setLoadedButtons] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const deviceButtons = [
    { name: 'Desktop App', id: 0 },
    { name: 'Web Browser', id: 1 },
    { name: 'Android Device', id: 2 },
    { name: 'Apple iOS', id: 3 }
  ]

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
            // Start loading buttons sequentially
            deviceButtons.forEach((_, index) => {
              setTimeout(() => {
                setLoadedButtons(prev => [...prev, index])
              }, index * 200) // 200ms delay between each button
            })
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

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Safiri makes <br />
            it easy
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 - USSD Payments */}
          <div className="bg-gradient-to-br from-[#753DEF] to-[#F4F2FE] p-8 rounded-3xl text-white relative overflow-hidden h-96">
            <div className="relative z-10">
              <div className="text-xs font-semibold mb-4 opacity-90">
                USSD PAYMENTS
              </div>
              <h3 className="text-2xl font-bold mb-4 leading-tight">
                International payments using just USSD codes.
              </h3>
              <p className="text-sm mb-6 opacity-90 leading-relaxed">
                Send and receive international payments wherever you are using simple USSD codes.
              </p>
              <button className="flex items-center text-sm font-semibold hover:opacity-80 transition-opacity">
                Get Started with USSD
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            {/* Decorative elements */}
            <div className="absolute bottom-4 right-4 w-20 h-20 bg-white/10 rounded-full"></div>
            <div className="absolute top-6 right-6 w-12 h-12 bg-white/5 rounded-full"></div>
          </div>

          {/* Card 2 - Center Image */}
          <div className="relative rounded-3xl overflow-hidden h-96">
            <Image
              src={FeatureImg}
              alt="Person using Safiri on mobile"
              fill
              className="object-cover"
              quality={100}
            />
            {/* Overlay with logo */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="text-white text-4xl font-bold">
                Safiri
              </div>
            </div>
          </div>

          {/* Card 3 - Web Payment */}
          <div className="bg-gradient-to-br from-[#CCE2F0] to-[#2C6CFF] p-8 rounded-3xl text-white relative overflow-hidden h-96">
            <div className="relative z-10">
              <div className="text-xs font-semibold mb-4 opacity-90">
                WEB PAYMENT
              </div>
              <h3 className="text-2xl font-bold mb-4 leading-tight">
                Receive money instantly using the web app
              </h3>
              <p className="text-sm mb-6 opacity-90 leading-relaxed">
                Create flexible and secure payment solutions with your custom payment code.
              </p>
              <button className="flex items-center text-sm font-semibold hover:opacity-80 transition-opacity">
                Get A Web App
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            {/* Decorative elements */}
            <div className="absolute bottom-4 right-4 w-20 h-20 bg-white/10 rounded-full"></div>
            <div className="absolute top-6 right-6 w-12 h-12 bg-white/5 rounded-full"></div>
          </div>
        </div>

        {/* Bottom Section - Receive and Send */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Receive and send <br />
            with any device
          </h3>
          
          {/* Device Icons */}
          <div className="flex justify-center items-center gap-4 mb-12 flex-wrap">
            {deviceButtons.map((device, index) => (
              <button
                key={device.id}
                onMouseEnter={() => setActiveButton(index)}
                onClick={() => setActiveButton(index)}
                className={`
                  relative overflow-hidden px-6 py-3 rounded-full text-sm font-semibold flex items-center transition-all duration-300 transform
                  ${loadedButtons.includes(index) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-4 opacity-0'
                  }
                  ${activeButton === index
                    ? 'text-purple-700 hover:scale-105 shadow-md'
                    : 'text-gray-700 hover:text-purple-600 hover:scale-105'
                  }
                  bg-gray-100
                `}
                style={{
                  transitionDelay: loadedButtons.includes(index) ? '0ms' : `${index * 200}ms`
                }}
              >
                {/* Progress Bar Background */}
                <div 
                  className={`
                    absolute inset-0 bg-purple-100 transition-all duration-1000 ease-out
                    ${loadedButtons.includes(index) && isVisible 
                      ? 'w-full' 
                      : 'w-0'
                    }
                    ${activeButton === index ? 'bg-purple-200' : 'bg-purple-100'}
                  `}
                  style={{
                    transitionDelay: `${index * 200 + 100}ms` // Start progress bar after button appears
                  }}
                />
                
                {/* Hover overlay */}
                <div 
                  className={`
                    absolute inset-0 transition-all duration-300
                    ${activeButton === index
                      ? 'bg-purple-200'
                      : 'bg-transparent hover:bg-purple-50'
                    }
                  `}
                />
                
                {/* Button content */}
                <span className="relative z-10 flex items-center">
                  {device.name}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </button>
            ))}
          </div>

          {/* Global Bank Account Section */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
            <div className="md:w-1/2 text-left mb-8 md:mb-0">
              <div className="text-sm font-semibold text-blue-600 mb-2">
                COMING SOON
              </div>
              <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get a global <br />
                bank account
              </h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get a bank account in just minutes. Receive and access your global payments wherever you want to.
              </p>
              <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Get bank account
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            
            {/* 3D Illustration Area */}
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="relative w-96 h-64">
                {/* Main Globe - positioned on the far right */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                  <Image
                    src="/global.svg"
                    alt="Global bank account"
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
                
                {/* Purple Dollar Sign - top left area */}
                <div className="absolute left-12 top-4 transform rotate-12">
                  <Image
                    src="/dollar.svg"
                    alt="Dollar currency"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                
                {/* Blue Euro Sign - middle left */}
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -rotate-12">
                  <Image
                    src="/euro.svg"
                    alt="Euro currency"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                
                {/* Blue Coin/Card - top center */}
                <div className="absolute left-1/2 top-8 transform -translate-x-1/2 rotate-6">
                  <Image
                    src="/coin.svg"
                    alt="Payment card"
                    width={45}
                    height={45}
                    className="object-contain"
                  />
                </div>
                
                {/* Blue Coin/Card - bottom left */}
                <div className="absolute left-16 bottom-8 transform rotate-45">
                  <Image
                    src="/coin.svg"
                    alt="Payment card"
                    width={42}
                    height={42}
                    className="object-contain"
                  />
                </div>
                
                {/* Blue Coin/Card - bottom right (in front of globe) */}
                <div className="absolute right-16 bottom-4 transform -rotate-12">
                  <Image
                    src="/coin.svg"
                    alt="Payment card"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SafiriMakesItEasy