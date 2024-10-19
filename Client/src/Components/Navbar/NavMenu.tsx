import { Nav_tags } from "@utils/Constants";
import useNavMenuHighlight from "Hooks/NavMenuHighlight";

const NavMenu = () => {
  const goToSection = (sectionID: string) => {
    const elem = document.getElementById(sectionID);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  const { activeSection } = useNavMenuHighlight();

  return (
    <>
      {Nav_tags.map((item) => (
        <li
          className={`${item.id === activeSection ? "active" : ""}`}
          key={item.key}
        >
          <a
            className="text-white hover:bg-cyan-300 hover:text-slate-600 cursor-pointer rounded-full px-5 py-2 text-xl transition-colors ease-in text-center"
            onClick={() => goToSection(item.id)}
          >
            {item.title}
          </a>
        </li>
      ))}
    </>
  );
};

export default NavMenu;
