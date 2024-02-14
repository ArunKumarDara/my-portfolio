import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
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
      <p>Copyright &#169; 2024 Arun Kumar. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
