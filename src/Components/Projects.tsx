import { useState } from "react";
import { FaAnglesRight } from "../Utils/React-icons";

const Projects = () => {
  const [projectDetails, setProjectDetails] = useState([
    {
      title: "URL Shortner",
      link: "sdsd",
      Description: "Long URL's shortned using React, Express.js & MongoDB",
      state: false,
    },
    {
      title: "User Management",
      link: "sdsd",
      Description: "Managing user roles using React, Express.js & MongoDB",
      state: false,
    },
    {
      title: "Netflix Clone",
      link: "sdsd",
      Description: "A clone of Netflix using React, Hooks & APIs",
      state: false,
    },
    {
      title: "Volta Ecommerce",
      link: "sdsd",
      Description: "Ecommerce website using Node.js, Express.js & MongoDB",
      state: false,
    },
    {
      title: "Todo",
      link: "sdsd",
      Description: "Todo using React",
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

  function redirectToWebsite(index: number) {
    for (let i = 0; i < projectDetails.length; i++) {
      if (i === index) {
        const projectLink = projectDetails[i].link;
        window.open(projectLink, "_blank");
      }
    }
  }

  return (
    <div className="bg-blue-950 rounded-md m-20 max-w-full">
      <div className="grid justify-items-center m-10 gap-y-2">
        <h1 className="text-3xl text-stone-700 mt-10">Projects</h1>
        <h1>
          Here are some of the hard worked project. Visit my
          <a href="#" className="underline text-blue-400 hover:text-blue-700">
            {" "}
            Github{" "}
          </a>
          to see more{" "}
        </h1>
        <p>❤ Dont forget to support me ❤</p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 p-5 gap-7 ">
        {projectDetails.map((project, index) => (
          <div
            className={` transition-all ease-in-out duration-700 h-36 border-2 rounded-lg border-cyan-600 p-3 flex justify-center
              ${project.state ? "bg-red-400" : "bg-slate-400"}`}
            onMouseEnter={() => truthy(index)}
            onMouseLeave={() => falsey(index)}
            key={index}
          >
            {project.state ? (
              <div
                className={`grid grid-cols-1 content-center gap-y-4 justify-items-center w-3/4`}
              >
                <p className={`text-center`}>{project.Description}</p>
                <button
                  type="button"
                  className="bg-transparent border-2 rounded-lg border-cyan-600 p-3 flex justify-around items-center w-4/6  hover:bg-tatti transition-colors duration-500 ease-linear"
                  onClick={() => redirectToWebsite(index)}
                >
                  Visit Website
                  <FaAnglesRight className="flex place-content-center" />
                </button>
              </div>
            ) : (
              <div className="flex justify-center place-items-center w-8/12">
                <h1 className="w-full text-center">{project.title}</h1>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
