import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Profile = () => {
  const { t } = useContext(LanguageContext);
  const { title, fields, aboutTitle, aboutParagraphs } = t.profile;

  return (
    <section className="border-b border-[#BAB2E7] px-6 py-12 dark:bg-gray-800 dark:text-white">
      <h1 className="text-4xl sm:text-6xl font-bold text-[#1F2937] dark:text-white mb-8 text-left">
  {title}
</h1>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Sol taraf: Kişisel bilgiler */}
        <div>
  <h2 className="text-2xl text-[#4338CA] mb-4">{title}</h2>
  {fields.map((item, index) => (
    <div key={index} className="mb-2 flex gap-x-8">
      <p className="font-bold min-w-[100px]">{item.label}</p>
      <p>{item.value}</p>
    </div>
  ))}
</div>

        {/* Sağ taraf: Hakkımda */}
        <div>
          <h2 className="text-2xl text-[#4338CA] mb-4">{aboutTitle}</h2>
          {aboutParagraphs.map((text, i) => (
            <p key={i} className="text-[#6B7280] dark:text-gray-300 mb-4">{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;