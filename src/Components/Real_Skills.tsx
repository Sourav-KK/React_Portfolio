import {
  FaNode,
  IoLogoReact,
  SiExpress,
  SiMongodb,
  IoLogoJavascript,
  SiTypescript,
  BiLogoPostgresql,
} from "../Utils/React-icons";
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
    <div className="bg-sky-800">
      <div className="sdlk">
        <h2 className="text-yellow-50 font-sans text-center text-xl underline font-semibold p-4">
          {" "}
          SKILLS
        </h2>
        <div className="flex justify-evenly">
          {skillsIcon.map((skill, index) => (
            <div
              key={index}
              className="flex justify-center hover:animate-pulse hover:scale-125"
            >
              <skill.Icon title={skill.Title} size={40} color="#eeeee4" />
            </div>
          ))}
        </div>
      </div>

      <div className="sdf"></div>
    </div>
  );
};

export default Real_Skills;
