import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PageSec2 = () => {
  const { scrollYProgress } = useScroll();

  const x1 = useTransform(
    scrollYProgress,
    [0, 1],
    [
      window.innerWidth >= 1400 ? 1500 : 500,
      window.innerWidth >= 1400 ? 100 : 0,
    ]
  );
  const x2 = useTransform(
    scrollYProgress,
    [0, 1],
    [
      window.innerWidth >= 1400 ? 100 : 0,
      window.innerWidth >= 1400 ? 1500 : 500,
    ]
  );

  return (
    <>
      <div>
        <div className="moving-text-container" style={{ overflowX: 'hidden' }}>
          <motion.div className="moving-text" style={{ x: x1 }}>
            <h1 className="movingText">I like CARS</h1>
          </motion.div>
          <motion.div className="moving-text" style={{ x: x2 }}>
            <h1 className="movingText">I like PROGRAMMING</h1>
          </motion.div>
          <motion.div className="moving-text" style={{ x: x1 }}>
            <h1 className="movingText">I like COOKIES</h1>
          </motion.div>
          <motion.div className="moving-text" style={{ x: x2 }}>
            <h1 className="movingText">I like READING</h1>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PageSec2;
