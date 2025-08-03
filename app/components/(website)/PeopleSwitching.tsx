"use client"
import React from 'react';
import Image from 'next/image';
import Transparent from "@/public/website/transparent.png"
import FairFees from "@/public/website/fairfees.png"
import CryptoFree from "@/public/website/cyptofree.png"
import NoApp from "@/public/website/noapp.png"
import Instant from "@/public/website/instant.png"

const SwitchingCarousel = () => {
  const cards = [
    {
      category: "USSD PAYMENTS",
      title: "Fair Fees",
      description: "Enjoy transparent, competitive rates for international transfers. No hidden charges or surprise fees - just straightforward pricing that puts more money in your recipient's hands.",
      image: FairFees
    },
    {
      category: "USSD PAYMENTS", 
      title: "Instant Delivery",
      description: "Your money moves at the speed of trust. Send international payments that arrive in seconds, not days, using simple USSD codes from any mobile phone.",
      image: Instant
    },
    {
      category: "USSD PAYMENTS",
      title: "No Apps Needed", 
      description: "Access powerful payment features using any mobile phone - even basic models. Just dial a simple code and send money internationally without downloading apps or needing internet connectivity.",
      image: NoApp
    },
    {
      category: "USSD PAYMENTS",
      title: "Crypto-Free Experience",
      description: "Send traditional currency transfers without the complexity of cryptocurrency. Simple, familiar transactions that work with regular money - no blockchain knowledge required.",
      image: CryptoFree
    },
    {
      category: "USSD PAYMENTS",
      title: "Fully Transparent",
      description: "Track every step of your transfer with complete visibility. No mystery fees, hidden processes, or unclear timelines - see exactly where your money is and when it will arrive.",
      image: Transparent
    }
  ];

  // Duplicate cards for seamless infinite scroll
  const duplicatedCards = [...cards, ...cards, ...cards];

  const CardComponent = ({ card, index }: { card: typeof cards[0], index: number }) => (
    <div
      key={`card-${index}`}
      className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800 flex flex-col hover:bg-gray-700/30 transition-colors duration-300 overflow-hidden flex-shrink-0"
      style={{ height: '600px', width: '380px' }}
    >
      {/* Large Image/Icon Section - Takes most of the card */}
      <div className="flex-1 m-4 mb-2 rounded-xl overflow-hidden relative">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Text Content at Bottom */}
      <div className="p-4 pt-2">
        <div className="text-xs font-semibold text-blue-400 mb-1 tracking-wider">
          {card.category}
        </div>
        <h3 className="text-lg font-bold mb-2 text-white">
          {card.title}
        </h3>
        <p className="text-gray-300 text-xs leading-relaxed">
          {card.description}
        </p>
      </div>
    </div>
  );

  return (
    <section className="bg-black text-white py-16 lg:my-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why People Are<br />
            Switching to Safiri
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Skip the long queues and use a Fairer, faster solution made for real people.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Container */}
      <div className="relative overflow-hidden">
        <div className="flex gap-6 animate-scroll-left">
          {duplicatedCards.map((card, index) => (
            <CardComponent key={`card-${index}`} card={card} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${(380 + 24) * cards.length}px);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
          width: ${(380 + 24) * duplicatedCards.length}px;
        }
        
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SwitchingCarousel;