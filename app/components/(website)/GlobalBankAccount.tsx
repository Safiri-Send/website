"use client";

import { ArrowRight } from "lucide-react";
import nokia from "@/public/nokia.svg";
import ussd from "@/public/USSD.png";
import dollar from "@/public/Dallar.png";
import Image from "next/image";

export default function GlobalBankAccount() {
  return (
    <section className="w-full flex justify-center py-8 bg-[#FAFAFC]">
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-[#F0F2F5] to-[#BFD6FA] justify-between max-w-5xl w-full rounded-xl shadow-lg bg-white/80 p-8 md:px-12 gap-8">
        {/* Left: Text Content */}
        <div className="flex-1 min-w-[260px] max-w-md">
          <div className="uppercase text-xs tracking-widest text-[#5E19B3] font-semibold mb-2">
            JAVA PHONE
          </div>
          <h2 className="font-inter font-bold text-4xl md:text-5xl text-[#1B1F28] mb-4 leading-tight">
            Send Money with 
            <br />
            a Button Phone
          </h2>
          <p className="text-lg text-[#555] mb-6">
            No apps, no internet, no stress. Just dial a code and Safiri does the rest. Dial *347*771# to begin
          </p>
                   
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#2467E3] text-base hover:underline transition"
          >
            Tap to copy and share to contact
            <div className="rounded-full border border-[#2467E3] p-1.5">
              <ArrowRight size={16} />
            </div>
          </a>
        </div>

        {/* Right: Nokia Phone and Animated Elements */}
        <div className="flex-1 flex items-center justify-end min-w-[260px] relative h-[260px]">
          {/* Nokia Phone - Main centerpiece (larger) */}
          <div className="absolute right-0 top-[150px] transform -translate-y-1/2 z-10">
            <Image
              src={nokia}
              alt="Nokia Phone"
              width={680}
              height={900}
              className="object-contain"
            />
          </div>
            
          {/* Dollar Sign - floating element on the left */}
          <div className="absolute left-16 top-44 transform -translate-y-1/2 animate-float-medium z-20">
            <Image
              src={dollar}
              alt="Dollar Sign"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
                   
          {/* USSD Code - floating element top right behind Nokia */}
          <div className="absolute right-8 top-16 animate-float-fast z-5">
            <Image
              src={ussd}
              alt="USSD"
              width={120}
              height={120}
              className="object-contain"
            />
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