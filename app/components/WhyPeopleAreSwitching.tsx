"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type FeatureCardProps = {
  title: string;
  description: string;
  category: string;
};

const FeatureCard = ({ title, description, category }: FeatureCardProps) => (
  <div className="relative flex flex-col items-start p-6 bg-[#1B1F28] rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] transform flex-shrink-0 w-80 md:w-[400px] h-[602px]">
    <div className="flex-grow bg-[#06090E] w-full h-full mb-2 rounded-lg">
      <Image src="" alt="" className="w-full h-full rounded-lg" />
    </div>
    <span className="text-sm font-semibold text-[#2C6CFF] mb-2 uppercase tracking-wide">
      {category}
    </span>
    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
    <p className="text-sm text-gray-300 leading-relaxed text-justify">
      {description}
    </p>
  </div>
);

const WhyPeopleAreSwitching = () => {
  const scrollContainerRef = useRef(null);

  const features = [
    {
      id: 1,
      category: "USSD PAYMENTS",
      title: "Fair Fees",
      description:
        "Send and receive international payment wherever you are using USSD codes.",
    },
    {
      id: 2,
      category: "USSD PAYMENTS",
      title: "Instant Delivery",
      description:
        "Send and receive international payment wherever you are using USSD codes.",
    },
    {
      id: 3,
      category: "USSD PAYMENTS",
      title: "No Apps Needed",
      description:
        "Send and receive international payment wherever you are using USSD codes.",
    },
    {
      id: 4,
      category: "USSD PAYMENTS",
      title: "Crypto-Free Experience",
      description:
        "Send and receive international payment wherever you are using USSD codes.",
    },
    {
      id: 5,
      category: "USSD PAYMENTS",
      title: "Fully Transparent",
      description:
        "Send and receive international payment wherever you are using USSD codes.",
    },
  ];

  // Function to scroll the container left or right
  interface ScrollContainerRef {
    current: HTMLDivElement | null;
  }

  type ScrollDirection = "left" | "right";

  const scroll = (direction: ScrollDirection) => {
    if ((scrollContainerRef as ScrollContainerRef).current) {
      // Adjust scroll amount based on card width and gap for smooth navigation
      const scrollAmount = 350; 
      if (direction === "left") {
        (scrollContainerRef as ScrollContainerRef).current!.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        (scrollContainerRef as ScrollContainerRef).current!.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <section className="bg-[#06090E] text-white py-16 md:py-24 font-inter">
      <div className="w-4/5 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[64px] font-bold mb-8 leading-[72px]">
          Why People Are <span className="block mt-6">Switching to Safiri</span>
        </h2>
        {/* Subtitle */}
        <p className="text-base md:text-lg  mb-12 max-w-lg mx-auto">
          Skip the long queues and use a Faster, fairer solution made for real
          people.
        </p>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center space-x-6 mb-16">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full text-gray-300 border border-white hover:bg-gray-400 transition-colors duration-200 shadow-md focus:outline-none"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full text-gray-300 border border-white hover:bg-gray-400 transition-colors duration-200 shadow-md focus:outline-none"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Feature Cards Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 pb-4 md:pb-6 no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: "none" }} // For Firefox
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              category={feature.category}
            />
          ))}
        </div>
        <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default WhyPeopleAreSwitching;
