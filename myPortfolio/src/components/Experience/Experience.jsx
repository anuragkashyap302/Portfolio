import React from "react";
import { experiences } from "../../constants";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../utils/motionVariants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 px-[5vw] md:px-[7vw] lg:px-[10vw] font-sans"
    >

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-4xl font-black text-white mb-2">EXPERIENCE</h2>
        <motion.div
          animate={{
            scaleX: [0, 1, 1, 0],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 origin-left"
        />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my education, projects, and personal experience
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Animated Vertical line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 origin-top"
        />

        {experiences.map((experience, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative mb-20 flex justify-between items-center w-full"
            >
              {/* Card container */}
              <div className={`w-full md:w-5/12 ${isLeft ? "order-1" : "order-2"}`}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Animated gradient border on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-100 p-[1px] -z-10 transition duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-950/80" />
                  </div>

                  {/* Header */}
                  <div className="flex items-center space-x-4">
                    {experience.img && (
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-16 h-16 bg-gradient-to-br from-white to-gray-200 rounded-md overflow-hidden flex-shrink-0 shadow-lg"
                      >
                        <img
                          src={experience.img}
                          alt={experience.company}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    )}
                    <div>
                      <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
                      >
                        {experience.role}
                      </motion.h3>
                      <h4 className="text-sm text-gray-300 font-semibold">{experience.company}</h4>
                      <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
                      {experience.location && (
                        <p className="text-sm text-gray-400">{experience.location}</p>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 text-gray-300 leading-relaxed"
                  >
                    {experience.desc}
                  </motion.p>

                  {/* Skills */}
                  {experience.skills && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="mt-4"
                    >
                      <h5 className="font-semibold text-white mb-2">Skills:</h5>
                      <ul className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 text-xs sm:text-sm rounded-lg border border-purple-400/50 shadow-md hover:shadow-purple-500/50 transition"
                          >
                            {skill}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Animated Circle */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                viewport={{ once: true }}
                className="z-10 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(130, 69, 236, 0.5)",
                      "0 0 40px rgba(130, 69, 236, 0.8)",
                      "0 0 20px rgba(130, 69, 236, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-purple-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-lg overflow-hidden"
                >
                  {experience.img ? (
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-white font-bold flex items-center justify-center h-full text-lg">
                      {index + 1}
                    </span>
                  )}
                </motion.div>
              </motion.div>

              {/* Empty space for opposite side */}
              <div className={`w-full md:w-5/12 ${isLeft ? "order-2" : "order-1"}`} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
