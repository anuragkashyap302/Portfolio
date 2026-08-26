import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-20 px-[5vw] md:px-[7vw] lg:px-[20vw]"
    >
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-foam">Experience</h2>
        <div className="w-16 h-[2px] bg-copper mx-auto mt-3" />
        <p className="text-mist mt-4 text-base">
          A collection of my education, projects, and personal experience
        </p>
      </div>

      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        {experiences.map((experience) => (
          <article
            key={experience.id}
            className="surface p-6 rounded-xl"
          >
            <div className="flex items-start gap-4">
              {experience.img && (
                <div className="w-14 h-14 bg-white rounded-md overflow-hidden flex-shrink-0 shadow-md">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold text-foam">
                  {experience.role}
                </h3>
                <h4 className="text-sm text-copper font-medium mt-0.5">
                  {experience.company}
                </h4>
                <p className="text-sm text-mist mt-1">{experience.date}</p>
                {experience.location && (
                  <p className="text-sm text-mist">{experience.location}</p>
                )}
              </div>
            </div>

            <p className="mt-4 text-mist leading-relaxed">{experience.desc}</p>

            {experience.skills && (
              <div className="mt-4">
                <h5 className="font-medium text-foam mb-2 text-sm">Skills</h5>
                <ul className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <li
                      key={skill}
                      className="bg-ink text-copper px-3 py-1 text-xs rounded border border-line"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
