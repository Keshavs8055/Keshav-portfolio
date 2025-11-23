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

export const Config = {
  mainURL: "",
  schedulingLink: "https://koalendar.com/e/meet-with-keshav-sharma",

  mailString: `
   mailto:keshavs.0496@gmail.com?subject=Project%20Enquiry&body=Hi%20Keshav,%0AI'm%20interested%20in%20your%20services.%20Here%20are%20the%20details:%0A-%20Business%20Name:%0A-%20Current%20Website%20(If%20any):%0A-%20What%20I%20Need:%0A-%20Timeline:%0A-%20Budget%20Range:%0A%0ALooking%20forward%20to%20hearing%20from%20you.
    `,
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
