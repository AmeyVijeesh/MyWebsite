import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss'; // Import Locomotive Scroll styles
import './test.css';

const Test = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-containera]'),
      smooth: true,
    });

    scroll.on('scroll', (args) => {
      const h1 = document.querySelector('h1');
      if (h1) {
        const scrollY = args.scroll.y; // Get vertical scroll position
        h1.style.transform = `translateX(${scrollY}px)`; // Adjust horizontal position
      }
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-containera className="c">
      <h1>Your Heading Here</h1>
    </div>
  );
};

export default Test;
