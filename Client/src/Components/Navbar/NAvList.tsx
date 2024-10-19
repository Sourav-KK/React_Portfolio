import { Nav_tags } from "@utils/Constants";
import DarkModeToggle from "./DarkModeToggle";

const NAvList = () => {
  const handleClick = (id: string) => {
    const elementID = document.querySelector(id);

    elementID?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="ssm:hidden lg:block space-x-2 ">
      {Nav_tags.map((elem, index) => (
        <a
          key={index}
          onClick={() => handleClick(elem.id)}
          className="text-white hover:text-slate-300 cursor-pointer rounded-full px-5 py-2 text-xl transition-colors ease-in"
        >
          {elem.title}
        </a>
      ))}

      <DarkModeToggle />
    </div>
  );
};

export default NAvList;
