"use client"
import React from 'react';

const CTASection: React.FC = () => {
  const handleButtonClick = () => {
    console.log('CTA button clicked');
  };

  return (
    <section className="bg-[#1B1F28] max-w-7xl rounded-2xl mx-auto mt-6 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
          Send your first transfer
        </h2>
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12">
          in under 2 minutes.
        </p>
        
        <button
          onClick={handleButtonClick}
          className="bg-[#753DEF] hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Dial *347*771#
        </button>
      </div>
    </section>
  );
};

export default CTASection;