import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="relative py-16 sm:py-20 px-5 sm:px-[7vw] lg:px-[10vw]"
    >
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="title-3d text-3xl sm:text-4xl font-bold">Projects</h2>
        <div className="accent-line" />
        <p className="text-mist mt-4 text-sm sm:text-base max-w-2xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
        </p>
      </div>

      <div className="grid gap-5 sm:gap-7 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <button
            type="button"
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="card-3d text-left rounded-2xl overflow-hidden"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            </div>
            <div className="relative p-5">
              <h3 className="text-lg sm:text-xl font-semibold text-foam mb-2">{project.title}</h3>
              <p className="text-mist mb-4 line-clamp-3 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-ink/70 text-copper text-[11px] sm:text-xs font-medium rounded-full px-2.5 py-1 border border-copper/20"
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
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-ink/85 p-0 sm:p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="card-3d rounded-t-2xl sm:rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 z-10 text-foam hover:text-copper bg-ink/80 rounded-full w-10 h-10 flex items-center justify-center text-2xl"
              aria-label="Close"
            >
              &times;
            </button>

            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 bg-ink">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 sm:h-64 lg:h-full object-cover object-top"
                />
              </div>
              <div className="lg:w-1/2 p-5 sm:p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foam mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-mist mb-5 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-ink text-copper text-xs font-medium rounded-full px-2.5 py-1 border border-copper/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-ink border border-line hover:border-copper text-foam px-4 py-3 rounded-xl text-center font-medium transition-colors"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-3d flex-1 px-4 py-3 rounded-xl text-center font-semibold"
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
