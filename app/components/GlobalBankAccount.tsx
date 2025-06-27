"use client";

import { ArrowRight } from "lucide-react";

export default function GlobalBankAccount() {
  return (
    <section className="w-full flex justify-center py-8 bg-[#FAFAFC] ">
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-[#F0F2F5] to-[#BFD6FA] justify-between max-w-5xl w-full rounded-3xl shadow-lg bg-white/80 p-8 md:p-12 gap-8">
        {/* Left: Text Content */}
        <div className="flex-1 min-w-[260px] max-w-md">
          <div className="uppercase text-xs tracking-widest text-[#5E19B3] font-semibold mb-2">
            Foreign Bank Accounts
          </div>
          <h2 className="font-inter font-bold text-4xl md:text-5xl text-[#1B1F28] mb-4 leading-tight">
            Get a global
            <br />
            bank account
          </h2>
          <p className="text-lg text-[#555] mb-6">
            Get a bank account in just minutes. Receive and access your global
            payments whenever you want to.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-[#2467E3] font-semibold text-base hover:underline transition"
          >
            See how it works
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
        {/* Right: Map and Animated Vectors */}
        <div className="flex-1 flex items-center justify-end min-w-[260px] relative h-[320px]">
          {/* Map Image */}
          <img
            src="/map.png"
            alt="Map Globe"
            className="absolute right-0 top-0 w-[260px] h-[260px] md:w-[320px] md:h-[320px] object-contain rounded-2xl z-10"
          />
            {/* Vector 3 */}
            <img
            src="/Vector3.png"
            alt="Vector 3"
            className="absolute left-8 bottom-6 w-12 h-12 animate-float-medium z-20"
          />
          
          {/* Vector 4 (below Vector 1) */}
          <img
            src="/Vector4.png"
            alt="Vector 4"
            className="absolute left-2 top-28 w-12 h-12 animate-float-slow z-20"
          />
          {/* Vector 2 */}
          <img
            src="/Vector2.png"
            alt="Vector 2"
            className="absolute right-4 top-4 w-14 h-14 animate-float-fast z-20"
          />
          {/* Vector 1 */}
          <img
            src="/Vector1.png"
            alt="Vector 1"
            className="absolute left-2 top-8 w-12 h-12 animate-float-slow z-20"
          />
        
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
