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
  IoLogoFigma,
  SiMongodb,
  SiExpress,
  IoLogoReact,
  FaNode,
  IoLogoJavascript,
  SiTypescript,
  BiLogoPostgresql,
  SiNextdotjs,
  // SiJsonwebtokens,
  // SiCanva,
  // SiAdobelightroom,
  // SiVite,
  // SiReactrouter,
  // SiDaisyui,
} from "../Utils/React-icons";
import { Nav_tagsI, ProjectDetailsI, testimonialsI } from "./interfaces";

import {
  URL_SHORTNER,
  USER_MANAGEMENT,
  NETFLIX_CLONE,
  ECOMMERCE,
  IMAGE_EDITOR,
  QUIZ_APP,
  AVATAR_A,
  AVATAR_B,
  AVATAR_C,
} from "./Configs";

const Other_skils = [
  { Icon: TiHtml5, Title: "HTML5" },
  { Icon: SiCss3, Title: "CSS3" },
  { Icon: RiTailwindCssFill, Title: "TailwindCSS" },
  { Icon: FaBootstrap, Title: "Bootstrap" },
  { Icon: IoLogoFirebase, Title: "Firebase" },
  { Icon: SiPostman, Title: "Postman" },
  { Icon: SiRedux, Title: "Redux Toolkit" },
  { Icon: FaNpm, Title: "Npm" },
  { Icon: FaGitAlt, Title: "Git" },
  { Icon: FaGithub, Title: "GitHub" },
  { Icon: IoLogoFigma, Title: "Figma" },
  // { Icon: SiJsonwebtokens, Title: "JWT" },
  // { Icon: SiDaisyui, Title: "Daisy UI" },
  // { Icon: SiCanva, Title: "Canva" },
  // { Icon: SiAdobelightroom, Title: "Adobe lightroom" },
  // { Icon: SiVite, Title: "Vite" },
  // { Icon: SiReactrouter, Title: "React router" },
];

const skillsIcon = [
  { Icon: SiMongodb, Title: "MongoDB" },
  { Icon: SiExpress, Title: "Express.js" },
  { Icon: IoLogoReact, Title: "React" },
  { Icon: FaNode, Title: "Node.js" },
  { Icon: IoLogoJavascript, Title: "Javascript" },
  { Icon: SiTypescript, Title: "TypeScript" },
  { Icon: BiLogoPostgresql, Title: "PostgreSQL" },
  { Icon: SiNextdotjs, Title: "Next js" },
];

const ProjectDetails: ProjectDetailsI[] = [
  {
    title: "URL Shortner",
    link: URL_SHORTNER,
    techs: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "User Management",
    link: USER_MANAGEMENT,

    techs: ["MERN Stack"],
  },
  {
    title: "Netflix Clone",
    link: NETFLIX_CLONE,

    techs: ["React", "Hooks", "APIs"],
  },
  {
    title: "Ecommerce website",
    link: ECOMMERCE,

    techs: ["MERN Stack"],
  },
  {
    title: "Image Editor",
    link: IMAGE_EDITOR,

    techs: ["React", "CSS3"],
  },
  {
    title: "Quiz App",
    link: QUIZ_APP,

    techs: ["React", "Redux-Toolkit"],
  },
];

const Nav_tags: Nav_tagsI[] = [
  // {
  //   key: 1000,
  //   title: "Home",
  //   id: "homeSection",
  //   class: "home "
  // },
  {
    key: 1001,
    title: "About",
    id: "aboutSection",
    class: "about",
  },
  {
    key: 1002,
    title: "Skills",
    id: "skillSection",
    class: "skills",
  },
  {
    key: 1003,
    title: "Projects",
    id: "projectSection",
    class: "projects",
  },
  {
    key: 1004,
    title: "Contact",
    id: "contactSection",
    class: "contact",
  },
];

const Testimonials: testimonialsI[] = [
  {
    img: AVATAR_A,
    quote:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit.tenetur odio fugit ea impedit ",
    author: "-John Doe",
    postion: "Lorem ipsum, font-mono, font-mono",
  },
  {
    img: AVATAR_B,
    quote:
      " Ltenetur odio fugit ea impedit orem ipsum dolor sit amet consectetur adipisicing elit.  ",
    author: "-Doe John ",
    postion: " Lorem ipsum, font-mono, font-mono",
  },
  {
    img: AVATAR_C,
    quote:
      "  Lamet consectetur adipisicing elit orem ipsum dolor sit amet consectetur adipisicing elit. tenetur odio fugit ea impedit  ",
    author: "-Doe John Doe",
    postion: "Lorem ipsum, font-mono, font-mono",
  },
];

export { Other_skils, skillsIcon, ProjectDetails, Nav_tags, Testimonials };
