"use client"
import React, { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';

interface LanguagePickerProps {
  variant?: 'navbar' | 'footer';
}

const LanguagePicker: React.FC<LanguagePickerProps> = ({ variant = 'footer' }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = ['EN', 'FR', 'ES', 'DE'];

  const handleLanguageSelect = (lang: string) => {
    setSelectedLanguage(lang);
    setIsLanguageOpen(false);
  };

  // Styles for different variants
  const buttonStyles = variant === 'navbar' 
    ? "flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-2 hover:bg-white/20 transition-colors text-white"
    : "flex items-center space-x-2 bg-gray-300 hover:bg-gray-200 rounded-full px-3 py-2 sm:px-4 text-sm text-gray-500 transition-colors duration-200";

  const dropdownStyles = variant === 'navbar'
    ? "absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border overflow-hidden min-w-[120px] z-50"
    : "absolute bottom-full left-1/2 transform -translate-x-1/2 sm:left-0 sm:transform-none mb-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-full";

  const optionStyles = variant === 'navbar'
    ? "flex items-center space-x-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
    : "flex items-center space-x-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg";

  return (
    <div className="relative">
      <button
        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
        className={buttonStyles}
      >
        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
         <Globe />
        </div>
        <span className="font-medium">{selectedLanguage}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isLanguageOpen && (
        <div className={dropdownStyles}>
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageSelect(lang)}
              className={optionStyles}
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-xs">🌐</span>
              </div>
              <span>{lang}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguagePicker;