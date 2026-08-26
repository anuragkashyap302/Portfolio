import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-20 px-[8vw] md:px-[10vw] lg:px-[20vw]"
    >
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-foam">Education</h2>
        <div className="w-16 h-[2px] bg-copper mx-auto mt-3" />
        <p className="text-mist mt-4 text-base max-w-2xl mx-auto">
          My education has been a journey of continuous learning and growth. Here is a snapshot of my academic background.
        </p>
      </div>

      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        {education.map((edu) => (
          <article
            key={edu.id}
            className="surface p-6 sm:p-8 rounded-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white overflow-hidden flex-shrink-0 shadow-md">
                <img
                  src={edu.img}
                  alt={edu.school}
                  loading="lazy"
                  decoding="async"
                  className="w-14 h-14 object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foam">{edu.degree}</h3>
                <h4 className="text-sm text-copper font-medium">{edu.school}</h4>
              </div>
            </div>
            <p className="text-sm text-mist mt-3">{edu.date}</p>
            <p className="mt-3 text-foam text-sm">
              Grade: <span className="text-copper font-semibold">{edu.grade}</span>
            </p>
            <p className="mt-3 text-mist leading-relaxed">{edu.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
