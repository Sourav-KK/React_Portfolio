import { ProjectDetails } from "@utils/Constants";
import "Style/project.css";
import Trial_Project from "./Trial_Project";

const ProjectTrial = () => {
  return (
    <section id="projectSection">
      <div className="flex justify-center place-content-center">
        <div className="ag-format-container">
          <p className="project-title text-zinc-800">PROJECTS</p>
          <div className="ag-courses_box">
            {ProjectDetails.map((item, index) => (
              <Trial_Project key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTrial;
