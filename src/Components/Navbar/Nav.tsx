// import { AiOutlineClose, HiMenuAlt1 } from "@utils/React-icons";
import { useState } from "react";
import Logo from "../../assets/new_logo.png";
import AnchorTag from "@utils/AnchorTag";
import { AnchorStyle } from "@utils/Constants";
import Svg_Com from "./Svg";

const Nav = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const titleArr = ["About", "Skills", "Projects", "Extras", "Contact"];
  const openMenu = () => {
    setToggle(true);
  };

  const closeMenu = () => {
    setToggle(false);
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
            {titleArr.map((elem, index) => (
              <AnchorTag
                link="#"
                style={AnchorStyle}
                title={elem}
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

      <div className="ssm:block lg:hidden">
        {toggle && (
          <div className="flex justify-between ml-10 pt-4 border-t-2 border-b-2 w-[80%] p-2">
            <ul className="w-full">
              <li className="text-white  hover:text-stone-600 text-xl mb-2 cursor-pointer hover:bg-slate-100 hover:bg-opacity-25 hover:rounded-md pl-2 transition duration-700 w-full">
                Home
              </li>
              <li className="text-white hover:text-stone-600 text-xl mb-2 cursor-pointer hover:bg-slate-100 hover:bg-opacity-25 hover:rounded-md pl-2 transition duration-700 w-full">
                About
              </li>
              <li className="text-white hover:text-stone-600 text-xl mb-2 cursor-pointer hover:bg-slate-100 hover:bg-opacity-25 hover:rounded-md pl-2 transition duration-700 w-full">
                Skills
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
