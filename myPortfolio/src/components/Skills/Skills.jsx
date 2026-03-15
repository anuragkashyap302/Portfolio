// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../utils/motionVariants";

const Skills = () => (
  <section
    id="skills"
    className="relative py-20 pb-20 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
  >

    {/* Section Title */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-8 relative"
    >
      <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">SKILLS</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2" />
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </motion.div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category, categoryIdx) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: categoryIdx * 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-gradient-to-br from-gray-900/60 to-gray-950/60 backdrop-blur-md px-6 sm:px-10 py-6 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white/10 hover:border-purple-400/30 shadow-lg hover:shadow-purple-500/20 transition duration-300 relative overflow-hidden group"
        >
          {/* Category Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              {category.title}
            </span>
          </h3>

          {/* Skill Items - Grid */}
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.01}
            transitionSpeed={400}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.08 }}
                  className="flex items-center justify-center space-x-2 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-3xl py-3 px-2 sm:py-3 sm:px-3 text-center hover:border-purple-400 hover:bg-white/10 transition-all duration-200 relative group overflow-hidden"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                  <span className="text-xs sm:text-sm text-gray-200 font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </Tilt>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
