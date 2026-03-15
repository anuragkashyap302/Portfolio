// src/utils/motionVariants.js
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const zoomIn = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const slideLeft = {
  hidden: { x: 50, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const slideRight = {
  hidden: { x: -50, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Advanced motion variants
export const floatUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const floatingAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

export const rotateScale = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const blurFadeIn = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const shimmer = {
  animate: {
    backgroundPosition: ["0% 0%", "100% 100%"],
    transition: { duration: 3, repeat: Infinity, ease: "linear" },
  },
};

export const pulse = {
  animate: {
    opacity: [1, 0.5, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

export const glow = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(130, 69, 236, 0.5)",
      "0 0 40px rgba(130, 69, 236, 0.8)",
      "0 0 20px rgba(130, 69, 236, 0.5)",
    ],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

export const popIn = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 20, duration: 0.5 },
  },
};

export const slideUpStagger = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const gradientShift = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
};

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.3 },
};
