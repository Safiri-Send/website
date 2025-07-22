import Navbar from "./components/(website)/Navbar";
import Hero from "./components/(website)/Hero";
import FeatureSection from "./components/(website)/FeatureSection";
import DeviceCompatibility from "@/app/components/(website)/DeviceCompatibility";
import GlobalBankAccount from "@/app/components/(website)/GlobalBankAccount";
import CTASection from "./components/(website)/Cta-section";
import PeopleSwitching from "./components/(website)/PeopleSwitching";
import MoneySafe from "./components/(website)/MoneySafe";
import Footer from "./components/(website)/Footer";
import WaitlistPage from "./components/(waitlist)/Waitlist";

export default function HomePage() {
  return (
    <main>
      {/* <Navbar />
      <Hero />
      <FeatureSection />
      <DeviceCompatibility />
      <GlobalBankAccount />
      <CTASection />
      <PeopleSwitching />
      <MoneySafe />
      <Footer /> */}

      <WaitlistPage />
    </main>
  );
}
