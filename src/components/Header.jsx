import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { t, toggleLanguage } = useContext(LanguageContext);
  const { toggleTheme, darkMode } = useContext(ThemeContext);

  return (
    <header className="flex justify-end items-center px-6 md:px-12 lg:px-24 py-4 dark:bg-[#252128] dark:text-white">
      <div className="flex items-center space-x-4 text-sm md:text-base">
        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-2">
  <label className="relative inline-flex items-center cursor-pointer dark:text-[#B7AAFF]">
    <input
      type="checkbox"
      className="sr-only peer "
      checked={darkMode}
      onChange={toggleTheme}
      data-testid="darkMode-toggle"
    />
    <div className="w-11 h-6 rounded-full peer peer-checked:bg-[#3A3A3A] bg-[#4731D3] transition-colors"></div>
    <div className="absolute dark:bg-[#FFE86E] left-0.5 top-0.5 w-5 h-5 bg-[#FFE86E] rounded-full transition-transform peer-checked:translate-x-full"></div>
  </label>
  <span className="text-sm text-[#3730A3] font-bold">
    {t.header.darkMode}
  </span>
</div>

        {/* Dikey çizgi */}
        <div className="h-5 border-l border-gray-400" />

        {/* Language Toggle */}
        <a
          onClick={toggleLanguage}
          className="text-[#3730A3] px-2 py-1 dark:text-[#B7AAFF]"
        >
          {t.header.switchLang}
        </a>
      </div>
    </header>
  );
};

export default Header;