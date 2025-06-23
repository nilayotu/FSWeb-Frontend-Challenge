import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Skills = () => {
  const { t } = useContext(LanguageContext);
  const { title, list } = t.skills;

  return (
    <section id="skills" className="border-b border-[#BAB2E7] px-6 py-12 dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl sm:text-6xl font-bold text-[#1F2937] dark:text-white mb-8 text-left">{title}</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {list.map((skill, index) => (
          <div key={index}>
            <h2 className="text-2xl text-[#4338CA] mb-2">{skill.name}</h2>
            <p className="text-[#6B7280] dark:text-gray-300">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;