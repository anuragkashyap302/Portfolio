import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="bg-[#0a0e27] overflow-x-hidden relative">
      {/* Lightweight background atmosphere */}
      <div className="fixed top-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-600/60 to-transparent rounded-full mix-blend-multiply blur-2xl opacity-30 -z-10 pointer-events-none animate-float will-change-transform" />
      <div className="fixed bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-600/50 to-transparent rounded-full mix-blend-multiply blur-2xl opacity-25 -z-10 pointer-events-none animate-float will-change-transform" style={{ animationDelay: "1.5s" }} />

      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:42px_42px] -z-10 pointer-events-none opacity-20" />
      
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
