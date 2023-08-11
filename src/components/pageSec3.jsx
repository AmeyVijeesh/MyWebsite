import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CSS/pageSec3.css";
import myPhoto from "./ComponentAssets/photo.png";

const PageSec3 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div style={{ marginTop: "3%" }}>
      <h1 className="introTitle">Welcome to My Website</h1>
      <div className="containerDiv">
        <div className="cotent">
          <motion.p
            className="introParagraph"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            Hello there! I'm Amey Vijeesh, a 13-year-old individual currently
            residing in the sprawling cityscapes of Bangalore, India. I am very
            deeply passionate about cars, hence this website is car-themed.
            Programming serves as one of my main hobbies, and a close second
            comes reading. I am also a fan of exploring new realms in real life,
            in books, and in technology. I am also drawn to architectural
            designs, creating creative buildings and living spaces. I mainly
            program in Python, Javascript, HTML/CSS, and sometimes in Java and
            Swift. Learn more about me through this website I curated for
            myself.
          </motion.p>
          {isHovered && (
            <div className="side-image" onMouseLeave={handleMouseLeave}>
              {/*Little easter egg :-)*/}
              <motion.img
                src={myPhoto}
                alt="Amey's Photo. He looks very good."
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default PageSec3;
