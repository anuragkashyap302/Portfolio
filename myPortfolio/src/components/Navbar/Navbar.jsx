import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";

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
    { id: "work", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6">
      <div
        className={`mx-auto max-w-5xl flex items-center justify-between gap-3 rounded-full border px-3 sm:px-5 py-2.5 backdrop-blur-xl transition-shadow duration-300 ${
          isScrolled
            ? "bg-ink/80 border-copper/25 shadow-[0_12px_40px_rgba(232,168,124,0.16)]"
            : "bg-panel/70 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
        }`}
      >
        <button
          type="button"
          onClick={() => handleMenuItemClick("about")}
          className="shrink-0 rounded-full px-3 py-1 text-sm sm:text-base font-semibold tracking-wide text-foam"
        >
          <span className="text-copper">&lt;</span>
          Anurag
          <span className="text-copper"> / </span>
          Kumar
          <span className="text-copper">&gt;</span>
        </button>

        <ul className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleMenuItemClick(item.id)}
                className={`rounded-full px-3.5 py-1.5 transition-colors duration-200 ${
                  activeSection === item.id
                    ? "bg-copper text-ink shadow-[0_6px_18px_rgba(232,168,124,0.35)]"
                    : "text-mist hover:text-foam hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-ink/40 px-2 py-1">
          <a
            href="https://github.com/anuragkashyap302"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-mist hover:text-copper hover:bg-white/5 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/anurag-kumar-5b1132338/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-mist hover:text-copper hover:bg-white/5 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="https://leetcode.com/u/anuragkashyap302/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-mist hover:text-copper hover:bg-white/5 transition-colors"
            aria-label="LeetCode"
          >
            <FaCode size={16} />
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden rounded-full p-2 text-foam hover:bg-white/5"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden mx-auto mt-3 max-w-5xl rounded-2xl border border-white/10 bg-panel/95 backdrop-blur-xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
          <ul className="flex flex-col p-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-full text-left rounded-xl px-4 py-3 transition-colors ${
                    activeSection === item.id
                      ? "bg-copper/15 text-copper"
                      : "text-foam hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
