import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Introduction = () => {
  const { t } = useContext(LanguageContext);
  const { name, title, description, buttons } = t.introduction;

  return (
    <section className="px-6 md:px-12 lg:px-24 py-10 md:py-16 lg:py-12 dark:bg-[#252128] dark:text-white">

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
  <img src="/assets/icons/a-logo.png" alt="Logo" className="h-10"/>

  <nav className="flex flex-wrap items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
    <a href="#skills" className="text-[#6B7280] hover:text-[#3730A3]">
      {t.header.skills}
    </a>
    <a href="#projects" className="text-[#6B7280] hover:text-[#3730A3]">
      {t.header.projects}
    </a>
    <button className="text-[#3730A3] border border-[#3730A3] px-4 py-2 dark:bg-[#FFFFFF] rounded hover:bg-[#f0f0ff]">
      {t.header.hireMe}
    </button>
  </nav>
</div>


      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        <div className="flex-1 text-center md:text-left">
          <h3 className="text-[#4338CA] text-base md:text-lg mb-2 dark:text-[#B7AAFF] font-bold">{name}</h3>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-6 whitespace-pre-line">
  {title}
</h1>
<p className="text-[#6B7280] dark:text-[#FFFFFF] max-w-xl mb-8 mx-auto md:mx-0">
  {description}
</p>
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <button className="text-white bg-[#3730A3] dark:bg-[#E1E1FF] dark:text-[#000000] px-4 py-2 rounded hover:bg-[#2b279c]">
              {buttons[0]}
            </button>
            <button className="bg-white text-[#3730A3] dark:text-[#E1E1FF] dark:bg-[#383838] dark:border-[#E1E1FF] border border-[#3730A3] px-4 py-2 rounded flex items-center gap-2">
              <img src="/assets/icons/github.png" alt="GitHub" className="h-5" />
              {buttons[1]}
            </button>
            <button className="bg-white text-[#3730A3] dark:text-[#E1E1FF] dark:bg-[#383838] border border-[#3730A3] dark:border-[#E1E1FF] px-4 py-2 rounded flex items-center gap-2">
              <img src="/assets/icons/linkedin.png" alt="LinkedIn" className="h-5" />
              {buttons[2]}
            </button>
          </div>
        </div>


        <div className="flex-1">
          <img
            src="/assets/creative-thinker.png"
            alt="Creative Thinker"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-md mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;