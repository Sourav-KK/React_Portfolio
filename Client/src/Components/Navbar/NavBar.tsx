import Logo from "@assets/new_logo.png";
import Svg_Com from "./Svg";
import "../../Style/navStyle.css";
import DarkModeToggle from "./DarkModeToggle";
import NavMenu from "./NavMenu";

const NavBar = ({
  toggleMenu,
  toggle,
}: {
  toggle: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <nav className="flex justify-between p-6 flex-col">
      <div className="flex justify-between w-[100%]">
        <picture>
          <img
            src={Logo}
            alt="logo"
            className="size-14 md:size-20 hover:cursor-pointer"
          />
        </picture>

        <ul className="md:flex justify-center place-items-center space-x-4 font-mono font-semibold text-center text-xl text-slate-100 hidden">
          <NavMenu />
          <li className="flex justify-center place-items-center">
            <DarkModeToggle />
          </li>
        </ul>

        <div className="flex md:hidden ">
          <input
            type="checkbox"
            name="hamToggle"
            id="hamToggle"
            checked={toggle}
            onChange={toggleMenu}
          />

          <label htmlFor="hamToggle">
            <Svg_Com action={toggleMenu} />
          </label>
        </div>
      </div>

      {toggle && (
        <div className={`navDropBar ${toggle ? "open" : ""}`}>
          <ul >
            <NavMenu />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
