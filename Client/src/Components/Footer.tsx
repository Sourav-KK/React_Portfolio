import { FaLinkedinIn, FaGithub } from "@utils/React-icons";
import { GITHUB, LINKEDIN } from "../Utils/Configs";
import { useEffect, useState } from "react";
import URLValidate from "Hooks/URL";

const Footer = () => {
  const [linked, setLinked] = useState<boolean>(false);
  const [git, setGit] = useState<boolean>(false);

  useEffect(() => {
    setGit(URLValidate(GITHUB));
    setLinked(URLValidate(LINKEDIN));
  }, [linked, git]);

  return (
    <div className="grid justify-center gap-y-4 bg-neutral-900 text-white py-7">
      <div className="flex justify-evenly">
        <a
          href={git ? GITHUB : "#"}
          className=""
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <FaGithub size={25} className="hover:bg-neutral-700 rounded-md " />
        </a>

        <a href={linked ? LINKEDIN : "#"} className="">
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
