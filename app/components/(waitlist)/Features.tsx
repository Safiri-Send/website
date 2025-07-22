"use client"
import React from 'react';
import Image from 'next/image';
import moneyBagImage from '@/public/moneybag.png';
import mamaSmilingImage from '@/public/smiling-woman.png';
import nokiaPhoneImage from '@/public/nokia.png';
import ussdGlobeImage from '@/public/ussd-globe.png';

const WaitlistFeatures = () => {
  const features = [
    {
      title: "Send Any Currency To Nigeria",
      description: "NUMA is the decentralized lending marketplace where your capital works smarter, not harder. Direct lending. Direct borrowing. Zero middlemen.",
      image: moneyBagImage,
      alt: "Money bag"
    },
    {
      title: "Don't Worry, Mama Knows How To Use It",
      description: "Safiri offers a unit user experience, offering options for the elder who have very little experience operating smart devices",
      image: mamaSmilingImage,
      alt: "Mama smiling"
    },
    {
      title: "You Need A Smartphone To Send Money.",
      description: "Safiri makes finance simple and direct by eliminating the need for advanced smart gadgets, with simple USSD you can send international payments.",
      image: nokiaPhoneImage,
      alt: "Nokia phone"
    },
    {
      title: "USSD For International Payment",
      description: "Safiri allows you to send and receive international payments and create an account using just USSD codes.",
      image: ussdGlobeImage,
      alt: "USSD Globe"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative">
        {/* Button positioned at top left, outside the grid */}
        <div className="absolute -top-16 left-0 z-10">
           <button 
                className="text-white font-medium px-6 py-3 rounded-lg text-sm transition-all duration-200 shadow-md hover:shadow-lg w-fit"
                style={{
                  background: 'linear-gradient(135deg, #CCE2F0 0%, #2C6CFF 100%)'
                }}
              >
            Try it out now
          </button>
        </div>

        {/* Navigation arrows */}
        {/* <div className="absolute top-0 right-0 flex gap-2 z-10">
          <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div> */}

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl flex flex-col relative overflow-hidden hover:scale-105 transition-transform duration-300"
              style={{
                backgroundColor: '#F0EEFE',
                height: '600px',
                width: '100%',
                maxWidth: '350px'
              }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-8 -translate-y-8"></div>
              
              {/* Content section */}
              <div className="p-8 flex-shrink-0 z-10 relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Image section - takes remaining space and touches all edges */}
              <div className="absolute bottom-0 left-0 right-0" style={{ height: '300px' }}>
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-cover"
                  style={{
                    borderBottomLeftRadius: '1rem',
                    borderBottomRightRadius: '1rem',
                    ...(index === 1 && {
                      borderTopLeftRadius: '2rem',
                      borderTopRightRadius: '2rem'
                    })
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaitlistFeatures;