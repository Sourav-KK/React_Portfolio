import { FaLinkedinIn, FaGithub } from "@utils/React-icons";
import { GITHUB, STACKOVERFLOW } from "../Utils/Configs";
import { useEffect, useState } from "react";
import URLValidate from "Hooks/URL";

const Footer = () => {
  const [stack, setStack] = useState<boolean>(false);
  const [git, setGit] = useState<boolean>(false);

  useEffect(() => {
    setGit(URLValidate(GITHUB));
    setStack(URLValidate(STACKOVERFLOW));

    console.log("Git:", GITHUB);
    console.log("Staack:", STACKOVERFLOW);
  }, []);

  return (
    <div className="grid justify-center gap-y-4 bg-neutral-900 text-white py-7">
      <div className="flex justify-evenly">
        <a href={git ? GITHUB : "#"} className="">
          <FaGithub size={25} className="hover:bg-neutral-700 rounded-md " />
        </a>

        <a href={stack ? STACKOVERFLOW : "#"} className="">
          <FaLinkedinIn
            size={25}
            className="hover:bg-neutral-700 rounded-md "
          />
        </a>
      </div>
      <h5 className="text-xs font-light">© Copyright 2024 - soup_loop</h5>
    </div>
  );
};

export default Footer;
