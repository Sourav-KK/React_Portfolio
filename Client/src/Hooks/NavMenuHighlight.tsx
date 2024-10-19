import { useEffect, useState } from "react";

const useNavMenuHighlight = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    //  evente listening to scroll action
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const handleScroll = () => {
    const allSections = document.querySelectorAll("section"); // secting all section
    // const navLi = document.querySelectorAll("nav ul li");

    allSections.forEach((section) => {
      // distance from the top of the window to the top of the section
      const sectionTop = section.offsetTop;

      //   height of section
      const sectionHeight = section.clientHeight;

      //   to get the id of the current section
      if (scrollY >=( sectionTop - sectionHeight / 2)) {
        setActiveSection(section.getAttribute("id"));
      }
    });

    // navLi.forEach((li) => {
    //   li.classList.remove("active");
    //   if (li.classList.contains(activeSection)) {
    //     li.classList.add("active");
    //   }
    // });

    console.log("activeSection:", activeSection);
  };

  return { handleScroll, activeSection };
};

export default useNavMenuHighlight;
