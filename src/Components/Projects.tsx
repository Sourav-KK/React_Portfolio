import { useState } from "react";
import { FaAnglesRight } from "../Utils/React-icons";

const Projects = () => {
  const [projectDetails, setProjectDetails] = useState([
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
        "Redux Toolkit",
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
  ]);

  function truthy(index: number) {
    setProjectDetails((prevDetails) =>
      prevDetails.map((project, i) =>
        i === index ? { ...project, state: true } : project
      )
    );
  }

  function falsey(index: number) {
    setProjectDetails((prevDetails) =>
      prevDetails.map((project, i) =>
        i === index ? { ...project, state: false } : project
      )
    );
  }

  function redirectToWebsite(link: string) {
    window.open(link, "_blank");
  }

  return (
    <div className="bg-cream-50 rounded-md  max-w-full">
      <div className="grid justify-items-center  gap-y-2">
        <h1 className="text-3xl text-stone-700 mt-10 uppercase p-3 font-mono font-bold">
          Projects
        </h1>
        <h1 className="text-center font-mono">
          For a broader showcase of my work, please visit my
          <a href="#" className="underline text-blue-400 hover:text-blue-700">
            {" "}
            Github{" "}
          </a>
          profile.
        </h1>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 p-5 pl-20 pr-20 pb-20 gap-7 ">
        {projectDetails.map((work, index) => (
          <div className="grid grid-rows-2 p-4 h-auto rounded-lg bg-gray-50 shadow-2xl border-b-2 border-sky-800">
            {work.state ? (
              <div
                key={index}
                className="grid grid-rows-2 row-span-2 gap-1"
                onMouseLeave={() => falsey(index)}
              >
                <div className="flex font-mono ">
                  <p className="">{work.Description}</p>
                </div>
                <div
                  className="flex justify-center items-center"
                  onClick={() => redirectToWebsite(work.link)}
                >
                  <button
                    type="button"
                    className="flex justify-self-stretch w-34 border-4 border-cream-50 rounded-2xl p-2 font-mono text-sm hover:bg-cream-50 transition-colors duration-500 ease-in-out"
                  >
                    Visit site
                    <FaAnglesRight className="grid self-center" />
                  </button>
                </div>
              </div>
            ) : (
              <div
                className={`grid grid-cols-1 gap-2 hover:cursor-pointer row-span-2 h-32`}
                onMouseEnter={() => truthy(index)}
              >
                <div className={`  `}>
                  <h1 className="text-center">{work.title}</h1>
                </div>
                <div className="grid grid-cols-3 gap-1 text-sm font-mono h-10">
                  {work.techs.map((tech, index) => (
                    <p
                      className="bg-cream-50 p-1 rounded-lg text-center"
                      key={index}
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            )}{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
