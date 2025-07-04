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
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <LanguageProvider>
    <ThemeProvider>
    <Header />
    <main className="space-y-10">
    <Introduction />
    <Skills />
    <Profile />
    <Projects />
    </main>
    <Footer />
    <ToastContainer position="top-right" autoClose={1000} />
    </ThemeProvider>
    </LanguageProvider>
    
  )
}

export default App;
