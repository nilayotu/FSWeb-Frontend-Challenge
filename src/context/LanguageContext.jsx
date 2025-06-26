import React, { createContext, useState, useEffect, useContext } from "react";
import en from "../locales/en";
import tr from "../locales/tr";
import { toast } from "react-toastify";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "tr");
  const [t, setT] = useState(language === "en" ? en : tr);


  useEffect(() => {
    setT(language === "en" ? en : tr);
    localStorage.setItem("lang", language);
    toast(language === "tr" ? "Dil Türkçe olarak ayarlandı" : "Language set to English");
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "tr" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
export default LanguageProvider;