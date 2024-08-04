import React, { useEffect } from 'react';
import PageSec1 from './pageSec1';
import PageSec2 from './pageSec2';
import PageSec3 from './pageSec3';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './CSS/home.css';
import bgVideo2 from './ComponentAssets/bgvideo8.mp4';

const Home = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container-home]'),
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container-home>
      <div className="homeCont">
        <video autoPlay muted loop id="myVideo" style={{ height: '100vh' }}>
          <source src={bgVideo2} type="video/mp4" />
        </video>{' '}
        <div className="overlayText">
          <h1 className="titleH1">Hey there! I'm Amey.</h1>
          <h3 className="titleH3">
            Student, Programmer, and a Car Enthusiast.
          </h3>
        </div>
      </div>
      <div style={{ height: '100vh' }}>
        <h1>hi</h1>
      </div>
    </div>
  );
};

export default Home;
