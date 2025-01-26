import React from 'react';
import img from './ComponentAssets/trimg2.png';
import {
  faLinkedin,
  faGithub,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './about.css';
import FavoriteItemsShowcase from './favoriteItemsShowcase';
import LanguageShowcase from './languagesShowcase';
import { NavLink } from 'react-router-dom';
import useLocomotiveScroll from './useLocomotiveScroll';

const About = () => {
  useLocomotiveScroll();

  return (
    <>
      <div data-scroll-container style={{ backgroundColor: '#000' }}>
        <div className="diva2">
          <button className="bttn2"></button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="aboutCont">
            <div className="profContainer">
              <h1 style={{ textWrap: 'nowrap' }} className="abouth1">
                Hello, <br />
                I'm Amey Vijeesh
              </h1>
              <img src={img} alt="" className="profPic" />
              <div style={{ textAlign: 'left' }}>
                <h4 className="abouth2">I am a</h4>
                <h2 className="aboutp">Programmer</h2>{' '}
                <h2 className="aboutp">Car Enthusiast</h2>
                <h2 className="aboutp">Reader</h2>
              </div>
            </div>
          </div>
        </div>
        <h1 className="absech1">About Me.</h1>

        <div className="absecCont">
          <div className="absech2div">
            <h2
              data-scroll
              className="absech2"
              data-scroll-direction="horizontal"
              data-scroll-speed="-15"
              data-scroll-class="appear"
              data-scroll-repeat="true"
            >
              I'm a 15 year old student, currently residing in Bengaluru, India.
            </h2>
            <h2
              data-scroll
              className="absech2"
              data-scroll-direction="horizontal"
              data-scroll-speed="-15"
              data-scroll-class="appear"
              data-scroll-repeat="true"
            >
              I'm a fully self-taught developer, and programming is one of my
              primary hobbies.
            </h2>
          </div>
          <div className="absech2div2">
            <h2
              data-scroll
              className="absech2"
              data-scroll-direction="horizontal"
              data-scroll-speed="15"
              data-scroll-class="appear"
              data-scroll-repeat="true"
            >
              I've been programming for the past four years and am still
              discovering its incredible possibilities.
            </h2>
            <h2
              data-scroll
              className="absech2"
              data-scroll-direction="horizontal"
              data-scroll-speed="15"
              data-scroll-class="appear"
              data-scroll-repeat="true"
            >
              So far, I have experimented with web development, app UI/UX,
              desktop-app development, etc.
            </h2>
          </div>
          <div className="absech2div">
            <h2
              data-scroll
              className="absech2"
              data-scroll-direction="horizontal"
              data-scroll-speed="-15"
              data-scroll-class="appear"
              data-scroll-repeat="true"
            >
              I'm actively working on improving my skills in data science and
              ML, as well as using technologies such as Figma and Tensorflow.
            </h2>
            <h2
              data-scroll
              className="absech2"
              data-scroll-direction="horizontal"
              data-scroll-speed="-15"
              data-scroll-class="appear"
              data-scroll-repeat="true"
            >
              One of my long-term goals is to contribute to impactful tech
              projects that can make a difference in people's lives.
            </h2>
          </div>
          <br /> <br />
          <div className="absech2div">
            {' '}
            <h2
              data-scroll
              className="absech2"
              data-scroll-direction="horizontal"
              data-scroll-speed="15"
              data-scroll-class="appear"
              data-scroll-repeat="true"
            >
              Aside from programming, I am a huge car enthusiast.
            </h2>{' '}
            <h2
              data-scroll
              className="absech2"
              data-scroll-direction="horizontal"
              data-scroll-speed="15"
              data-scroll-class="appear"
              data-scroll-repeat="true"
            >
              I love delving into the intricacies of cars, reading and curating
              car reviews, and indulging in some exotic car spotting.
            </h2>
          </div>{' '}
          <div className="absech2div">
            <h2
              data-scroll
              className="absech2"
              data-scroll-direction="horizontal"
              data-scroll-speed="-15"
              data-scroll-class="appear"
              data-scroll-repeat="true"
            >
              I am also an ardent follower of football, a great cookie consumer,
              and an avid reader who loves diving into the world of words.
            </h2>
            <h2
              data-scroll
              className="absech2"
              data-scroll-direction="horizontal"
              data-scroll-speed="-15"
              data-scroll-class="appear"
              data-scroll-repeat="true"
            >
              I also adore reading and contributing to forums such as
              StackOverflow and Team-BHP.
            </h2>
          </div>
          <div className="absech2div">
            <h2
              data-scroll
              className="absech2"
              data-scroll-direction="horizontal"
              data-scroll-speed="15"
              data-scroll-class="appear"
              data-scroll-repeat="true"
            >
              So, yeah, that's it about me!
            </h2>
            <h2
              data-scroll
              className="absech2"
              data-scroll-direction="horizontal"
              data-scroll-speed="15"
              data-scroll-class="appear"
              data-scroll-repeat="true"
            >
              Scroll on for more info. Want to get in touch? Do it{' '}
              <NavLink to="/contact" className="navlinkcontact">
                here
              </NavLink>
              .
            </h2>
          </div>
        </div>
        <div
          style={{ height: '100vh', backgroundColor: '#000' }}
          className="langshow"
        >
          <LanguageShowcase />
        </div>
        <FavoriteItemsShowcase />
      </div>
      <div className="fixed-text-container2A">
        <h2 className="fixed-text2A">ameyvijeesh@gmail.com</h2>
      </div>
      <div className="fixed-textA-container">
        <h2 className="fixed-textA">Scroll</h2>
      </div>

      <div className="diva">
        <button
          className="bttn1"
          onClick={() =>
            window.open(
              'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvqKctKGdxrNgqptwMtwwfDntwBQSxcCXWnhdMkNHMdjPzsnMHXLSSwdqkGbjSSwWvSmSVmail.google.com'
            )
          }
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </button>{' '}
        <button
          className="bttn1"
          onClick={() =>
            window.open('https://www.linkedin.com/in/amey-vijeesh/')
          }
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </button>{' '}
        <button
          className="bttn1"
          onClick={() => {
            window.open('https://github.com/AmeyVijeesh');
          }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </button>
        <button
          className="bttn1"
          onClick={() => {
            window.open('https://discord.com/users/827044709406998568');
          }}
        >
          <FontAwesomeIcon icon={faDiscord} />
        </button>
      </div>
    </>
  );
};

export default About;
