import {
  FaNode,
  IoLogoReact,
  SiExpress,
  SiMongodb,
  IoLogoJavascript,
  SiTypescript,
  BiLogoPostgresql,
} from "../Utils/React-icons";
import Skill_Scroll from "./Skill_Scroll";
const Real_Skills = () => {
  const skillsIcon = [
    { Icon: SiMongodb, Title: "MongoDB" },
    { Icon: SiExpress, Title: "Express.js" },
    { Icon: IoLogoReact, Title: "React" },
    { Icon: FaNode, Title: "Node.js" },
    { Icon: IoLogoJavascript, Title: "Javascript" },
    { Icon: SiTypescript, Title: "TypeScript" },
    { Icon: BiLogoPostgresql, Title: "PostgreSQL" },
  ];
  return (
    <div className="bg-sky-800 pt-20 pl-20 pr-20 pb-20 gap-y-5 flex justify-center flex-col">
      <div className="flex justify-center items-center">
        <h2 className="text-yellow-50 uppercase p-3 font-mono text-3xl text-center font-semibold">
          SKILLS
        </h2>
      </div>
      <div className="flex justify-evenly flex-wrap">
        {skillsIcon.map((skill, index) => (
          <div
            key={index}
            className="flex justify-center hover:scale-105 flex-col items-center bg-sky-900 p-6 rounded-lg"
          >
            <skill.Icon title={skill.Title} size={40} color="#eeeee4" />
            <p className="font-mono text-white">{skill.Title}</p>
          </div>
        ))}
      </div>

      <>
        <Skill_Scroll />
      </>
    </div>
  );
};

export default Real_Skills;
