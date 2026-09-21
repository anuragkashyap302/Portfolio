import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-16 sm:py-20 px-5 sm:px-[7vw] lg:px-[18vw]"
    >
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="title-3d text-3xl sm:text-4xl font-bold">Experience</h2>
        <div className="accent-line" />
        <p className="text-mist mt-4 text-sm sm:text-base">
          Leadership work, production systems, and hands-on engineering
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto pl-10 sm:pl-14">
        <div className="timeline-rail absolute left-[13px] sm:left-[19px] top-3 bottom-3 w-[2px]" />

        <div className="flex flex-col gap-6">
          {experiences.map((experience, index) => (
            <article key={experience.id} className="relative">
              <span className="grade-3d absolute -left-10 sm:-left-14 top-6 w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs font-bold flex items-center justify-center">
                {index + 1}
              </span>

              <div className="card-3d rounded-2xl p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foam">
                      {experience.role}
                    </h3>
                    <h4 className="text-sm text-copper font-medium mt-1">
                      {experience.company}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs text-foam bg-ink/60 border border-copper/20 rounded-full px-3 py-1">
                      {experience.date}
                    </span>
                    {experience.location && (
                      <span className="text-xs text-mist bg-ink/60 border border-line rounded-full px-3 py-1">
                        {experience.location}
                      </span>
                    )}
                  </div>
                </div>

                <p className="mt-4 text-mist leading-relaxed text-sm sm:text-base">
                  {experience.desc}
                </p>

                {experience.skills && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <li
                        key={skill}
                        className="bg-ink/70 text-copper px-3 py-1 text-xs rounded-full border border-copper/20"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
