import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Profile = () => {
  const { t } = useContext(LanguageContext);
  const { title, fields, aboutTitle, aboutParagraphs } = t.profile;

  return (
    <section className="px-6 md:px-12 lg:px-24 py-6 md:py-10 border-b border-[#BAB2E7] dark:text-white dark:bg-[#252128]">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-8 text-left">
  {title}
</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div>
  <h2 className="text-xl md:text-2xl font-semibold text-[#4338CA] dark:text-[#B7AAFF] mb-4 text-left">{title}</h2>
  {fields.map((item, index) => (
    <div key={index} className="mb-2 flex gap-x-4 sm:gap-x-6">
      <p className="font-semibold dark:text-white min-w-[100px] text-left">{item.label}</p>
      <p>{item.value}</p>
    </div>
  ))}
</div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-[#4338CA] dark:text-[#B7AAFF] mb-4 text-left">{aboutTitle}</h2>
          {aboutParagraphs.map((text, i) => (
            <p key={i} className="text-[#6B7280] text-left dark:text-[#FFFFFF] mb-4">{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;