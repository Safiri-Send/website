'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import FeatureImg from '@/public/background-img.jpg'
import { ArrowRight } from 'lucide-react'

const FeatureSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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
            <div className="absolute top inset-0 bg-black/20 flex items-center justify-center">
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
      </div>
    </section>
  )
}

export default FeatureSection