import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <footer className="bg-[#F9F9F9] dark:bg-[#141414] text-[#1F2937] dark:text-[#AEBCCF] px-6 py-12 md:px-12 lg:px-24 lg:py-24">
  <div className="max-w-6xl mx-auto flex flex-col gap-6">
    
    {/* Üstte sol içerik */}
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-left font-bold whitespace-pre-line">{t.footer.title}</h2>
      <a className="text-[#AF0C48] dark:text-[#BAB2E7] text-base md:text-lg hover:cursor-pointer underline flex items-center gap-2 font-semibold">
        <img src="/src/assets/icons/pointer.png" alt="Pointer" className="w-4 h-4" />
        {t.footer.email}
      </a>
    </div>

    {/* Altta sağa hizalanmış linkler */}
    <div className="flex justify-center md:justify-end">
      <div className="flex items-center gap-4 text-sm md:text-base">
        <a className="text-[#0A0A14] dark:text-[#E1E1FF] hover:underline font-medium">{t.footer.links[0]}</a>
        <a className="text-[#00AB6B] dark:text-[#17D18B] hover:underline font-medium">{t.footer.links[1]}</a>
        <a className="text-[#0077B5] dark:text-[#0BA6F6] hover:underline font-medium">{t.footer.links[2]}</a>
      </div>
    </div>

  </div>
</footer>
  );
};

export default Footer;