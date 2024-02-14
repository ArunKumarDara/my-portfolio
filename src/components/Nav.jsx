import { Link } from "react-scroll";
import hamburgerIcon from "../assets/hamburger.png";
import closeIcon from "../assets/close.png";
import { useState } from "react";

const Nav = () => {
  const [menu, setMenu] = useState(true);
  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Arun Kumar</div>
        <div>
          <ul className="nav-links">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={100}
                style={{ cursor: "pointer" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                duration={100}
                style={{ cursor: "pointer" }}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={100}
                style={{ cursor: "pointer" }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={100}
                style={{ cursor: "pointer" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Arun Kumar</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon">
            {menu ? (
              <img
                src={hamburgerIcon}
                alt="Hamburger menu icon"
                onClick={() => setMenu(false)}
              />
            ) : (
              <img
                src={closeIcon}
                alt="Hamburger close icon"
                onClick={() => setMenu(true)}
              />
            )}
          </div>
          {!menu && (
            <div className="menu-links">
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={100}
                  style={{ cursor: "pointer" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="experience"
                  smooth={true}
                  duration={100}
                  style={{ cursor: "pointer" }}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={100}
                  style={{ cursor: "pointer" }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={100}
                  style={{ cursor: "pointer" }}
                >
                  Contact
                </Link>
              </li>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
