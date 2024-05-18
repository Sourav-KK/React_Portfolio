// import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import Logo from "../assets/canvajps-removebg-preview.png";
import AnchorTag from "../Utils/AnchorTag";

const Nav = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const anchorStyle: string =
    "text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl transition-colors delay-800 ease-in";

  const titleArr = ["About", "Skills", "Projects", "Extras", "Contact"];
  const openMenu = () => {
    setToggle(true);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <>
      <nav className="flex items-center justify-between p-3 lg:flex-row text-white ">
        <div className="div">
          <img
            src={Logo}
            alt="logo"
            className="h-16 w-16 hover:cursor-pointer"
          />
        </div>
        <div className="space-x-4">
          <div className="ssm:hidden lg:block space-x-2 ">
            {titleArr.map((elem, index) => (
              <AnchorTag
                link="#"
                style={anchorStyle}
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
