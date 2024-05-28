import { FaLinkedinIn, FaGithub } from "@utils/React-icons";

const Footer = () => {
  return (
    <div className="grid justify-center gap-y-4 bg-neutral-900 text-white py-7">
      <div className="flex justify-evenly">
        <a href="#">
          <FaGithub size={25} />
        </a>

        <a href="#">
          <FaLinkedinIn size={25} />
        </a>
      </div>
      <h5 className="text-xs font-light">© Copyright 2024 - soup_loop</h5>
    </div>
  );
};

export default Footer;
