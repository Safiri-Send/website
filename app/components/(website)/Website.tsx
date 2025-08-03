import Navbar from "./Navbar";
import Hero from "./Hero";
import FeatureSection from "./FeatureSection";
import DeviceCompatibility from "./DeviceCompatibility";
import GlobalBankAccount from "./GlobalBankAccount";
import CTASection from "./Cta-section";
import PeopleSwitching from "./PeopleSwitching";
import MoneySafe from "./MoneySafe";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeatureSection />
      <DeviceCompatibility />
      <GlobalBankAccount />
      <CTASection />
      <PeopleSwitching />
      <MoneySafe />
      <Footer />
    </main>
  );
}
