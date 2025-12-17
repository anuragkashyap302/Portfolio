import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section tracking
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((sec) => {
        const secTop = sec.offsetTop - 120;
        if (window.scrollY >= secTop) {
          current = sec.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-700 px-[7vw] md:px-[7vw] lg:px-[20vw]
        ${isScrolled ? "shadow-xl shadow-purple-500/30 border-b border-white/20" : ""}
      `}
    >
      {/* Animated Gradient Background */}
      <div
        className={`absolute inset-0 -z-10 transition-all duration-700
        ${isScrolled
            ? "backdrop-blur-md bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-cyan-500/40"
            : "bg-gradient-to-r from-purple-600/40 via-pink-600/40 to-cyan-600/40"
        }`}
      />

      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-xl font-extrabold tracking-wide cursor-pointer select-none drop-shadow-lg"
        >
          <span className="text-white">&lt;</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Anurag
          </span>
          <span className="text-white">/</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Kumar
          </span>
          <span className="text-white">&gt;</span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-white font-medium">
          {menuItems.map((item, idx) => (
            <motion.li
              key={item.id}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="relative group cursor-pointer"
            >
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`transition duration-300 relative 
                  ${activeSection === item.id
                    ? "text-white font-semibold drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]"
                    : "opacity-80 hover:opacity-100"
                  }`}
              >
                {item.label}
              </button>
              {/* underline */}
              {activeSection === item.id && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 bottom-[-6px] h-[2px] w-full rounded-full bg-gradient-to-r from-purple-400 to-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.7)]"
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-6">
          {[
            { href: "https://github.com/anuragkashyap302", icon: <FaGithub size={24} /> },
            { href: "https://www.linkedin.com/in/anurag-kumar-5b1132338/", icon: <FaLinkedin size={24} /> },
          ].map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 8 }}
              whileTap={{ scale: 0.95 }}
              className="text-white transition drop-shadow-md hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.9)]"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-white cursor-pointer drop-shadow-lg"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-white cursor-pointer drop-shadow-lg"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
