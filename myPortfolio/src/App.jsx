import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';

const App = () => {
  return (
    <div className="bg-[#0a0e27] overflow-x-hidden relative">
      {/* Animated background blobs */}
      <motion.div
        animate={{
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-600 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10 pointer-events-none"
      />

      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="fixed bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-600 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10 pointer-events-none"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="fixed top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-600 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-35 -z-10 pointer-events-none"
      />

      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f0f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0f_1px,transparent_1px)] bg-[size:30px_30px] -z-9 pointer-events-none opacity-30" />
      
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
