import React, { useEffect } from 'react';
import PageSec1 from './pageSec1';
import PageSec2 from './pageSec2';
import PageSec3 from './pageSec3';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './CSS/home.css';
import bgVideo2 from './ComponentAssets/bgvideo8.mp4';
import profPic from './ComponentAssets/profPic2.jpg';
import ProjectsShowcase from './projectsShowcase';

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
    <>
      <div data-scroll-container-home>
        <div className="homeCont">
          <video autoPlay muted loop id="myVideo" style={{ height: '100vh' }}>
            <source src={bgVideo2} type="video/mp4" />
          </video>{' '}
          <div className="overlayText">
            <h1 className="titleH1">Hey there! I'm Amey.</h1>
            <h3 className="titleH3">
              Programmer, Car Enthusiast, and a Student.
            </h3>
          </div>
        </div>
        <div className="HSec2Cont">
          <div className="Hsec2Cont2">
            <h1 className="HSec2H1">Hello. It's nice to have you here.</h1>
            <p className="Hsec2P">
              I'm Amey, a 15 year old student currently residing in Bengaluru,
              India. I love cars, programming, and cookies. As a result, this
              website is dedicated to all three of them.
              <br /> <br /> I've been programming for over four years now, yet
              I'm still grasping the mind-boggling possibilites it unravels. So,
              I have included other little projects I've completed through this
              ongoing exploration of computer science. In the future, I hope to
              develop innovative and impactful tech-projects which can make a
              difference in people's lives. If you'd like to contribute, let's
              talk.
              <br />
              <br /> I absolutely adored cars from a young age (and I still do).
              Hence, this website is car-themed. I have also curated an{' '}
              <i>imaginary/dream</i> car garage here, which houses all the cars
              I'd like to own one day. It is a testament to my enduring passion
              and enthusiasm towards automotives. Maybe one day, this dream will
              be satiated.
              <br /> <br />
              This website is completely hard-coded using React. Visit the{' '}
              <a
                href="https://github.com/AmeyVijeesh/PersonalWebsite"
                className="hSecHyperlink"
              >
                Github
              </a>{' '}
              repository for more details. I will be maintaining this website as
              I go, adding little bits and pieces to my portfolio as I continue
              through the winding path of learning and discovery. Have fun!
            </p>
          </div>
          <img
            src={profPic}
            alt="Handsome dude grinning at the camera :)"
            className="HSec2ProfPic"
          />
        </div>

        <div className="HSec3Cont">
          <h1 className="HSec3H1">My Projects.</h1>
          <p className="HSec3P">
            I've used React, HTML/CSS/JS, Python, and Swift for most of my
            projects. Visit my{' '}
            <a href="https://github.com/AmeyVijeesh" className="hSecHyperlink">
              Github
            </a>{' '}
            to view them all.
          </p>
          <ProjectsShowcase />
        </div>
      </div>
    </>
  );
};

export default Home;
