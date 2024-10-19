import { Nav_tags } from "@utils/Constants";
import DarkModeToggle from "./DarkModeToggle";

const Nav_Lists = () => {
  const goToSection = (sectionID: string) => {
    const elem = document.getElementById(sectionID);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul className="md:flex justify-around space-x-2 font-mono text-xl ssm:hidden ">
      {Nav_tags.map((link) => (
        <li className="flex justify-center" key={link.key}>
          <a
            className="text-white hover:text-slate-300 cursor-pointer rounded-full px-5 py-2 text-xl transition-colors ease-in"
            onClick={() => goToSection(link.id)}
          >
            {link.title}
          </a>
        </li>
      ))}
      <li className="flex justify-center place-items-center">
        <DarkModeToggle />
      </li>
    </ul>
  );
};

export default Nav_Lists;
