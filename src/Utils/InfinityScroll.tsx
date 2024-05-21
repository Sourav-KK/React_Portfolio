import {
  IoLogoJavascript,
  FaNode,
  IoLogoReact,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiJquery,
  SiTailwindcss,
  FaGitAlt,
  FaNpm,
  SiPostman,
  SiRedux,
  TiHtml5,
  SiCss3,
  FaBootstrap,
  BiLogoPostgresql,
  FaGithub,
} from "../Utils/React-icons";
import { Other_skils } from "./Constants";

const InfinityScroll = ({ ariaVal }: { ariaVal: boolean }) => {
  const skillsIcons = [
    { Icon: SiMongodb, Title: "MongoDB" },
    { Icon: SiExpress, Title: "Express.js" },
    { Icon: IoLogoReact, Title: "React" },
    { Icon: FaNode, Title: "Node.js" },
    { Icon: IoLogoJavascript, Title: "Javascript" },
    { Icon: SiTypescript, Title: "TypeScript" },
    { Icon: TiHtml5, Title: "HTML 5" },
    { Icon: SiCss3, Title: "CSS 3" },
    { Icon: SiTailwindcss, Title: "TailwindCSS" },
    { Icon: FaBootstrap, Title: "Bootstrap" },
    { Icon: BiLogoPostgresql, Title: "PostgreSQL" },
    { Icon: SiJquery, Title: "JQuery" },
    { Icon: FaGitAlt, Title: "Git" },
    { Icon: FaNpm, Title: "Npm" },
    { Icon: SiPostman, Title: "Postman" },
    { Icon: SiRedux, Title: "Redusx/Redux-Tooolkit" },
    { Icon: FaGithub, Title: "Github" },
  ];
  return (
    <ul
      className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      aria-hidden={ariaVal}
    >
      {Other_skils.map((elem, index) => (
        <>
          <li key={index}>
            <elem.Icon
              title={elem.Title}
              size={40}
              color="#eeeee4"
              className={`hover:scale-105`}
            />
          </li>
          <li className="text-sm font-mono font-light text-clip text-white">
            {elem.Title}
          </li>
        </>
      ))}
    </ul>
  );
};

export default InfinityScroll;
