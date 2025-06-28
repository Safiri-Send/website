'use client'
import React, { useState } from 'react'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ]

  const [currentLanguage, setCurrentLanguage] = useState(languages[0])

  const handleLanguageChange = (lang: typeof languages[0]) => {
    setCurrentLanguage(lang)
    setIsLangOpen(false)
    // TODO: Add actual language switching logic later
    console.log('Language changed to:', lang.code)
  }

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl md:text-3xl font-bold text-white">
              Safiri
            </div>
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
            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 hover:bg-white/20 transition-colors"
              >
                <span className="mr-2">{currentLanguage.flag}</span>
                <span className="text-white text-sm font-medium mr-1">{currentLanguage.code.toUpperCase()}</span>
                <ChevronDown className="w-4 h-4 text-white" />
              </button>
              
              {isLangOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border overflow-hidden min-w-[150px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang)}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center transition-colors ${
                        currentLanguage.code === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
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
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              
              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-white/20">
                <div className="mb-4">
                  <p className="text-white/70 text-sm mb-2">Language</p>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang)}
                      className={`w-full text-left px-3 py-2 rounded mb-1 flex items-center transition-colors ${
                        currentLanguage.code === lang.code ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10'
                      }`}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      <span className="text-sm">{lang.name}</span>
                    </button>
                  ))}
                </div>
                
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
  )
}

export default Navbar