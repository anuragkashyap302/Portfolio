import React, { useState } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { containerVariants, itemVariants } from "../../utils/motionVariants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="relative py-24 px-[5vw] md:px-[7vw] lg:px-[12vw] font-sans"
    >
      <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-gradient-to-tl from-purple-600 to-pink-900 rounded-full mix-blend-multiply blur-2xl opacity-20 pointer-events-none" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl font-black text-white mb-2">PROJECTS</h2>
        <motion.div
          animate={{
            scaleX: [0, 1, 1, 0],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 origin-left"
        />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-12 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] relative z-10"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: -15 }}
            onClick={() => handleOpenModal(project)}
            className="group bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden cursor-pointer transition duration-300 relative"
          >
            {/* Animated gradient border on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-100 p-[1px] -z-10 transition duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-950/80" />
            </div>

            {/* Image Container */}
            <div className="relative p-4 overflow-hidden h-48">
              <motion.img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-xl shadow-lg"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.4 }}
              />
              {/* Overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent rounded-xl flex items-end justify-start p-4"
              >
                <span className="text-white font-bold text-sm">View Details</span>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-6">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2"
              >
                {project.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 mb-4 line-clamp-3 text-sm leading-relaxed"
              >
                {project.description}
              </motion.p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-gradient-to-r from-purple-600/60 to-pink-600/60 text-xs font-semibold text-white rounded-full px-3 py-1 border border-purple-400/30 hover:border-purple-400 transition"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl shadow-2xl lg:w-full w-full max-w-4xl overflow-hidden relative border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 text-white text-4xl font-bold hover:text-pink-500 transition bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
              >
                &times;
              </motion.button>

              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="w-full lg:w-1/2 flex justify-center items-center p-6 bg-black/30"
                >
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-contain rounded-xl shadow-2xl"
                  />
                </motion.div>

                {/* Content Section */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center"
                >
                  <h3 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                    {selectedProject.title}
                  </h3>

                  <p className="text-gray-300 mb-6 lg:text-base text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-xs font-semibold text-white rounded-full px-3 py-1 border border-purple-400/50"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-xl text-center font-bold transition shadow-lg"
                    >
                      View Code
                    </motion.a>
                    <motion.a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-xl text-center font-bold transition shadow-lg"
                    >
                      View Live
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
