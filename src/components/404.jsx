import React from "react";
import "./PageNotFound.css";
import img from "./ComponentAssets/404img.png";

const PageNotFound = () => {
  return (
    <div className="page-not-found-container">
      <div className="car-image">
        <img src={img} alt="Car" />
      </div>
      <div className="text-container">
        <h1 className="heading">404</h1>
        <p className="subheading">Oops! Page Not Found</p>
        <p className="message">Looks like you took a wrong turn.</p>
        <a href="/" className="home-link">
        Go back home.
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
