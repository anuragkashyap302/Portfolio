import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => (
  <section
    id="skills"
    className="relative py-20 px-[12vw] md:px-[7vw] lg:px-[20vw]"
  >
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-foam">Skills</h2>
      <div className="w-16 h-[2px] bg-copper mx-auto mt-3" />
      <p className="text-mist mt-4 text-base max-w-2xl mx-auto">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    <div className="flex flex-wrap gap-6 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="surface px-6 py-6 mb-4 w-full sm:w-[48%] rounded-xl"
        >
          <h3 className="text-xl font-semibold text-foam mb-5 text-center">
            {category.title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-center space-x-2 bg-ink border border-line rounded-lg py-3 px-2 text-center hover:border-copper transition-colors"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  loading="lazy"
                  decoding="async"
                  className="w-6 h-6"
                />
                <span className="text-xs sm:text-sm text-foam font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
