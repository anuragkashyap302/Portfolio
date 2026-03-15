// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import iiitsLogo from './assets/education_logo/iiitsLogo.jpg';
import nhsLogo from './assets/education_logo/bsa_logo.png';
import rvmLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import quickstayLogo from './assets/work_logo/project2.png';
import aisaasLogo from './assets/work_logo/project1.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import barberqLogo from './assets/work_logo/project3.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
  {
    id: 0,
    role: "Team Lead (Academic Project)",
    company: "Smart Water Distribution System",
    date: "Aug 2024 – Dec 2024",
    location: "IIIT, Sricity",
    desc: "Led a team to build a Smart Water Distribution system using IoT devices. Coordinated hardware integration and real-time data management using Firebase.",
    skills: ["IoT", "Firebase", "Teamwork", "Hardware Integration"],
  },
  {
    id: 1,
    role: "(Self Projects)",
    company: "Personal Projects",
    date: "2025 – Present",
    location: "Remote",
    desc: "Collaborated in 5+ self projects, focusing on backend development. Participated in peer learning, code reviews, and debugging sessions to improve code quality.",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Collaboration"],
  },
  {
    id: 2,
    role: "Team Lead",
    company: "Hostel Management System for IIIT Sricity",
    date: "2025 – Present",
    location: "Remote",
    desc: "Developed a production-ready MERN-based hostel complaint system used by 1500+ students. Implemented role-based access control for caretakers, wardens, and chief wardens. Designed and optimized RESTful APIs.",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Collaboration"],
  },
];
  
 export const education = [
  {
    id: 0,
    img: iiitsLogo,
    school: "Indian Institute of Information Technology, Sri City",
    date: "Aug 2023 – Present",
    grade: "8.44 CGPA",
    desc: "Pursuing a Bachelor of Technology (B.Tech) in Electronics and Communication Engineering. I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge",
    degree: "Bachelor of Technology - Electronics & Communication Engineering",
  },
  {
    id: 1,
    img: nhsLogo,
    school: "New Horizon School",
    grade: "89%",
    desc: "Completed Class XII under CBSE board with Physics, Chemistry, and Mathematics as core subjects. Actively involved in science exhibitions and technical projects that strengthened analytical and problem-solving skills.",
    degree: "CBSE (XII) - Science (PCM)",
  },
  {
    id: 2,
    img: rvmLogo,
    school: "R.V.M High School",
    grade: "91%",
    desc: "Completed Class X under CBSE board with a strong foundation in Science and Mathematics. Actively engaged in extracurricular and academic competitions.",
    degree: "CBSE (X) - Science with Computer",
  },
];
  
  export const projects = [
  {
    id: 0,
    title: "QuickStay – Hotel Booking Website",
    description:
      "A full-stack platform that allows users to register hotels and book rooms seamlessly. Features include hotel registration, room booking system, and a fully responsive user interface. Built using the MERN stack for scalability and performance.",
    image: quickstayLogo, // replace with your project logo or screenshot
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Full Stack"],
    github: "https://github.com/anuragkashyap302/HOTEL-BOOKING", // replace with your repo link
    webapp: "https://quickstay-dusky-kappa.vercel.app/", // replace with your live demo link
  },
  {
    id: 1,
    title: "AI-SAAS – AI-Powered Content & Image Tool",
    description:
      "An AI-powered SaaS platform for creators to generate articles, blogs, and images, as well as remove backgrounds and objects. Integrated multiple AI tools into a modern React-based UI with powerful backend services.",
    image: aisaasLogo, // replace with your project logo or screenshot
    tags: ["React JS", "Node.js", "AI Tools", "Image Processing", "SaaS"],
    github: "https://github.com/anuragkashyap302/QuickAI", // replace with your repo link
    webapp: "https://quick-ai-client-delta.vercel.app/", // replace with your live demo link
  },
  {
    id: 2,
    title: "BarberQ",
    description:
      "Full-stack MERN-based online barber booking platform enabling users to discover and book barbers by city, ratings, reviews, pricing, and availability with advanced search and filtering Implemented a dynamic booking system with real-time availability, instant confirmations, and secure payment gateway integration Developed an admin dashboard with automated email notifications for managing barbers, services, bookings, user feedback, and platform analytics.",
 
    image: barberqLogo, // replace with your project logo or screenshot
    tags: ["React JS", "Node.js", "Mongo-DB", "JWT", "Express.js" ,"Full Stack"],
    github: "https://github.com/anuragkashyap302/BarberQ", // replace with your repo link
    webapp: "https://barber-q-lemon.vercel.app/", // replace with your live demo link
  },
];
