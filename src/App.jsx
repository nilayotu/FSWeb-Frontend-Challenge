import './App.css'
import React from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ThemeProvider from "./context/ThemeContext";
import LanguageProvider from "./context/LanguageContext";



function App() {

  return (
    <ThemeProvider>
    <LanguageProvider>
    <div className="min-h-screen flex flex-col justify-between dark:bg-gray-900 dark:text-white">
    <Header />
    <main className="p-6 space-y-10">
    <Introduction />
    <Skills />
    <Profile />
    <Projects />
    </main>
    <Footer />
    </div>
    </LanguageProvider>
    </ThemeProvider>
    
  )
}

export default App;
