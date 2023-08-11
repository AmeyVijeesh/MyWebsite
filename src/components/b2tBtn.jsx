import React, { useState, useEffect } from "react";
import "./CSS/b2tbtn.css";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollThreshold = windowHeight * 0.7;

    setShowButton(scrollY > scrollThreshold);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`backToTopButton ${showButton ? "show" : ""}`} {/*Find a better method later*/}
      onClick={handleBackToTop}
    >
      Back to Top
    </button>
  );
};

export default BackToTopButton;
