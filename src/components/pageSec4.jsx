// TODO: Fix the cards display on mobile and smaller devices.

import React, { useState, useEffect } from "react";
import "./CSS/pageSec4.css";
import { Link } from "react-router-dom";
import amexpropic from "./ComponentAssets/amexpropic.png";
import ameymartpic from "./ComponentAssets/ameymartpic.png";
import BackToTopButton from "./b2tBtn.jsx";

const PageSec4 = () => {
  return (
    <>
      <div className="pageSec4Container">
        <div className="pageSec4BgImg"></div>
        <div className="pageSec4Overlay"></div>
        <div className="pageSec4TextOverlay">
          <h1 className="pageSec4Text"></h1>
          <p></p>
        </div>
        <section>
          <div className="pageSec4Title">
            <h1>My Other Websites</h1>
            <p className="pageSec4Links">
              Here are just two of my projects. Find more projects
              <a>
                <Link style={{ color: "#fff" }} to="/about">
                  <u> here</u>
                </Link>
              </a>
              . Go to my{" "}
              <a
                onClick={() => {
                  window.open("https://github.com/AmeyVijeesh");
                }}
              >
                <u>github </u>
              </a>
              for all of my projects.
            </p>
          </div>
          <div className="pageSec4Container">
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={amexpropic} alt="AmExpro" />
                </div>
                <div className="contentBx">
                  <h3>
                    AmExpro
                    <br />
                    <span>
                      E-commerce website. Responsive, uses Firebase for database
                      and made in React.
                    </span>
                  </h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <button
                    className="visitButton"
                    onClick={() => {
                      window.open("https://amexpro.netlify.app/");
                    }}
                  >
                    Visit
                  </button>
                </li>
              </ul>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={ameymartpic} alt="AmExpro" />
                </div>
                <div className="contentBx">
                  <h3>
                    AmeyMart
                    <br />
                    <span>Non-responsive website. No longer maintained. </span>
                  </h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <button
                    className="visitButton"
                    onClick={() =>
                      window.open(
                        "https://ameyvijeesh.github.io/AmeyMart/#signup",
                        "_blank"
                      )
                    }
                  >
                    Visit
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <BackToTopButton />
    </>
  );
};

export default PageSec4;
