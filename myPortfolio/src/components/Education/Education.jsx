import React from "react";
import { motion } from "framer-motion";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 px-[8vw] md:px-[10vw] font-sans"
    >

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-4xl font-black text-white tracking-wide mb-2">
          EDUCATION
        </h2>
        <motion.div
          animate={{
            scaleX: [0, 1, 1, 0],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 origin-left"
        />
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          My education has been a journey of continuous learning and growth. Here's a snapshot of my academic background.
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Animated Vertical glowing line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 rounded-full shadow-[0_0_20px_rgba(130,69,236,0.6)] origin-top"
        />

        {/* Education Items */}
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex justify-center mb-28"
          >
            {/* Education Card */}
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              className={`w-full sm:w-[45%] p-6 sm:p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 relative group overflow-hidden ${
                index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
              }`}
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-100 p-[1px] -z-10 transition duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-950/80" />
              </div>

              {/* Top Row: Logo + Text */}
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-white to-gray-200 flex items-center justify-center shadow-lg flex-shrink-0 overflow-hidden"
                >
                  <img
                    src={edu.img}
                    alt={edu.school}
                    loading="lazy"
                    decoding="async"
                    className="w-14 h-14 object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    {edu.degree}
                  </h3>
                  <h4 className="text-md text-gray-300 font-semibold">{edu.school}</h4>
                </motion.div>
              </div>

              {/* Date */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-sm text-gray-400 mt-3 font-medium"
              >
                {edu.date}
              </motion.p>

              {/* Grade */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-3 text-gray-300 font-medium"
              >
                Grade: <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">{edu.grade}</span>
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="mt-3 text-gray-300 leading-relaxed"
              >
                {edu.desc}
              </motion.p>

              {/* Decorative element */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl -z-10"
                animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              viewport={{ once: true }}
              className="absolute left-1/2 transform -translate-x-1/2 z-20"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(168, 85, 247, 0.5)",
                    "0 0 40px rgba(168, 85, 247, 0.8)",
                    "0 0 20px rgba(168, 85, 247, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-gray-900 shadow-lg"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
