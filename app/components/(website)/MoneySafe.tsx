import React from 'react';
import Image from 'next/image';
import moneyBag from "@/public/coin-purse.png";

const YourMoneyIsSafe = () => {
  // You can replace this placeholder with your actual image import
  // import moneyBagImage from '@/public/money-bag.png';

  const features = [
    {
      title: "No Room for Mistakes",
      description: "Funds are locked until your recipient confirms — nothing gets lost in the middle."
    },
    {
      title: "Verified Every Step",
      description: "Every transfer is tracked and recorded. You can always see where your money is and when it lands."
    },
    {
      title: "Built for Protection",
      description: "Fraud checks, identity verification, and 24/7 monitoring keep you and your loved ones secure."
    },
    {
      title: "Trusted Partners Only",
      description: "We work strictly with regulated banks and licensed mobile money providers, no third-party shortcuts."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900" style={{ lineHeight: '1.1' }}>
                Your Money
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 ml-3" style={{ lineHeight: '1.1' }}>
                Is Safe
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Safiri is built to protect every transaction — from the moment you hit send to the moment it's received.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* money bag image */}
              <div className="w-80 h-80 md:w-[600px] md:h-[600px] flex items-center justify-center">
                <Image
                  src={moneyBag}
                  alt="Money bag with coins - Your money is safe with Safiri"
                  width={600}
                  height={600}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourMoneyIsSafe;