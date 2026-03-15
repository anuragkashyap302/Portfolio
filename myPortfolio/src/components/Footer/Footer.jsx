import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../utils/motionVariants";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "work" },
    { name: "Education", id: "education" },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/anuragkashyap/" },
    { icon: <FaTwitter />, link: "https://twitter.com/anuragkashyap302?s=09" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/anurag-kumar-5b1132338/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/anuragkashyap302/" },
    { icon: <FaYoutube />, link: "https://www.youtube.com/@kumarAnuragg" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative text-white py-12 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans overflow-hidden"
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Divider line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8 origin-left"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto text-center"
      >
        {/* Logo / Name */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
        >
          Anurag Kumar
        </motion.h2>

        {/* Navigation Links */}
        <motion.nav
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6"
        >
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll(item.id)}
              className="relative text-sm sm:text-base py-2 px-3 text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              {item.name}
              <motion.span
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full"
                layoutId="footerUnderline"
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </motion.nav>

        {/* Social Media Icons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {socialLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.3, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              {/* Glow background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-30 blur-lg -z-10"
                animate={{
                  scale: [1, 1.5, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright Text */}
        <motion.p
          variants={itemVariants}
          className="text-sm text-gray-500 mt-8"
        >
          © 2025 Anurag Kumar. All rights reserved.
        </motion.p>

        {/* Decorative bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent mt-6 origin-left"
        />

        {/* Back to top button */}
        <motion.button
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-sm"
        >
          ↑ Back to Top
        </motion.button>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
