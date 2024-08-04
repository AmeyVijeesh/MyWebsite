import React, { useState, useEffect, useRef } from 'react';
import bgVideo from './ComponentAssets/bgvideo8.mp4';
import { motion, useScroll, useTransform } from 'framer-motion';
import './CSS/pageSec1.css';
import pic from './ComponentAssets/pic.jpg';
import photo from './ComponentAssets/photo.png';

const PageSec1 = () => {
  return (
    <div>
      <div>
        <div className="fixed-text-container2">
          <h2 className="fixed-text2">ameyvijeesh@gmail.com</h2>
        </div>
        <div>
          <div className="video-wrapper">
            <video autoPlay loop muted className="bg-video">
              <source src={bgVideo} type="video/mp4" />
              Your browser does not support the video tag. It would be better to
              view this website with an upgraded browser.
            </video>
          </div>
        </div>
        <section>
          <div id="home-text">
            <h1 className="titleText animatedHoverH1">Hello there! I'm Amey</h1>
            <h4>Programmer, Car Enthusiast, and an Avid Reader</h4>
          </div>
        </section>
        <section>
          <div className="content">
            <center>
              <div className="aboutDiv">
                <h2>I'm Amey</h2>
                <div className="aboutContent">
                  <div className="aboutText">
                    <p>
                      Hey there! I'm Amey, a 15 year old currently residing in
                      the sprawling cityscapes of Bengaluru, India. I'm very
                      passionate about cars, and therefore, this website is
                      car-themed. Programming serves as one of my main hobbies,
                      and a close second comes reading. I am also a fan of
                      exploring new realms in real life, in books, and in
                      technology. I am also drawn to architectural designs,
                      creating creative buildings and living spaces.
                    </p>
                    <p>
                      I have also made my own imaginary car garage, right in
                      this website. Yet, it remains a wistful dream to own these
                      machines, but one day, I shall.
                    </p>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </section>

        <div className="fixed-text-container">
          <h2 className="fixed-text">Scroll</h2>
        </div>
      </div>
    </div>
  );
};

export default PageSec1;
