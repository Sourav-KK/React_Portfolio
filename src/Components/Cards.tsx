import React, { useState } from "react";

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
  const redirectWebsite = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <div className="grid gap-3 justify-around p-10 grid-cols-1 md:grid-cols-3 md:gap-3 ">
      {projectDetails.map((project, index) => (
        <div className="card w-5/6 bg-base-100 shadow-xl" key={index}>
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{project.title}</h2>
            <p>{project.Description}</p>
            <div className="card-actions justify-end">
              {project.techs.map((techno, index) => (
                <div className="badge badge-outline flex" key={index}>
                  {techno}
                </div>
              ))}
            </div>
            <div className="card-actions">
              <button
                className="btn btn-primary"
                onClick={() => redirectWebsite("sdkl")}
              >
                Visit Website
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
