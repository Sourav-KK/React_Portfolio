import { Linkedin } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="grid justify-center gap-y-4 bg-gray-900 text-white py-7">
      <div className="flex justify-evenly">
        <a href="#">
          <FaGithub size={25} />
        </a>

        <a href="#">
          <Linkedin size={25} />
        </a>
      </div>
      <h5 className="text-xs font-light">© Copyright 2024 - soup_loop</h5>
    </div>
  );
};

export default Footer;
