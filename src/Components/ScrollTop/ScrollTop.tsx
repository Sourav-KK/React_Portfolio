import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

import "@styles/GoToTop.css";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const handleVisibleButton = () => {
    if (window.scrollY > 300) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
    return () => window.removeEventListener("scroll", handleVisibleButton);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <FaAngleUp
          className="icon-position icon-style"
          onClick={goToTop}
          title="Go Top"
        />
      )}
    </div>
  );
};
export default ScrollToTop;
