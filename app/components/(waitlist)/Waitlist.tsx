"use client"
import React from 'react';
import Navbar from '../(waitlist)/Navbar';
import WaitlistHero from './Hero';
import WaitlistFeatures from './Features';
import WaitlistLoveSection from './Love';
import WaitlistMomSection from './Send';
import WaitlistContact from './Contact';
import Footer from '../(waitlist)/Footer';


const WaitlistPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation can be imported from your existing Navbar component */}
      <Navbar /> 
      
      {/* Section 1: Simple Better Finance */}
      <WaitlistHero />
      
      {/* Section 2: Features Carousel */}
      <WaitlistFeatures />
      
      {/* Section 3: Finance With Love */}
      <WaitlistLoveSection />
      
      {/* Section 4: Mom Money Transfer */}
      <WaitlistMomSection />
      
      {/* Section 5: Contact Form */}
      <WaitlistContact />
      
      {/* Footer can be imported from your existing Footer component */}
      <Footer /> 
    </div>
  );
};

export default WaitlistPage;