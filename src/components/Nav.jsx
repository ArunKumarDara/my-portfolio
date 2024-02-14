import { Link } from "react-scroll";

const Nav = () => {
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
            <span></span>
            <span></span>
            <span></span>
          </div>
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
        </div>
      </nav>
    </>
  );
};

export default Nav;
