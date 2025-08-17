"use client";
import React from "react";
import Image from "next/image";
import Smartphone from "@/public/smartphone.png";

const CTASection: React.FC = () => {
  const handleButtonClick = () => {
    console.log("CTA button clicked");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
      <div className="bg-[#1B1F28] rounded-3xl overflow-hidden shadow-2xl p-8 lg:p-12 relative">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left side - Smartphone Image */}
          <div className="relative flex justify-center lg:justify-between">
            {/* Centered blue background container - extended to touch bottom */}
            <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-t-2xl pb-0 pt-8 px-8 shadow-lg">
              {/* Decorative dotted lines extending from blue container */}
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full">
                <div className="w-px h-12 border-l-2 border-dashed border-blue-400/60"></div>
              </div>
              <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2">
                <div className="h-px w-12 border-t-2 border-dashed border-blue-400/60"></div>
              </div>

              {/* Smartphone Image - positioned to touch bottom */}
              <div className="relative">
                <Image
                  src={Smartphone}
                  alt="Smartphone showing MoneyPulse app"
                  width={400}
                  height={560}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Send Your First Transfer
              <br />
              In Under 2 Minutes.
            </h2>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Seamlessly manage your finances, invest smarter, and achieve your
              financial goals with our cutting-edge solutions.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button
                onClick={handleButtonClick}
                className="bg-[#5E19B3] hover:bg-[#4A1590] text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Dial *347*771#
              </button>
            </div>

            {/* Trust indicators */}
            <div className="hidden md:flex items-center space-x-6 mt-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Instant Transfer</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
