import Skill_Scroll from "./Skill_Scroll";
import { skillsIcon } from "@utils/Constants";

const Real_Skills = () => {
  return (
    <section id="skillSection" className="h-screen">
      <div
        className="bg-sky-800 p-10 md:p-20 gap-y-5 flex justify-center flex-col "
        id="skillSection"
      >
        <div className="flex justify-center items-center">
          <h2 className="text-yellow-50 uppercase p-3 font-mono text-3xl text-center font-semibold">
            SKILLS
          </h2>
        </div>
        <div className="grid grid-cols-2 grid-row-3 md:grid-cols-8 gap-4 md:gap-2">
          {skillsIcon.map((skill, index) => (
            <div
              key={index}
              className="flex justify-center hover:scale-105 flex-col items-center bg-sky-900 p-2 md:p-4 rounded-lg"
            >
              <skill.Icon
                title={skill.Title}
                size={40}
                color="#eeeee4"
                className="size-10"
              />
              <p className="font-mono text-white text-base md:text-lg">
                {skill.Title}
              </p>
            </div>
          ))}
        </div>

        <Skill_Scroll />
      </div>
    </section>
  );
};

export default Real_Skills;
