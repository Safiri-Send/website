import React from 'react'
import Image from 'next/image'
import Background from '@/public/background-img.jpg'

const Hero = () => {
  return (
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
            
            {/* CTA Buttons - Updated to match Figma */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#CCE2F0] to-[#2C6CFF] hover:from-[#B8D7ED] hover:to-[#1E5CE8] text-white font-medium px-6 py-3 rounded-md text-sm transition-all duration-200 shadow-md hover:shadow-lg">
                Try it out— It's free
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white font-medium px-6 py-3 rounded-md text-sm transition-all duration-200 border border-white/60 hover:border-white/80">
                Learn about USSD
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero