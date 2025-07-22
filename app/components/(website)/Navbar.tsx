"use client";
import React, { useState } from "react";
import Logo from "@/public/Logo.svg";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import LanguagePicker from "./LanguagePicker";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left section - Logo and Language Picker */}
          <div className="flex items-center space-x-4">
            <Image
              src={Logo}
              alt="Safiri Logo"
              className="h-8 w-auto"
              priority
            />
            <LanguagePicker variant="navbar" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#products"
              className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
            >
              Products
            </a>
            <a
              href="#learn"
              className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
            >
              Learn
            </a>
            <a
              href="#company"
              className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
            >
              The Company
            </a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white/90 hover:text-white transition-colors duration-200 font-medium px-4 py-2">
              Log in
            </button>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium px-6 py-2 rounded-lg transition-all duration-200 border border-white/20">
              Sign up for free
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-white/80 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-md rounded-lg mt-2 border border-white/20">
            <div className="px-4 py-6 space-y-4">
              <a
                href="#products"
                className="block text-white hover:text-white/80 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="#learn"
                className="block text-white hover:text-white/80 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Learn
              </a>
              <a
                href="#company"
                className="block text-white hover:text-white/80 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                The Company
              </a>

              <div className="pt-4 border-t border-white/20">
                <button className="block w-full text-left text-white hover:text-white/80 transition-colors duration-200 font-medium mb-3">
                  Log in
                </button>
                <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 border border-white/20">
                  Sign up for free
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
