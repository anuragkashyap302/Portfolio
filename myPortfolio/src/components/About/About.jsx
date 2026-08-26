import { TypeAnimation } from "react-type-animation";
import profileImage from "../../assets/Profile.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-12 px-[7vw] md:px-[7vw] lg:px-[20vw]"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-14">
        <div className="md:w-[52%] text-center md:text-left">
          <p className="text-copper font-mono text-sm mb-3">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foam leading-tight">
            Anurag Kumar
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 text-mist">
            I am a{" "}
            <span className="text-copper">
              <TypeAnimation
                sequence={[
                  "Fullstack Developer",
                  2000,
                  "Web Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </h2>
          <p className="text-base md:text-lg text-mist mt-6 leading-relaxed max-w-xl">
            I am a passionate full-stack developer with over 2 years of experience in building scalable web applications.
            Skilled in both front-end and back-end development, I specialize in the MERN stack and other modern
            technologies to create seamless user experiences and efficient solutions.
          </p>
          <a
            href="https://drive.google.com/file/d/1Wk-BR9SPekK26dd3nuB0U8GFTS6-B8Cd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-ink bg-copper hover:bg-copper-dark py-3 px-7 rounded-full text-sm font-semibold tracking-wide transition-colors shadow-[0_10px_28px_rgba(232,168,124,0.35)]"
          >
            Download Resume
          </a>
        </div>

        <div className="md:w-[48%] flex justify-center md:justify-end">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full p-[3px] bg-copper shadow-[0_16px_50px_rgba(232,168,124,0.35)]">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-ink">
              <img
                src={profileImage}
                alt="Anurag Kumar"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                draggable="false"
                className="absolute inset-0 w-full h-full rounded-full object-cover select-none"
                style={{ objectPosition: "center 18%", transform: "scale(1.12)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
