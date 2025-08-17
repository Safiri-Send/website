"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Transparent from "@/public/website/transparent.png"
import FairFees from "@/public/website/fairfees.png"
import CryptoFree from "@/public/website/cyptofree.png"
import NoApp from "@/public/website/noapp.png"
import Instant from "@/public/website/instant.png"
import Frame23 from "@/public/Frame24.png"

const SwitchingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      category: "USSD PAYMENTS",
      title: "Fair Fees",
      description: "Enjoy transparent, competitive rates for international transfers. No hidden charges or surprise fees - just straightforward pricing that puts more money in your recipient's hands.",
      image: FairFees,
      bgColor: "bg-green-500"
    },
    {
      category: "USSD PAYMENTS", 
      title: "Instant Delivery",
      description: "Your money moves at the speed of trust. Send international payments that arrive in seconds, not days, using simple USSD codes from any mobile phone.",
      image: Instant,
      bgColor: "bg-blue-900"
    },
    {
      category: "USSD PAYMENTS",
      title: "No Apps Needed", 
      description: "Access powerful payment features using any mobile phone - even basic models. Just dial a simple code and send money internationally without downloading apps or needing internet connectivity.",
      image: NoApp,
      bgColor: "bg-gray-400"
    },
    {
      category: "USSD PAYMENTS",
      title: "Crypto-Free Experience",
      description: "Send traditional currency transfers without the complexity of cryptocurrency. Simple, familiar transactions that work with regular money - no blockchain knowledge required.",
      image: CryptoFree,
      bgColor: "bg-purple-600"
    },
    {
      category: "USSD PAYMENTS",
      title: "Fully Transparent",
      description: "Track every step of your transfer with complete visibility. No mystery fees, hidden processes, or unclear timelines - see exactly where your money is and when it will arrive.",
      image: Transparent,
      bgColor: "bg-blue-600"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const getVisibleCards = () => {
    // On mobile (md breakpoint and below), show only one card
    // On larger screens, show three cards
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (isMobile) {
      return [{ ...cards[currentIndex], originalIndex: currentIndex }];
    }
    const visibleCards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % cards.length;
      visibleCards.push({ ...cards[index], originalIndex: index });
    }
    return visibleCards;
  };

  return (
    <section className="relative overflow-hidden flex items-center justify-center h-fit md:h-[916px]">
      {/* SVG Background */}
      <div className="absolute inset-0 flex items-center justify-center h-full">
        <Image
          src={Frame23}
          alt="Background pattern"
          fill
          className=""
          priority
        />
      </div>

      <div className="mx-0 md:mx-10 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start mb-12 pt-4 md:pt-0">
          {/* Left Side - Title and Description (1/4 width) */}
          <div className="lg:col-span-1">
            <div className="inline-block bg-gray-700/50 px-3 py-1 rounded-full text-xs font-semibold text-gray-300 mb-4 tracking-wider">
              Feature
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">
              Why People Are<br />
              Switching to Safiri
            </h2>
            <p className="text-gray-300 text-base mb-8 leading-relaxed">
              Skip the long queues and use a Fairer, faster solution made for real people.
            </p>
            
            {/* See All Services Button and Navigation */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <button className="bg-[#5E19B3] hover:bg-[#4A1590] w-fit text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2">
                <span>See All Services</span>
                <span>→</span>
              </button>
              
              {/* Navigation Controls beside button */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600/50 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-600"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600/50 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-600"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Cards (3/4 width) */}
          <div className="lg:col-span-3">
            {/* Cards Section */}
            <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start">
              {getVisibleCards().map((card, index) => (
                <div
                  key={`${card.originalIndex}-${currentIndex}`}
                  className="relative rounded-3xl overflow-hidden border-4 border-white shadow-lg transition-all duration-500 w-full md:w-[350px] h-[520px]"
                >
                  {/* Background Image Card */}
                  <div className="relative w-full h-full">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* White Content Card Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white text-black p-4 rounded-2xl shadow-lg">
                    {/* Category with background color - no dotted lines */}
                    <div className="flex justify-center mb-3">
                      <div className="text-xs font-semibold text-black px-3 py-1 rounded tracking-wider" style={{ backgroundColor: '#753DEF1A' }}>
                        {card.category}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 text-gray-900">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white w-6' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwitchingCarousel;