import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "work" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/anuragkashyap/", label: "Facebook" },
    { icon: <FaTwitter />, link: "https://twitter.com/anuragkashyap302?s=09", label: "Twitter" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/anurag-kumar-5b1132338/", label: "LinkedIn" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/anuragkashyap302/", label: "Instagram" },
    { icon: <FaYoutube />, link: "https://www.youtube.com/@kumarAnuragg", label: "YouTube" },
  ];

  return (
    <footer className="relative text-foam py-12 px-5 sm:px-[7vw] lg:px-[20vw] border-t border-line">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-foam">
          Anurag <span className="text-copper">Kumar</span>
        </h2>

        <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-sm py-2 px-3 text-mist hover:text-copper transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center gap-5 mt-8">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="text-xl text-mist hover:text-copper transition-colors"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-mist mt-8">
          © 2026 Anurag Kumar. All rights reserved.
        </p>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="btn-3d mt-6 px-5 py-2 font-medium rounded-full text-sm"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
