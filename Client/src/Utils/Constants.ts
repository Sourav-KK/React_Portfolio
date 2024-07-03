import {
  TiHtml5,
  FaGithub,
  SiRedux,
  SiPostman,
  FaNpm,
  FaGitAlt,
  SiCss3,
  FaBootstrap,
  RiTailwindCssFill,
  IoLogoFirebase,
  SiJsonwebtokens,
  IoLogoFigma,
  SiCanva,
  SiAdobelightroom,
  SiVite,
  SiReactrouter,
  SiDaisyui,
} from "../Utils/React-icons";
import { Nav_tagsI, ProjectDetailsI } from "./interfaces";

import {
  URL_SHORTNER,
  User_Management,
  NETFLIX_CLONE,
  ECOMMERCE,
  IMAGE_EDITOR,
  QUIZ_APP,
} from "./Configs";
// for navbar
const AnchorStyle: string =
  "text-white hover:text-slate-300 rounded-full px-5 py-2 text-xl transition-colors ease-in ";

const Other_skils = [
  { Icon: TiHtml5, Title: "HTML5" },
  { Icon: SiCss3, Title: "CSS3" },
  { Icon: RiTailwindCssFill, Title: "TailwindCSS" },
  { Icon: SiDaisyui, Title: "Daisy UI" },
  { Icon: IoLogoFirebase, Title: "Firebase" },
  { Icon: SiPostman, Title: "Postman" },
  { Icon: SiRedux, Title: "Redux Toolkit" },
  { Icon: FaNpm, Title: "Npm" },
  { Icon: FaGitAlt, Title: "Git" },
  { Icon: FaBootstrap, Title: "Bootstrap" },
  { Icon: SiJsonwebtokens, Title: "JWT" },
  { Icon: FaGithub, Title: "GitHub" },
  { Icon: IoLogoFigma, Title: "Figma" },
  { Icon: SiCanva, Title: "Canva" },
  { Icon: SiAdobelightroom, Title: "Adobe lightroom" },
  { Icon: SiVite, Title: "Vite" },
  { Icon: SiReactrouter, Title: "React router" },
];

const ProjectDetails: ProjectDetailsI[] = [
  {
    title: "URL Shortner",
    link: URL_SHORTNER,
    techs: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "User Management",
    link: User_Management,

    techs: ["Node.js", "React", "MongoDB", "Express.js", "Redux-Toolkit"],
  },
  {
    title: "Netflix Clone",
    link: NETFLIX_CLONE,

    techs: ["React", "Hooks", "APIs"],
  },
  {
    title: "Ecommerce website",
    link: ECOMMERCE,

    techs: ["Node.js", "MongoDB", "Mongoose", "EJS", "Express.js"],
  },
  {
    title: "Image Editor",
    link: IMAGE_EDITOR,

    techs: ["React", "CSS3", "Typescript"],
  },
  {
    title: "Quiz App",
    link: QUIZ_APP,

    techs: ["React", "Redux-Toolkit", "Typescript"],
  },
];

const Nav_tags: Nav_tagsI[] = [
  {
    title: "About",
    id: "#aboutSection",
  },
  {
    title: "Skills",
    id: "#skillSection",
  },
  {
    title: "Projects",
    id: "#project_section",
  },
  {
    title: "Contact",
    id: "#contactSection",
  },
];

export { AnchorStyle, Other_skils, ProjectDetails, Nav_tags };
