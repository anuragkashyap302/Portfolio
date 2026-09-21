import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-16 sm:py-20 px-5 sm:px-[7vw] lg:px-[18vw]"
    >
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="title-3d text-3xl sm:text-4xl font-bold">Education</h2>
        <div className="accent-line" />
        <p className="text-mist mt-4 text-sm sm:text-base max-w-2xl mx-auto">
          A snapshot of my academic path, from school foundations to engineering at IIIT Sri City.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto pl-10 sm:pl-14">
        <div className="timeline-rail absolute left-[13px] sm:left-[19px] top-3 bottom-3 w-[2px]" />

        <div className="flex flex-col gap-6">
          {education.map((edu, index) => (
            <article key={edu.id} className="relative">
              <span className="absolute -left-10 sm:-left-14 top-7 w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-copper/40 bg-white shadow-[0_8px_18px_rgba(232,168,124,0.25)]">
                <img
                  src={edu.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </span>

              <div className="card-3d rounded-2xl p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-wide text-copper mb-1">
                      {index === 0 ? "Current" : "Completed"}
                    </p>
                    <h3 className="text-lg sm:text-xl font-semibold text-foam leading-snug">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm text-mist mt-1">{edu.school}</h4>
                    {edu.date && (
                      <p className="text-xs text-mist mt-2">{edu.date}</p>
                    )}
                  </div>
                  <div className="grade-3d self-start rounded-xl px-4 py-2 text-center min-w-[88px]">
                    <p className="text-[10px] uppercase tracking-wider font-semibold opacity-80">
                      Grade
                    </p>
                    <p className="text-sm font-bold leading-tight">{edu.grade}</p>
                  </div>
                </div>
                <p className="mt-4 text-mist leading-relaxed text-sm">{edu.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
