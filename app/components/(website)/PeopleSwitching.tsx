"use client"
import React from 'react';

const SwitchingCarousel = () => {
  const cards = [
    {
      category: "USSD PAYMENTS",
      title: "Fair Fees",
      description: "Send and receive international payment wherever you are using ussd codes.",
      image: "💰"
    },
    {
      category: "USSD PAYMENTS", 
      title: "Instant Delivery",
      description: "Send and receive international payment wherever you are using ussd codes.",
      image: "⚡"
    },
    {
      category: "USSD PAYMENTS",
      title: "No Apps Needed", 
      description: "Send and receive international payment wherever you are using ussd codes.",
      image: "📱"
    },
    {
      category: "USSD PAYMENTS",
      title: "Crypto-Free Experience",
      description: "Send and receive international payment wherever you are using ussd codes.",
      image: "🔒"
    },
    {
      category: "USSD PAYMENTS",
      title: "Fully Transparent",
      description: "Send and receive international payment wherever you are using ussd codes.",
      image: "👁️"
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
      <div className="flex-1 bg-black m-4 mb-2 rounded-xl flex items-center justify-center">
        <div className="text-6xl opacity-50">
          {card.image}
        </div>
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