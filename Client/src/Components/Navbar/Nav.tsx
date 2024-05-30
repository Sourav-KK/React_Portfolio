// import { AiOutlineClose, HiMenuAlt1 } from "@utils/React-icons";
import { useState } from "react";
import Logo from "@assets/new_logo.png";
import AnchorTag from "@utils/AnchorTag";
import Svg_Com from "./Svg";

const Nav = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const tittless = [
    {
      title: "About",
      id: "#aboutSection",
    },
    {
      title: "Skills",
      id: "#skillSection",
    },
    {
      title: "Projects",
      id: "#projectSection",
    },
    {
      title: "Contact",
      id: "#contactSection",
    },
  ];

  const handleClick = (link: string) => {
    const elementID = document.querySelector(link);
    elementID?.scrollIntoView({ behavior: "smooth" });
    return;
  };

  const openMenu = () => {
    setToggle(true);
    return;
  };

  const closeMenu = () => {
    setToggle(false);
    return;
  };

  return (
    <>
      <nav className="flex items-center justify-between p-3 lg:flex-row text-white font-mono">
        <div className="">
          <img
            src={Logo}
            alt="logo"
            className="h-20 w-20 hover:cursor-pointer hover:scale-105 hover:animate-pulse"
          />
        </div>
        <div className="space-x-4">
          <div className="ssm:hidden lg:block space-x-2 ">
            {tittless.map((elem, index) => (
              <AnchorTag
                link={elem.id}
                title={elem.title}
                key={index}
              />
            ))}
          </div>
          <div className="ssm:block lg:hidden">
            {toggle ? (
              <>
                <Svg_Com action={closeMenu} />
              </>
            ) : (
              <>
                <Svg_Com action={openMenu} />
              </>
            )}
          </div>
        </div>
      </nav>

      <div className="ssm:block lg:hidden ">
        {toggle && (
          <div className="flex justify-between ml-10 pt-4 border-t-2 border-b-2 w-[80%] p-2">
            <ul className="w-full">
              {tittless.map((elem, index) => (
                <li
                  key={index}
                  onClick={() => handleClick(elem.id)}
                  className="text-white hover:text-stone-600 text-xl mb-2 cursor-pointer hover:bg-slate-100 hover:bg-opacity-25 hover:rounded-md pl-2 transition duration-700 w-full"
                >
                  {elem.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
