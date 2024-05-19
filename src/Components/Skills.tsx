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

const Skills = () => {
  const skillsIcon = [
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
    <div className="bg-stone-700 h-36 p-2 flex justify-between place-items-center w-full">
      {skillsIcon.map((skill, index) => (
        <div
          key={index}
          className="flex justify-center hover:animate-pulse hover:scale-125"
        >
          <skill.Icon title={skill.Title} size={40} color="#eeeee4" />
        </div>
      ))}
    </div>
  );
};

export default Skills;
