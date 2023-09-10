import React, { useState, useLayoutEffect } from "react";
import "./CSS/navbar.css";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMenuItemClick = () => {
    setIsExpanded(false);
  };

  const isAboutPage = location.pathname === "/about";

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
        <div className="container">
          <a className="navbar-brand" href="#!">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "white",
              })}
            >
              <span style={{ color: "#2190D6" }}>Amey</span>
              <span style={{ color: "#ffffff" }}>Vijeesh</span>
            </NavLink>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isExpanded}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <i className="fas fa-bars"></i>
          </button>
          <div
            className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto">
              <li
                style={{ color: isAboutPage ? "black" : "#fff" }}
                className="nav-item"
              >
                <a className="nav-link" href="#!">
                  <NavLink
                    to="/"
                    style={({ isActive }) => ({
                      color: isActive ? "#2190D6" : "white",
                    })}
                    onClick={handleMenuItemClick} // Close the navbar after a menu item is clicked
                  >
                    Home
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  <NavLink
                    to="/MyGarage"
                    style={({ isActive }) => ({
                      color: isActive ? "#2190D6" : "white",
                      textDecoration: isActive ? "underline" : "",
                    })}
                    onClick={handleMenuItemClick} // Close the navbar after a menu item is clicked
                  >
                    My Garage
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  <NavLink
                    to="/about"
                    style={({ isActive }) => ({
                      color: isActive ? "#2190D6" : "white",
                      textDecoration: isActive ? "underline" : "",
                    })}
                    onClick={handleMenuItemClick} // Close the navbar after a menu item is clicked
                  >
                    About
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  <NavLink
                    to="/contact"
                    style={({ isActive }) => ({
                      color: isActive ? "#2190D6" : "white",
                      textDecoration: isActive ? "underline" : "",
                    })}
                    onClick={handleMenuItemClick} // Close the navbar after a menu item is clicked
                  >
                    Contact
                  </NavLink>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="#!">
                  <span
                    onClick={() => {
                      window.open(
                        "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=ameyvijeesh@gmail.com"
                      );
                    }}
                  >
                    <i className="fa fa-envelope"></i>
                  </span>
                </a>
              </li>
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="#!">
                  <span
                    onClick={() => {
                      window.open("https://github.com/AmeyVijeesh");
                    }}
                  >
                    <i className="fab fa-github"></i>
                  </span>
                </a>
              </li>
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="#!">
                  <span
                    onClick={() => {
                      window.open("https://www.google.com");
                    }}
                  >
                    <i className="fa fa-code" aria-hidden="true"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
