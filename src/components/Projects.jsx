import React from "react";
import { useLanguage } from "../context/LanguageContext";

function Projects() {
  const { t } = useLanguage();
  const projects = t.projects.list;

  return (
    <section className="px-6 md:px-12 lg:px-24 py-4 md:py-10 lg:py-12 pb-32 dark:bg-[#252128] dark:text-white">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-8 text-left">
        {t.projects.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        {projects.map((project) => (
          <div key={project.id}>
            <img src={project.image} alt={project.title} className="mb-4 w-full rounded-lg shadow" />

            <h2 className="text-left text-xl sm:text-2xl font-semibold text-[#4338CA] dark:text-[#CFCBFF] mb-2">
              {project.title}
            </h2>

            <p className="text-left text-sm sm:text-base text-[#6B7280] dark:text-white mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[#3730A3] dark:text-[#8F88FF] border border-[#3730A3] dark:border-[#8F88FF] px-3 py-1 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6">
    <a className="text-[#3730A3] dark:text-[#E1E1FF] border-b border-[#3730A3] dark:border-[#E1E1FF]">Github</a>
    <a className="text-[#3730A3] dark:text-[#E1E1FF] border-b border-[#3730A3] dark:border-[#E1E1FF]">{t.projects.actions?.[1] || "View Site"}</a>
  </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;