import React from 'react';
import Image from 'next/image';
import moneyBag from "@/public/coin-purse.png";

const YourMoneyIsSafe = () => {
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
    <section className="bg-white py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="mb-6 md:mb-12">
          <h2 className="text-2xl text-center md:text-left md:text-3xl lg:text-4xl font-bold text-gray-900">
            Your Money Is Safe
          </h2>
        </div>

        {/* Content Card Container */}
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed">
                Safiri is built to protect every transaction from the moment you hit send to the moment it's received.
              </p>

              {/* Features List */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-full h-80 md:w-96 md:h-96 flex items-center justify-center">
                  <Image
                    src={moneyBag}
                    alt="Money bag with coins - Your money is safe with Safiri"
                    width={400}
                    height={400}
                    className="object-contain drop-shadow-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourMoneyIsSafe;