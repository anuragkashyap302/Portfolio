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
    <div className="bg-ink overflow-x-hidden relative min-h-screen">
      <div className="blob blob-one" />
      <div className="blob blob-two" />
      <div className="blob blob-three" />

      <div className="relative z-10 pt-24">
        <Navbar />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
