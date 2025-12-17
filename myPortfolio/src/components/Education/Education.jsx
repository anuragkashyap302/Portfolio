import React from "react";
import { motion } from "framer-motion";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 px-[8vw] md:px-[10vw] font-sans 
      bg-[linear-gradient(38.73deg,rgba(204,0,187,0.08)_0%,rgba(201,32,184,0)_50%),linear-gradient(141.27deg,rgba(0,70,209,0)_50%,rgba(0,70,209,0.08)_100%)] overflow-hidden"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-extrabold text-white tracking-wide">
          EDUCATION
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          My education has been a journey of continuous learning and growth.  
          Here’s a snapshot of my academic background.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical glowing line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 
        bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 h-full 
        rounded-full shadow-[0_0_15px_rgba(130,69,236,0.6)]"></div>

        {/* Education Items */}
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center mb-28"
          >
            {/* Education Card */}
            <div
              className={`w-full sm:w-[45%] p-6 sm:p-8 rounded-2xl 
              backdrop-blur-lg bg-white/5 border border-purple-500/30 
              shadow-[0_8px_25px_rgba(0,0,0,0.3)] 
              hover:shadow-[0_8px_35px_rgba(130,69,236,0.4)] 
              transition duration-300 ${
                index % 2 === 0 ? "sm:mr-auto text-left" : "sm:ml-auto text-left"
              }`}
            >
              {/* Top Row: Logo + Text */}
             <div className="flex items-center gap-4">
  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden">
    <img
      src={edu.img}
      alt={edu.school}
      className="w-12 h-12 object-cover"
    />
  </div>
  <div>
    <h3 className="text-xl font-semibold text-white">
      {edu.degree}
    </h3>
    <h4 className="text-md text-purple-300">{edu.school}</h4>
  </div>
</div>

              {/* Date */}
              <p className="text-sm text-gray-400 mt-2">{edu.date}</p>

              {/* Grade */}
              <p className="mt-3 text-gray-300 font-medium">
                Grade: <span className="text-white">{edu.grade}</span>
              </p>

              {/* Description */}
              <p className="mt-3 text-gray-400 leading-relaxed">{edu.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
