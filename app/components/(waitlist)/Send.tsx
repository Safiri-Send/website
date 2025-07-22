"use client"
import React from 'react';
import Image from 'next/image';
import smiling from '@/public/young-african.png';
import mom from "@/public/mom.png"
import { FaLocationArrow } from "react-icons/fa6";

const WaitlistMomSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={smiling}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-purple-500/30 rounded-full blur-sm animate-pulse z-10"></div>
      <div className="absolute bottom-32 right-20 w-12 h-12 bg-blue-400/30 rounded-full blur-sm animate-pulse z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Left side - Main text */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            We make sure your mom receives the money easily
          </h1>
        </div>

        {/* Right side - Mom image with overlay */}
        <div className="relative mt-40 ml-14">
          {/* Mom image */}
          <div className="relative w-[27rem] h-[19rem] rounded-2xl overflow-hidden">
            <Image
              src={mom}
              alt="Mom receiving money"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Text overlay on mom image */}
          <div className="absolute bottom-4 left-4 right-4 bg-[#FFFFFF] backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#F1EFEF] rounded-lg flex items-center justify-center">
               <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.38922 0.85719L1.14658 5.09983L7.51054 5.80694L8.21765 12.1709L12.4603 7.92826L11.7532 1.5643L5.38922 0.85719Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <span className="text-sm font-medium text-black">
                Sent - We will notify the recipient to finalize
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom tabs */}
      <div className="bg-[#0000008A] px-4 py-2  rounded-lg absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        <div className="px-6 py-3 border border-white/20 text-white rounded-lg backdrop-blur-sm">
          Using Safiri
        </div>
        <div className="px-6 py-3 border border-white/20 text-white rounded-lg backdrop-blur-sm">
          USSD & phones
        </div>
        <div className="px-6 py-3 border border-white/20 text-white rounded-lg backdrop-blur-sm">
          Currencies
        </div>
      </div>
    </div>
  );
};

export default WaitlistMomSection;