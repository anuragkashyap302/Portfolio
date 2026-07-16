import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import profileImage from "../../assets/Profile.jpg";
import { containerVariants, itemVariants } from "../../utils/motionVariants";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-8 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-16"
      >
        {/* Left Side */}
        <motion.div
          variants={itemVariants}
          className="md:w-[48%] text-center md:text-left"
        >
          {/* Greeting */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight"
          >
            Hi, I am
          </motion.h1>

          {/* Name with gradient */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-500 mb-4 leading-tight"
          >
            Anurag Kumar
          </motion.h2>

          {/* Skills with Typing Effect */}
          <motion.h3 variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-white leading-tight">
            <span className="text-white">I am a </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">
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
          </motion.h3>

          {/* About Me Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-lg text-gray-300 mb-8 mt-6 leading-relaxed"
          >
            I am a passionate full-stack developer with over 2 years of experience in building scalable web applications.
            Skilled in both front-end and back-end development, I specialize in the MERN stack and other modern
            technologies to create seamless user experiences and efficient solutions.
          </motion.p>

          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1Wk-BR9SPekK26dd3nuB0U8GFTS6-B8Cd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
            className="inline-block text-white py-3 px-8 rounded-full mt-4 text-lg font-bold shadow-lg hover:shadow-2xl transition duration-300 relative overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, #8245ec 0%, #a855f7 50%, #d946ef 100%)",
            }}
          >
            <span className="relative z-10">DOWNLOAD RESUME</span>
          </motion.a>
        </motion.div>

        {/* Right Side */}
        <motion.div
          variants={itemVariants}
          className="md:w-[48%] flex justify-center md:justify-end relative"
        >
          {/* Single rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-[28rem] h-[28rem] rounded-full border border-transparent bg-gradient-to-tr from-purple-500 via-pink-500 to-transparent opacity-20" />
          </motion.div>

          {/* Profile Image with Tilt */}
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[26rem] md:h-[26rem] rounded-full shadow-2xl relative z-10 overflow-hidden"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={600}
            gyroscope={true}
          >
            <motion.div
              className="w-full h-full rounded-full border-4 border-transparent bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 p-[2px]"
              whileInView={{
                boxShadow: "0 0 30px rgba(130, 69, 236, 0.6)",
              }}
            >
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0a0e27]">
                <img
                  src={profileImage}
                  alt="Anurag Kumar"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  draggable="false"
                  className="absolute inset-0 w-full h-full rounded-full object-cover scale-[1.66] shadow-lg select-none"
                />
              </div>
            </motion.div>
          </Tilt>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
