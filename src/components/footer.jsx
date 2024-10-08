import "./CSS/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Amey</h1>

          <h2>Contact</h2>

          <address>
            Bengaluru, India
            <br />
            <a className="footer__btn" href="mailto:ameyvijeesh@gmail.com">
              <u>My Email</u>
            </a>
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Contents</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">
                  <Link to="/about">About</Link>
                </a>
              </li>

              <li>
                <a href="#">
                  <Link to="/contact">Contact</Link>
                </a>
              </li>

              <li>
                <a href="#">
                  <Link to="/MyGarage">Car Garage</Link>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Links</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <a href="#">
                  <span
                    onClick={() => {
                      window.open("https://github.com/AmeyVijeesh");
                    }}
                  >
                    Github
                  </span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span
                    onClick={() => {
                      window.open(
                        "https://www.team-bhp.com/forum/members/pythonista.html"
                      );
                    }}
                  >
                    Team-BHP
                  </span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span
                    onClick={() => {
                      window.open(
                        "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=ameyvijeesh@gmail.com"
                      );
                    }}
                  >
                    Gmail
                  </span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span
                    onClick={() => {
                      window.open("https://www.google.com");
                    }}
                  >
                    Code
                  </span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Others</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">
                  <Link to="/sitemap">Sitemap</Link>
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; 2023. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
