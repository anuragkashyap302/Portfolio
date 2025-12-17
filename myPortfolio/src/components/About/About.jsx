import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import profileImage from "../../assets/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-14">
        {/* Left Side */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-[48%] text-center md:text-left mt-8 md:mt-0"
        >
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4 leading-tight drop-shadow-lg">
            Anurag Kumar
          </h2>
          {/* Skills with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                2000,
                "Web Developer",
                2000,
                "UI/UX Designer",
                2000,
                "Coder",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-300 mb-10 mt-6 leading-relaxed">
            I am a passionate full-stack developer with over 2 years of
            experience in building scalable web applications. Skilled in both
            front-end and back-end development, I specialize in the MERN stack
            and other modern technologies to create seamless user experiences
            and efficient solutions.
          </p>
          {/* Resume Button */}
          <motion.a
  href="https://drive.google.com/file/d/199lQbCiXhoYfSzlEcTfVetwfQWPsMbTT/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold shadow-lg hover:shadow-2xl hover:shadow-purple-500/70 transition duration-300"
  style={{
    background: "linear-gradient(90deg, #8245ec, #a855f7)",
  }}
>
  DOWNLOAD RESUME
</motion.a>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-[48%] flex justify-center md:justify-end relative"
        >
          {/* Glowing spinning background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[22rem] h-[22rem] rounded-full animate-spin-slow bg-gradient-to-tr from-purple-500 to-pink-500 opacity-30 blur-2xl"></div>
          </div>

          {/* Profile Image with Tilt + Shadow */}
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[26rem] md:h-[26rem] border-4 border-purple-700 rounded-full shadow-2xl"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Anurag Kumar"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
