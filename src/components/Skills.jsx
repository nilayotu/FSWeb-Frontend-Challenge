import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Skills = () => {
  const { t } = useContext(LanguageContext);
  const { title, list } = t.skills;

  return (
    <section
  id="skills"
  className="px-6 md:px-12 lg:px-24 py-6 md:py-10 border-b border-[#BAB2E7] dark:bg-[#252128] dark:text-white"
>

  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-8 text-left">
    {title}
  </h1>


  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
    {list.map((skill, index) => (
      <div key={index}>
        <h2 className="text-xl md:text-2xl text-[#4338CA] font-semibold text-left dark:text-[#B7AAFF] mb-2">
          {skill.name}
        </h2>
        <p className="text-[#6B7280] text-sm md:text-base my-6 md:my-8 text-left dark:text-white">
          {skill.description}
        </p>
      </div>
    ))}
  </div>
</section>
  );
};

export default Skills;