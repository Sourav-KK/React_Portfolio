import Hero from "./Hero/Hero";
import NavBar from "./Navbar/NavBar";
import { useState } from "react";
import "../Style/navStyle.css";

const Nav_Hero = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleMenu = () => {
    setToggle((prevVal) => !prevVal);
  };

  return (
    <section
      className="bg-gradient-to-b from-cyan-600 via-teal-400 to-indigo-700 scrollbar-none"
      id="homeSection"
    >
      <NavBar toggleMenu={toggleMenu} toggle={toggle} />

      <Hero />
    </section>
  );
};

export default Nav_Hero;
