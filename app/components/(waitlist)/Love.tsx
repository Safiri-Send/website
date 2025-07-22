"use client"
import React from 'react';
import Image from 'next/image';
import family from '@/public/family.png';
import circles from "@/public/circles.svg"

const WaitlistLoveSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      
      {/* Circles background decoration - positioned behind the family image */}
      <div className="absolute right-1 bottom-0  z-0">
        <Image
          src={circles}
          alt="Background circles"
          width={3000}
          height={600}
          className="object-contain opacity-80"
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
        {/* Main heading */}
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
          Its Finance<br />
          With Love
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
          Safiri is the decentralized lending marketplace where your capital
          works smarter, not harder. Direct lending. Direct borrowing. Zero
          middlemen.
        </p>

        {/* Family image - positioned over the circles */}
        <div className="relative z-20 flex justify-center">
          <div className="relative">
            <Image
              src={family}
              alt="Happy family together"
              width={400}
              height={300}
              className="object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistLoveSection;