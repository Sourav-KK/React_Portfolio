import { useState } from "react";
import { FaAnglesRight } from "../Utils/React-icons";

const Cards = () => {
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
  ]);

  const setHoverTrue = (index: number) => {
    setProjectDetails((prevDetails) =>
      prevDetails.map((val, i) => (i === index ? { ...val, state: true } : val))
    );
  };
  const setHoverFalse = (index: number) => {
    setProjectDetails((prevDetails) =>
      prevDetails.map((val, i) =>
        i === index ? { ...val, state: false } : val
      )
    );
  };

  const redirectWebsite = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="grid gap-3 justify-around p-10 grid-cols-1 lg:grid-cols-3 bg-cream-50">
      {projectDetails.map((project, index) => (
        <div
          className="grid grid-cols-1 gap-y-2 rounded-md p-2 bg-white min-h-fit"
          key={index}
          onMouseOver={() => setHoverTrue(index)}
          onMouseOut={() => setHoverFalse(index)}
        >
          {project.state ? (
            <div className="flex justify-center items-center ">
              <button
                type="button"
                className="btn rounded-md border-2 border-solid border-white p-2 bg-black text-white hover:scale-105 hover:bg-cream-50  hover:text-stone-800 hover:border-none"
                onClick={() => redirectWebsite(project.link)}
              >
                Visit website
                <FaAnglesRight />
              </button>
            </div>
          ) : (
            <div>
              <figure className="p-2 ">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="somthiung"
                  loading="lazy"
                  className="rounded-lg"
                />
              </figure>

              <div className="flex p-2">
                <h1 className="text-balance  font-mono text-left text-3xl font-bold text-stone-800 ">
                  {project.title}
                </h1>
              </div>

              <div className="flex p-2 border-t-2 border-black">
                <p className="font-mono text-stone-800">
                  {project.Description}
                </p>
              </div>

              <div className="flex flex-wrap flex-row items-start justify-start pl-2">
                {project.techs.map((lang, index) => (
                  <div
                    key={index}
                    className="badge badge-neutral mb-2 mr-2  text-black font-mono border-none bg-cream-100"
                  >
                    {lang}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cards;
