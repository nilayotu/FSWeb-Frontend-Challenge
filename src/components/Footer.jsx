import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <footer className={`p-6 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-#F9F9F9 text-black"}`}>
      <h2 className="text-2xl font-bold mb-4">{t.footer.title}</h2>
      <div className="flex flex-col gap-2 text-sm">
        <a className="text-red-600 underline flex items-center gap-1" href="mailto:almilasucode@gmail.com">
          <img src="/src/assets/icons/pointer.png" alt="Pointer" className="w-4 h-4" />
          almilasucode@gmail.com
        </a>
        <a href="#" className="text-gray-600 hover:underline">{t.footer.links[0]}</a>
        <a href="#" className="text-green-600 hover:underline">{t.footer.links[1]}</a>
        <a href="#" className="text-blue-600 hover:underline">{t.footer.links[2]}</a>
      </div>
    </footer>
  );
};

export default Footer;