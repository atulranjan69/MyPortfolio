// skill section logo
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
// import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
// import angularLogo from './assets/tech_logo/angular.png';
// import reduxLogo from './assets/tech_logo/redux.png';
// import nextjsLogo from './assets/tech_logo/nextjs.png';
// import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
// import gsapLogo from './assets/tech_logo/gsap.png';
// import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
// import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import windowsLogo from './assets/tech_logo/window.png';

// Experience Section Logo's
import drdoLogo from './assets/company_logo/drdo.png';
import codsoftLogo from './assets/company_logo/codesoft.png';

// Education Section Logo'
import ikLogo from './assets/education_logo/I.K.png';
import bspLogo from './assets/education_logo/bseb.png';


// Project Section Logo's

import travelLogo from './assets/work_logo/travel.png';
import qrLogo from './assets/work_logo/qr.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      // { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Windows', logo: windowsLogo },
      // { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      // { name: 'Vercel', logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: drdoLogo, // make sure to import or link the DRDO logo
    role: "Software Developer Intern (SDE-1)",
    company: "Defence Research & Development Organisation (DRDO)",
    date: "January 2025 - June 2025",
    desc: "Contributed to a defense project on Honeypot Design and Network Security during a 6-month internship at the Scientific Analysis Group, DRDO, New Delhi. Played a key role in developing and enhancing internal tools for network monitoring and cybersecurity, with a focus on writing optimized, secure, and maintainable code. Strengthened development best practices while gaining valuable exposure to defense-grade technologies. Collaborated closely under the mentorship of Scientist 'E', Mr. Ashish Sonkar, in a high-security, research-driven environment.",
    skills: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "Bootstrap",
      "Embedded JavaScript (EJS)"
    ],
  },

  {
    id: 1,
    img: codsoftLogo, // make sure to import or link the CodSoft logo
    role: "Web Development Intern",
    company: "CodSoft",
    date: "August 2023 - September 2023",
    desc: "Worked as a Web Development Intern, creating responsive and user-friendly websites using HTML, CSS, JavaScript, and Bootstrap. Gained practical experience in front-end development, including layout structuring, component design, and mobile-first responsiveness. Collaborated within a remote team environment to deliver clean, maintainable, and functional web interfaces aligned with modern UI/UX standards.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap"
    ],
  },
];



  export const education = [
  {
    id: 0,
    img: ikLogo, // yahan college ka logo import karke use karo
    school: "Universal Group of Institutions, Punjab",
    date: "Aug 2021 - July 2025",
    grade: "84%",
    desc: "I have completed my Bachelor's degree (B.Tech) in Computer Science and Engineering from Universal Group of Institutions, affiliated to PTU. During this time, I built a strong foundation in core computer science subjects like Data Structures, Algorithms, Operating Systems, Database Management Systems, and Web Development. I also took part in technical workshops and coding competitions that helped boost my practical knowledge and confidence. My time here has played a key role in shaping me as a future-ready software engineer.",
    degree: "Bachelor of Technology - B.Tech (CSE)",
    },
     {
    id: 1,
    img: bspLogo, 
    school: "MR Inter College, Harsidhi",
    date: "Aug 2020 - July 2021",
    grade: "67%",
    desc: "I completed my 12th grade in the Non-Medical stream with subjects including Physics, Chemistry, Mathematics, and Computer Science. During this time, I developed a strong interest in technology and problem-solving, which motivated me to pursue engineering. I also focused on building logical thinking and analytical skills through regular assignments and practicals. My performance and curiosity in computer-related subjects laid the foundation for my future in Computer Science.",
     degree: "Non-Medical(BSEB)",
    },
       {
    id: 2,
    img: bspLogo, 
    school: "Primary School, Kanchhedwa",
    date: "March 2019 - July 2020",
    grade: "71%",
   desc: "I completed my 10th standard with a strong academic record. This phase laid the foundation of my academic journey where I studied core subjects like Mathematics, Science, Social Studies, and English. I developed a disciplined learning approach, participated in science exhibitions and quizzes, and also maintained good performance across all subjects. This period helped shape my interest in analytical subjects and set the direction for choosing the Non-Medical stream later.",
  degree: "Secondary School Education - 10th (bihar Board)",
  }
];


export const projects = [
    {
        id: 1,
        title: "TravelMate",
        description:
            "A sleek and intuitive travel companion app that helps users discover destinations, plan trips, and manage itineraries with ease. Designed with a user-first approach, it offers location-based suggestions and a visually engaging interface to enhance the travel planning experience.",
        image: travelLogo,
        tags: ["HTML", "CSS", "JavaScript", "Node Js", "Express Js", "MongoDB", "Bootstrap"],
        github: "https://github.com/atulranjan69/Travelmate",
        webapp: "https://travelmate-f7rm.onrender.com", // replace with your deployed

        // webapp: "https://travelmateproject.netlify.app/", // replace with your deployed URL if available
  },
  {
    id: 1,
    title: "QR Attendance System",
    description:
      "A web-based application that streamlines the attendance process using QR codes. It allows teachers to generate QR codes for their classes, which students can scan to mark their attendance. The system provides real-time attendance tracking and reporting features.",
    image: qrLogo, // replace with your project image
    tags: ["HTML", "CSS", "JavaScript", "Node Js", "Express Js", "MongoDB", "Bootstrap"],
    github: "",
    webapp: "",
  }
  
  // 2 projects can be added here
];
//             "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
//         image: csprepLogo,
//         tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
//         github: "https://github.com/codingmastr/CSPrep",
//         webapp: "https://csprep.netlify.app/",
//     },
//     {
//         id: 2,
//         title: "Movie Recommendation App",
//         description:
//             "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
//         image: movierecLogo,
//         tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
//         github: "https://github.com/codingmastr/Movie-Recommendation-App",
//         webapp: "https://movie-recommendation-app-jet.vercel.app/",
//     },
//     {
//         id: 3,
//         title: "Email Validator NPM Package",
//         description:
//             "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
//         image: npmLogo,
//         tags: ["React JS", "Node.js", "NPM", "Validation"],
//         github: "https://github.com/codingmastr/cmtk-email-validator",
//         webapp: "https://www.npmjs.com/package/cmtk-email-validator",
//     },
//     {
//         id: 4,
//         title: "Task Reminder Chrome Extension Tool",
//         description:
//             "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
//         image: taskremLogo,
//         tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
//         github: "https://github.com/codingmastr/Task-Reminder-Tool",
//         webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
//     },
//     {
//         id: 5,
//         title: "Webverse Digital",
//         description:
//             "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
//         image: webverLogo,
//         tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
//         github: "https://github.com/codingmastr/Webverse-Digital",
//         webapp: "https://webversedigital.com/",
//     },
//     {
//         id: 6,
//         title: "Coding Master",
//         description:
//             "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
//         image: cmLogo,
//         tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
//         github: "https://codingmasterweb.in/",
//         webapp: "https://codingmasterweb.in/",
//     },
//     {
//         id: 7,
//         title: "Image Search App",
//         description:
//             "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
//         image: imagesearchLogo,
//         tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
//         github: "https://github.com/codingmastr/Image-Search-App",
//         webapp: "https://imagsearch.netlify.app/",
//     },
//     {
//         id: 8,
//         title: "Image Background Remover",
//         description:
//             "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
//         image: removebgLogo,
//         tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
//         github: "https://github.com/codingmastr/Image-Background-Remover",
//         webapp: "https://removeyourbg.netlify.app/",
//     },
// ];