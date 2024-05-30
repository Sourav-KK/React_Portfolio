import { FaLinkedinIn, FaGithub } from "@utils/React-icons";

const Footer = () => {
  return (
    <div className="grid justify-center gap-y-4 bg-neutral-900 text-white py-7">
      <div className="flex justify-evenly">
        <a href="#" className="">
          <FaGithub size={25} className="hover:bg-neutral-700 rounded-md " />
        </a>

        <a href="#" className="">
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
