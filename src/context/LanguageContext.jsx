import React, { createContext, useState, useEffect, useContext } from "react";
import en from "../locales/en";
import tr from "../locales/tr";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "tr");
  const [t, setT] = useState(language === "en" ? en : tr);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "tr" : "en"));
  };

  useEffect(() => {
    setT(language === "en" ? en : tr);
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
export default LanguageProvider;