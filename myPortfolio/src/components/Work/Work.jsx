import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="relative py-20 px-[5vw] md:px-[7vw] lg:px-[12vw]"
    >
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-foam">Projects</h2>
        <div className="w-16 h-[2px] bg-copper mx-auto mt-3" />
        <p className="text-mist mt-4 text-base max-w-2xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
        </p>
      </div>

      <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {projects.map((project) => (
          <button
            type="button"
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="surface text-left rounded-xl overflow-hidden"
          >
            <div className="p-4 h-48">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="p-6 pt-2">
              <h3 className="text-xl font-semibold text-foam mb-2">{project.title}</h3>
              <p className="text-mist mb-4 line-clamp-3 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-ink text-copper text-xs font-medium rounded px-2.5 py-1 border border-line"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-panel rounded-xl shadow-[0_24px_80px_rgba(232,168,124,0.18)] w-full max-w-4xl overflow-hidden relative border border-line"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 z-10 text-foam hover:text-copper bg-ink rounded-full w-10 h-10 flex items-center justify-center text-2xl"
              aria-label="Close"
            >
              &times;
            </button>

            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 flex justify-center items-center p-6 bg-ink">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full object-contain rounded-lg"
                />
              </div>
              <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foam mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-mist mb-6 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-ink text-copper text-xs font-medium rounded px-2.5 py-1 border border-line"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-ink border border-line hover:border-copper text-foam px-4 py-3 rounded-md text-center font-medium transition-colors"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-copper text-ink px-4 py-3 rounded-md text-center font-semibold hover:bg-copper-dark transition-colors shadow-[0_8px_24px_rgba(232,168,124,0.3)]"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
