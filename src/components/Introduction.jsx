import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Introduction = () => {
  const { t } = useContext(LanguageContext);
  const { name, title, description, buttons } = t.introduction;

  return (
    <section className="border-b border-[#BAB2E7] px-6 py-12 dark:bg-gray-800 dark:text-white">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-12">
  <img src="./src/assets/icons/a-logo.png" alt="Logo" className="h-10" />
  
  <nav className="flex items-center gap-24">
    <a href="#skills" className="text-[#6B7280] hover:text-[#3730A3]">
      {t.header.skills}
    </a>
    <a href="#projects" className="text-[#6B7280] hover:text-[#3730A3]">
      {t.header.projects}
    </a>
    <button className="text-[#3730A3] border border-[#3730A3] px-4 py-2 rounded hover:bg-[#f0f0ff]">
      {t.header.hireMe}
    </button>
  </nav>
</div>

      {/* Ana içerik (yazı + görsel) */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Sol - Yazılar ve Butonlar */}
        <div className="flex-1">
          <h3 className="text-[#4338CA] text-lg mb-2 text-left font-bold">{name}</h3>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1F2937] dark:text-white mb-6 whitespace-pre-line text-left">
  {title}
</h1>
<p className="text-[#6B7280] max-w-xl mb-8 text-left">
  {description}
</p>
          <div className="flex gap-4 flex-wrap">
            <button className="text-white bg-[#3730A3] px-4 py-2 rounded hover:bg-[#2b279c]">
              {buttons[0]}
            </button>
            <button className="bg-white text-[#3730A3] border border-[#3730A3] px-4 py-2 rounded flex items-center gap-2">
              <img src="./src/assets/icons/github.png" alt="GitHub" className="h-5" />
              {buttons[1]}
            </button>
            <button className="bg-white text-[#3730A3] border border-[#3730A3] px-4 py-2 rounded flex items-center gap-2">
              <img src="./src/assets/icons/Linkedin.png" alt="LinkedIn" className="h-5" />
              {buttons[2]}
            </button>
          </div>
        </div>

        {/* Sağ - Görsel */}
        <div className="flex-1">
          <img
            src="./src/assets/creative-thinker.png"
            alt="Creative Thinker"
            className="w-full max-w-md rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;