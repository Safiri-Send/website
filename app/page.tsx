import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import DeviceCompatibility from "@/app/components/DeviceCompatibility";
import GlobalBankAccount from "@/app/components/GlobalBankAccount";
import CTASection from "./components/Cta-section";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeatureSection />
      <DeviceCompatibility />
      <GlobalBankAccount />
      <CTASection />
      <Footer />
    </main>
  );
}
