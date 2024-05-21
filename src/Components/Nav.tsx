// import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import Logo from "../assets/removeBG.png";
import AnchorTag from "../Utils/AnchorTag";
import { AnchorStyle } from "../Utils/Constants";

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
                // style={AnchorStyle}
                style={AnchorStyle}
                title={elem}
                key={index}
              />
            ))}
          </div>
          <div className="ssm:block lg:hidden">
            {toggle ? (
              <AiOutlineClose
                size={30}
                className="text-white cursor-pointer"
                onClick={closeMenu}
              />
            ) : (
              <HiMenuAlt1
                size={30}
                className="text-white cursor-pointer"
                onClick={openMenu}
              />
            )}
          </div>
        </div>
      </nav>

      <div className="ssm:block lg:hidden">
        {toggle && (
          <div className="flex justify-between ml-10">
            <ul>
              <li className="text-white hover:bg-indigo-800 text-xl mb-2 cursor-pointer">
                Home
              </li>
              <li className="text-white hover:bg-indigo-800 text-xl mb-2 cursor-pointer">
                About
              </li>
              <li className="text-white hover:bg-indigo-800 text-xl mb-2 cursor-pointer">
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
