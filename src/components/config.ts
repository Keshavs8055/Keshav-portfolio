import {
  Cloud,
  Code,
  Database,
  Feather,
  Figma,
  Layers,
  Monitor,
  Smartphone,
  Zap,
} from "lucide-react";

import Hero from "../assets/landing/project-hero.png";
import ProjectImage2 from "../assets/projects/projectImage2.png";
import ProjectImage3 from "../assets/projects/projectImage3.png";
import ProjectImage4 from "../assets/projects/projectImage4.png";
import ProjectImage5 from "../assets/projects/projectImage5.png";
import ProjectImage6 from "../assets/projects/projectImage6.png";
import ProjectImage7 from "../assets/projects/projectImage7.png";

export const LandingConfig = {
  mailString: `
   mailto:keshavs.0496@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Keshav%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20work.%20I%E2%80%99d%20like%20to%20discuss%20a%20potential%20project%20and%20see%20if%20we%20could%20work%20together.%0D%0A%0D%0ACould%20you%20share%20your%20availability%20for%20a%20short%20call%3F%0D%0A%0D%0ARegards%2C%0D%0A
    `,
  featured: {
    imageName: Hero,
    altText: "Momentum Flow screenshot",
    link: "https://momentum-flow.vercel.app/",
    title: "Momentum Flow",
    description:
      "An AI powered productivity app that helps you stay focused and organized throughout your day.",
    props: ["Accessible", "SSR-ready", "Perf-first"],
  },
};

export const SkillsConfig = {
  skills: [
    {
      id: "web",
      name: "Web Development",
      icon: Monitor,
      note: "Semantic HTML, accessible UIs",
    },
    {
      id: "mern",
      name: "MERN / Next.js",
      icon: Code,
      note: "Fullstack Web Apps",
    },
    {
      id: "python",
      name: "Python",
      icon: Zap,
      note: "Integrate AI/Ml to web apps, build AI/Ml tools",
    },
    {
      id: "firebase",
      name: "Firebase",
      icon: Cloud,
      note: "Auth, Firestore",
    },
    {
      id: "wordpress",
      name: "WordPress",
      icon: Layers,
      note: "Headless WP & theme work",
    },
    {
      id: "figma",
      name: "Figma",
      icon: Figma,
      note: "Design systems, Design to Code",
    },
    {
      id: "design",
      name: `Design / UI/UX`,
      icon: Feather,
      note: "Wireframes, interaction design",
    },
    {
      id: "responsive",
      name: "Responsive",
      icon: Smartphone,
      note: "Mobile-first, fluid layouts",
    },
    {
      id: "db",
      name: "Databases",
      icon: Database,
      note: "Work with data and real-time sync",
    },
  ],
  exampleTools: (id: string) => {
    switch (id) {
      case "web":
        return "HTML, CSS,Js, Tailwind, Bootstrap";
      case "mern":
        return "React, Next.js, Express, MongoDB";
      case "python":
        return "Python3, scripts, Flask";
      case "firebase":
        return "Auth, Firestore";
      case "wordpress":
        return "Headless WP, Themes";
      case "figma":
        return "Components, Prototypes";
      case "design":
        return "Figma, Wireframes";
      case "responsive":
        return "Mobile-first, CSS Grid";
      case "db":
        return "Firebase, MongoDB";
      default:
        return "";
    }
  },
};

export const ProjectsConfig = {
  projects: [
    {
      id: "journely",
      title: "Journely",
      description:
        "An AI powered journaling app that helps you reflect and grow. A journal that grows along with your journey.",
      image: ProjectImage2,
      tags: ["Next.js", "AI", "Tailwind", "Genkit", "Firebase"],
      live: "https://journely-psi.vercel.app/",
      repo: "https://github.com/Keshavs8055/Journely",
      role: "Full Stack Developer",
    },
    {
      id: "resume",
      title: "Resume Analyzer",
      description:
        "Another AI powered web app that helps you analyze and improve your resume for better job prospects. Includes Chat features and powered by GenKit AI.",
      image: ProjectImage4,
      tags: ["Next.js", "Redis", "Tailwind", "Nodejs"],
      live: "https://resume-analyzer-silk-rho.vercel.app/",
      repo: "https://github.com/Keshavs8055/Resume-analyzer",
      role: "Full Stack Developer",
    },
    {
      id: "zenith",
      title: "Zenith - Intelligent Ascent",
      description:
        "A rich todo app which makes your goals easy to meet and deadlines not so deadly. Built with React, Node.js and MongoDB. Powered by AI features. (In progress)",
      image: ProjectImage5,
      tags: ["Next.js", "MongoDB", "AI", "Typescript"],
      repo: "https://github.com/Keshavs8055/Zenith-Intelligent-Ascent",
      role: "Full Stack Developer",
    },
    {
      id: "blog",
      title: "Thorought - A blog Application",
      description:
        "A fullstack blog application built with MERN stack. Users can create, edit, delete and view blog posts. Features user authentication and authorization.",
      image: ProjectImage7,
      tags: ["MongoDB", "Express", "React", "Node.js"],
      repo: "https://github.com/Keshavs8055/Thorough-blog",
      role: "Full Stack Developer",
    },
    {
      id: "monastery",
      title: "Model Monastry",
      description:
        "A python API which allows users to generate, fine-tune and deploy AI models with ease. Built with Flask and integrated with various AI frameworks. (In progress)",
      image: ProjectImage6,
      tags: ["Python", "Flask", "AI"],
      repo: "https://github.com/Keshavs8055/model-monastry-server",
      role: "Backend Developer",
    },
    {
      id: "portfolio",
      title: "This Portfolio",
      description:
        "The site you are on — SPA built with Next.js, Tailwind and Framer Motion.",
      image: ProjectImage3,
      tags: ["React", "Tailwind", "Framer Motion", "Typescript"],
      repo: "https://github.com/Keshavs8055/Keshav-portfolio",
      role: "Designer / Full Stack Developer",
    },
  ],
};
