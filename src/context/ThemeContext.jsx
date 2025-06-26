import React, { createContext, useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    const lang = localStorage.getItem("lang") || "tr";
    toast(
      newMode
        ? lang === "tr"
          ? "Karanlık mod aktif"
          : "Dark mode enabled"
        : lang === "tr"
          ? "Aydınlık mod aktif"
          : "Light mode enabled"
    );
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeProvider;