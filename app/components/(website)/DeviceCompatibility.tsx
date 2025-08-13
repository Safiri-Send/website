"use client";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import nokia from "@/public/nokia2.png";
import ussd from "@/public/USSD.png";
import dollar from "@/public/Dallar.png";
import Image from "next/image";

const devices = [
  {
    id: "java",
    label: "JAVA PHONE",
    active: true,
  },
  {
    id: "ios", 
    label: "IOS DEVICES",
    active: false,
  },
  {
    id: "android",
    label: "ANDROID DEVICES", 
    active: false,
  },
  {
    id: "web",
    label: "WEB APP",
    active: false,
  },
];

export default function DeviceCompatibility() {
  const [activeDevice, setActiveDevice] = useState("java");

  return (
    <section className="w-full py-16 bg-white">
      {/* Header - Outside the card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
          {/* Left side - Title */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B1F28] leading-tight">
              Receive and send
              <br />
              money with any device
            </h2>
          </div>
          
          {/* Right side - Description */}
          <div className="lg:pt-4">
            <p className="text-lg text-gray-600">
              Experience seamless financial transactions across all platforms. From feature phones to smartphones and web browsers, our solution works everywhere.
            </p>
          </div>
        </div>

        {/* Main Card Container - Following Figma exactly */}
        <div className="bg-gradient-to-br from-[#F0F2F5] to-[#BFD6FA] h-[500px] rounded-3xl px-8 py-5 md:p-12 shadow-lg border border-blue-100 flex flex-col overflow-visible">
          {/* Device Tabs - Inside the card */}
          <div className="flex flex-wrap gap-3 mb-8">
            {devices.map((device) => (
              <button
                key={device.id}
                onClick={() => setActiveDevice(device.id)}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeDevice === device.id
                    ? "bg-[#5E19B3] text-white"
                    : "bg-white/70 text-gray-600 hover:bg-white hover:text-[#5E19B3]"
                }`}
              >
                {device.label}
              </button>
            ))}
          </div>

          {/* Content Grid - Inside the card */}
          <div className="grid lg:grid-cols-2 gap-12 items-center flex-1">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Send Money with a<br />Button Phone
              </h3>
              
              <p className="text-gray-700 leading-relaxed">
                No apps, no internet, no stress. Just dial a code and Safiri does the rest: Dial *347*771# to begin
              </p>
            </div>

            {/* Right Content - Nokia Phone */}
            <div className="flex items-center justify-end min-w-[260px] relative h-[300px] overflow-visible">
              {/* Nokia Phone - Main centerpiece with white background, extending beyond card */}
              <div className="absolute right-0 bottom-[-40px] z-10 bg-white px-4 rounded-xl shadow-lg">
                <Image
                  src={nokia}
                  alt="Nokia Phone"
                  width={300}
                  height={500}
                  className="object-contain"
                />
              </div>
                               
              {/* Dollar Sign - floating element on the left */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 animate-float-medium z-20">
                <Image
                  src={dollar}
                  alt="Dollar Sign"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
                                          
              {/* USSD Code - floating element top right behind Nokia */}
              <div className="absolute right-8 top-8 animate-float-fast z-5">
                <Image
                  src={ussd}
                  alt="USSD"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* CTA Button - At bottom of card */}
          <div className="mt-auto">
            <button className="bg-[#5E19B3] hover:bg-[#4A1590] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 group">
              <span>Tap to copy and share to contacts</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-28px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-38px); }
        }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 3s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 2.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}