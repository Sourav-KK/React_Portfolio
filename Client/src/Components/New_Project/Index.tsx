import { useState } from "react";
import { ProjectArr } from "@utils/Constants";
import Heading from "./Heading";
import Website_btn from "./Website_btn";
import Proj_Description from "./Proj_Description";
import Proj_title from "./Proj_title";
import Proj_lang from "./Proj_lang";

interface ProjectArrI {
  title: string;
  link: string;
  Description: string;
  techs: string[];
  state: boolean;
}

const Sample = () => {
  const [projectDetails, setProjectDetails] =
    useState<ProjectArrI[]>(ProjectArr);

  return (
    <div className="grid grid-cols-1 pl-20 pr-20 pb-10 gap-y-8 bg-golden-100">
      <Heading />
      <div className="grid grid-cols-1 md:grid-cols-3 place-content-evenly gap-4">
        {projectDetails.map((item, index) => (
          <div
            className="grid grid-cols-1 w-1/2 md:w-5/6 gap-y-2 rounded-lg hover:shadow-2xl p-4 bg-slate-50"
            key={index}
          >
            <Proj_title title={item.title} />

            <Proj_Description Description={item.Description} />

            <Proj_lang techs={item.techs} />

            <Website_btn />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sample;
