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

// for navbar
const AnchorStyle: string =
  "text-white hover:bg-sky-400 rounded-full px-5 py-2 text-xl transition-colors delay-800 ease-in ";

const ProjectArr = [
  {
    title: "URL Shortner",
    link: "sdsd",
    Description: "A backend work to shorten lenghty URLs",
    techs: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    state: false,
  },
  {
    title: "User Management",
    link: "sdsd",
    Description: "A interface to mointer & track users and their roles.",
    techs: [
      "Node.js",
      "React",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Redux-Toolkit",
    ],
    state: false,
  },
  {
    title: "Netflix Clone",
    link: "sdsd",
    Description:
      "A clone of the Netflix website using React by integrating API's",
    techs: ["React", "Hooks", "APIs"],
    state: false,
  },
  {
    title: "Volta Ecommerce",
    link: "sdsd",
    Description: "Ecommerce website using Node.js",
    techs: ["Node.js", "MongoDB", "Mongoose", "EJS", "Express.js"],
    state: false,
  },
  {
    title: "Todo",
    link: "sdsd",
    Description: "A simple Todo webapp using React",
    techs: ["React", "Hooks", "APIs"],
    state: false,
  },
];

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
export { AnchorStyle, ProjectArr, Other_skils };
