import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { floatingAnimation } from "../../utils/motionVariants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrolledRef = useRef(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const currentSection = visibleEntries[0]?.target?.id;

        if (currentSection) {
          setActiveSection(currentSection);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.15, 0.3, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const nextValue = window.scrollY > 50;

      if (nextValue !== isScrolledRef.current) {
        isScrolledRef.current = nextValue;
        setIsScrolled(nextValue);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

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
      className={`fixed top-0 w-full z-50 transition-all duration-700 px-[7vw] md:px-[7vw] lg:px-[20vw]`}
    >
      {/* Premium Gradient Background with Glassmorphism */}
      <div
        className={`absolute inset-0 -z-10 transition-all duration-700 ${
          isScrolled
            ? "backdrop-blur-2xl bg-gradient-to-r from-purple-600/50 via-pink-600/40 to-cyan-600/50 border-b border-white/10 shadow-2xl shadow-purple-500/20"
            : "backdrop-blur-lg bg-gradient-to-r from-purple-600/30 via-pink-600/25 to-cyan-600/30 border-b border-white/5"
        }`}
      />

      {/* Animated gradient line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50"
        animate={{
          opacity: isScrolled ? [0.5, 1, 0.5] : [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="text-white py-5 flex justify-between items-center relative">
        {/* Logo with Animation */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={floatingAnimation.animate}
          className="text-xl font-extrabold tracking-wide cursor-pointer select-none drop-shadow-lg"
        >
          <span className="text-white">&lt;</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-pink-500 font-black text-2xl">
            Anurag
          </span>
          <span className="text-white">/</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 font-black text-2xl">
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
                className={`transition duration-300 relative text-sm font-semibold pb-2 ${
                  activeSection === item.id
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-pink-500 drop-shadow-[0_0_12px_rgba(236,72,153,0.9)]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
              {/* animated underline */}
              {activeSection === item.id && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 bottom-0 h-[3px] w-full rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-pink-500 shadow-[0_0_15px_rgba(236,72,153,1)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 to-pink-500/0 -z-10 opacity-0 group-hover:opacity-100 pointer-events-none"
                transition={{ duration: 0.3 }}
              />
            </motion.li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-6">
          {[
            { href: "https://github.com/anuragkashyap302", icon: <FaGithub size={24} /> },
            { href: "https://www.linkedin.com/in/anurag-kumar-5b1132338/", icon: <FaLinkedin size={24} /> },
            { href: "https://leetcode.com/u/anuragkashyap302/", icon: <FaCode size={24} /> },
          ].map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.4, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="text-white transition drop-shadow-md hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.9)] relative group"
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 blur-md -z-10 transition duration-300 pointer-events-none" />
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <motion.div
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <FiX
                className="text-3xl text-white cursor-pointer drop-shadow-lg"
                onClick={() => setIsOpen(false)}
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <FiMenu
                className="text-3xl text-white cursor-pointer drop-shadow-lg"
                onClick={() => setIsOpen(true)}
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-gradient-to-b from-purple-600/60 via-pink-600/50 to-cyan-600/60 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
        >
          <ul className="flex flex-col">
            {menuItems.map((item, idx) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="border-b border-white/10 last:border-b-0"
              >
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className="w-full text-left px-6 py-4 text-white font-medium hover:bg-white/10 transition"
                >
                  {item.label}
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
