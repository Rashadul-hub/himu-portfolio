import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/Rashadul-hub",
  },
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/rashadulislam4/",
  },
  
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [

  // {
  //   title: "MyCoinPoll - Crypto Launchpad Platform",
  //   description:'MyCoinPoll — A crypto launchpad platform designed to support community-driven token launches. Enabled IDO participation, staking, and voting features, empowering investors to access early-stage blockchain projects within the ECM ecosystem.',
  //   image: "/projects/project-1.png",
  //   link: "https://mycoinpoll.com/",
  // },
  {
    title: "Kotha - Made in Bangladesh",
    description:
      'Kotha is Bangladesh’s pioneering social media and lifestyle platform, thoughtfully built by a local Dhaka-based team to serve Bangla-speaking communities worldwide. It uniquely blends social interaction, communication tools, and everyday utility services—all within a culturally relevant, all-in-one ecosystem.',
    image: "/projects/project-2.png",
    link: "https://play.google.com/store/apps/details?id=com.bs.kotha",
  },
  {
    title: "Attendly - Logistics Workforce Tracking",  
    description:'A workforce tracking & task management platform focused on field operations. It provides task assignment, working-hours/timer calculation, real-time location/route monitoring, client task management, transport/logistics tracking, & reporting.',
    image: "/projects/project-3.png",
    link: "https://apps.apple.com/us/app/attendly-by-c9/id6502048892",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
     
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Rashadul-hub",
      },
       {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/rashadulislam4/",
      },
    
    ],
  },
  // {
  //   title: "Social Media",
  //   data: [
  //     {
  //       name: "Instagram",
  //       icon: RxInstagramLogo,
  //       link: "https://instagram.com",
  //     },
  //     {
  //       name: "Twitter",
  //       icon: RxTwitterLogo,
  //       link: "https://twitter.com",
  //     },
     
  //   ],
  // },
  {
    title: "About",
    data: [
      // {
      //   name: "Become Sponsor",
      //   icon: null,
      //   link: "https://youtube.com",
      // },
      {
        name: "Learning about me",
        icon: null,
        link: "https://www.linkedin.com/in/rashadulislam4/",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/Rashadul-hub/",
};
