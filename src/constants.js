// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';

// Missing language logo imports - add these files to your assets/tech_logo folder
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

// Education Section Logo's
import agseLogo from './assets/education_logo/images.jpg';
import rlsylogo from './assets/education_logo/rlsylogo.png';
import currentCollegeLogo from './assets/education_logo/ogilogo.jpeg';
// Using agseLogo as placeholder for paligunj - replace with actual logo when available

// Project Section Logo's
import githubdetLogo from './assets/tech_logo/work.jpg';
import csprepLogo from './assets/tech_logo/Zerodha.jpg';
import movierecLogo from './assets/tech_logo/WEATHER.jpg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
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
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
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
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: agseLogo,
    school: "Assembly of god Sakari, Arwal",
    date: "2018 - 2019",
    grade: "Passed",
    desc: "Completed my Class 10th education from Agse Sakari, Arwal.",
    degree: "Secondary School Certificate (Class 10)",
  },
  {
    id: 1,
    img: rlsylogo, 
    school: "R.L.S.Y College Paligunj",
    date: "2019 - 2021",
    grade: "Passed",
    desc: "Completed my Class 12th education from Paligunj College.",
    degree: "Senior Secondary Certificate (Class 12)",
  },
  {
    id: 2,
    img: currentCollegeLogo,
    school: "Your Current College/University Name",
    date: "2022 - Present",
    grade: "In Progress, expected passout 2026",
    desc: "Currently pursuing my Bachelor's degree in [Computer science and technology] from 2022, expected to graduate in 2026.",
    degree: "Bachelor's Degree (e.g. BTech, BSc, etc.)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Amazon Clone",
   description: "A basic e-commerce website built using HTML and CSS for learning purposes. It includes simple layouts for product listings, a homepage, and basic styling to understand website structure and design fundamentals.",

    image: githubdetLogo,
    tags: ["HTML", "CSS", ],
    github: "https://github.com/shilu-123/amazon-clone.git",
   
  },
  {
    id: 1,
    title: "Zerodha clone",
    description: "A full-stack clone of Zerodha's landing and user dashboard built using the MERN stack (MongoDB, Express.js, React, Node.js). This project replicates the UI/UX of Zerodha's official platform, including responsive design, authentication, and basic trading dashboard features. Developed to enhance skills in frontend development with React and backend integration using REST APIs, database management, and user session handling.",
    image: csprepLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", ],
    github: "https://github.com/shilu-123/Zerodha-clone",
    
  },
  {
    id: 2,
    title: "Weather-app",
    description: "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: [, "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/shilu-123/weather.app",
   
  },
  
    
    
  
   
    
];