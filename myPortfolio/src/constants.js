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
import quickstayLogo from './assets/work_logo/project4.png';
import aisaasLogo from './assets/work_logo/project2.png';
import barberqLogo from './assets/work_logo/project1.png';
import pingupLogo from './assets/work_logo/project3.png';
import hospitalmanagementLogo from './assets/work_logo/project5.png';
import digitalheroesLogo from './assets/work_logo/project6.png';


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
    role: "Team Lead",
    company: "Hostel Management System for IIIT Sricity",
    date: "2025 – Present",
    location: "Remote",
    desc: "Developed a production-ready MERN-based hostel complaint system used by 1500+ students. Implemented role-based access control for caretakers, wardens, and chief wardens. Designed and optimized RESTful APIs.",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Collaboration"],
  },
  {
    id: 1,
    role: "Team Lead (Academic Project)",
    company: "Smart Water Distribution System",
    date: "Aug 2024 – Dec 2024",
    location: "IIIT, Sricity",
    desc: "Led a team to build a Smart Water Distribution system using IoT devices. Coordinated hardware integration and real-time data management using Firebase.",
    skills: ["IoT", "Firebase", "Teamwork", "Hardware Integration"],
  },
 
  
];
  
 export const education = [
  {
    id: 0,
    img: iiitsLogo,
    school: "Indian Institute of Information Technology, Sri City",
    date: "Aug 2023 – Present",
    grade: "8.69 CGPA",
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
      title: "BarberQ",
      description:
        "A MERN barber booking platform for discovering barbers by city, ratings, reviews, pricing, and availability. Includes real-time booking, secure payments, and an admin dashboard with email notifications for barbers, services, bookings, and analytics.",
      image: barberqLogo,
      tags: ["React JS", "Node.js", "MongoDB", "JWT", "Express.js", "Full Stack"],
      github: "https://github.com/anuragkashyap302/BarberQ",
      webapp: "https://barber-q-lemon.vercel.app/",
    },
    {
      id: 1,
      title: "AI-SAAS – AI-Powered Content & Image Tool",
      description:
        "An AI-powered SaaS platform for creators to generate articles, blogs, and images, as well as remove backgrounds and objects. Multiple AI tools sit behind a modern React UI and a production backend.",
      image: aisaasLogo,
      tags: ["React JS", "Node.js", "AI Tools", "Google-Gemini", "Clip-Drop", "ImageKit", "SaaS"],
      github: "https://github.com/anuragkashyap302/QuickAI",
      webapp: "https://quick-ai-client-delta.vercel.app/",
    },
  {
    id: 2,
    title: "PingUp",
    description:
      "A full-stack social media platform with secure authentication, profile management, and a scalable client-server architecture. Includes real-time messaging, posts, stories, follow/unfollow, friend requests, user search, and personalized news feeds, plus optimized media storage and background job processing.",
    image: pingupLogo,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Clerk", "Inngest", "ImageKit"],
    github: "https://github.com/anuragkashyap302/PingUp",
    webapp: "https://pingit-up.vercel.app/",
  },
  {
    id: 3,
    title: "QuickStay – Hotel Booking Website",
    description:
      "A full-stack platform that allows users to register hotels and book rooms seamlessly. Features include hotel registration, room booking, and a fully responsive interface built with the MERN stack.",
    image: quickstayLogo,
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Full Stack"],
    github: "https://github.com/anuragkashyap302/HOTEL-BOOKING",
    webapp: "https://quickstay-dusky-kappa.vercel.app/",
  },
  {
    id: 4,
    title: "MediCare",
    description:
      "A full-stack hospital management system for patients, doctors, staff, and admins with role-based access. Covers appointment scheduling, healthcare service booking, doctor and department management, and patient records through REST APIs and responsive dashboards.",
    image: hospitalmanagementLogo,
    tags: ["React JS", "Node.js", "MongoDB", "JWT", "Express.js", "Full Stack"],
    github: "https://github.com/anuragkashyap302/MediCare",
    webapp: "https://medicare-frontend-8miz.onrender.com/",
  },
  
  
  
  {
    id: 5,
    title: "DIGITAL HEROES-A Golf Performance and Charity Draw Platform",
    description:
      "A golf performance and charity draw platform that allows users to track their golf performance, participate in charity draws, and win prizes.",
    image: aisaasLogo,
    tags: ["React JS", "Node.js", "Supabase", "Postgres", "Tailwind CSS", "Stripe"],
    github: "hhttps://github.com/anuragkashyap302/Digital-Heroes",
    webapp: "https://digital-heroes-anurag.vercel.app/",
  },
];
