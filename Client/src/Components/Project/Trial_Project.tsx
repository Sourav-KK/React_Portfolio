import { ProjectDetailsI } from "@utils/interfaces";
import URLValidate from "Hooks/URL";
import { useEffect, useState } from "react";

const Trial_Project = ({ item }: { item: ProjectDetailsI }) => {
  const [validURL, setValidURL] = useState(false);

  useEffect(() => {
    setValidURL(URLValidate(item.link));
  }, [item.link]);

  return (
    <div className="ag-courses_item">
      <a
        href={validURL ? item.link : "#"}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="ag-courses-item_link"
      >
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">{item.title} </div>

        <div className="ag-courses-item_date-box">
          {item.techs.map((tech, index) => (
            <span className="ag-courses-item_date" key={index}>
              {tech},{" "}
            </span>
          ))}
        </div>
      </a>
    </div>
  );
};

export default Trial_Project;
