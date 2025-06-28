import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'
import DeviceCompatibility from "@/app/components/DeviceCompatibility";
import GlobalBankAccount from "@/app/components/GlobalBankAccount";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
     <FeatureSection />
      <DeviceCompatibility />

      <GlobalBankAccount/>
    </div>
  );
};
    </main>
  )
}

