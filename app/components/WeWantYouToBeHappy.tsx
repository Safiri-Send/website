"use client";

import React from "react";
import Image from "next/image";

import women_smiling from "../assets/women_smiling.svg";
import lock_with_love from "../assets/home/lock_with_love.svg";
import verified_icon from "../assets/home/verified_icon.svg";
import protection_icon from "../assets/home/protection_icon.svg";
import people_icon from "../assets/home/people_icon.svg";

const WeWantYouToBeHappy = () => {
  return (
    <section className="bg-white py-32 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="lg:pr-12 w-[520px]">
          <h2 className="text-4xl sm:text-[64px] font-bold mb-6 leading-tight">
            We want you to be happy
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Safer is built to protect every transaction – from the moment you
            hit send to the moment it&#39;s received.
          </p>

          <div className="space-y-24">
            {/* Feature 1: No Room for Mistakes */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Image src={lock_with_love} alt="" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">No Room for Mistakes</h3>
                <p className="mt-1 text-gray-600 text-sm">
                  Funds are locked until your recipient confirms – nothing gets
                  lost in the middle.
                </p>
              </div>
            </div>

            {/* Feature 2: Verified Every Step */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Image src={verified_icon} alt="" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Verified Every Step</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Every transfer is tracked and recorded. You can always see
                  where your money is and when it lands.
                </p>
              </div>
            </div>

            {/* Feature 3: Built for Protection */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Image src={protection_icon} alt="" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Built for Protection</h3>
                <p className="mt-1 text-gray-600 text-sm">
                  Fraud checks, identity verification, and 24/7 monitoring keep
                  you and your loved ones secure.
                </p>
              </div>
            </div>

            {/* Feature 4: Trusted Partners Only */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Image src={people_icon} alt="" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Trusted Partners Only</h3>
                <p className="mt-1 text-gray-600 text-sm">
                  We work directly with regulated banks and licensed mobile
                  money providers, no third-party shortcuts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src={women_smiling}
            alt="Happy person"
            className="rounded-2xl shadow-xl object-cover w-full h-auto max-w-lg lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
};

export default WeWantYouToBeHappy;
