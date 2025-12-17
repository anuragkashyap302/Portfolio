import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[5vw] md:px-[7vw] lg:px-[10vw] font-sans bg-[linear-gradient(38.73deg,rgba(204,0,187,0.15)_0%,rgba(201,32,184,0)_50%),linear-gradient(141.27deg,rgba(0,70,209,0)_50%,rgba(0,70,209,0.15)_100%)] clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my education, projects, and personal experience
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {experiences.map((experience, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={experience.id} className="relative mb-20 flex justify-between items-center w-full">
              {/* Card container */}
              <div className={`w-full md:w-5/12 ${isLeft ? "order-1" : "order-2"}`}>
                <div className="bg-gray-900 border border-white p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
                  {/* Header */}
                  <div className="flex items-center space-x-4">
                    {experience.img && (
                      <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={experience.img}
                          alt={experience.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                      <h4 className="text-sm text-gray-300">{experience.company}</h4>
                      <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
                      {experience.location && (
                        <p className="text-sm text-gray-400">{experience.location}</p>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-gray-400">{experience.desc}</p>

                  {/* Skills */}
                  {experience.skills && (
                    <div className="mt-4">
                      <h5 className="font-medium text-white">Skills:</h5>
                      <ul className="flex flex-wrap mt-2">
                        {experience.skills.map((skill, idx) => (
                          <li
                            key={idx}
                            className="bg-[#8245ec] text-gray-300 px-3 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Circle */}
              <div className="z-10 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 bg-gray-800 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full">
                {experience.img ? (
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <span className="text-white font-bold">{index + 1}</span>
                )}
              </div>

              {/* Empty space for opposite side */}
              <div className={`w-full md:w-5/12 ${isLeft ? "order-2" : "order-1"}`}></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
