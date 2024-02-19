import linkedInImage from "../assets/linkedin.png";
import githubImage from "../assets/github.png";
import profilePic from "../assets/profile-pic-3.jpg";
import webDeveloper from "../assets/resume_arun.pdf";

import { Link } from "react-scroll";

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src={profilePic}
          alt="Arun profile picture"
          className="profile-pic"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I&apos;m</p>
        <h1 className="title">Arun Kumar</h1>
        <p className="section__text__p2">Full Stack Developer</p>
        <div className="btn-container">
          <a href={webDeveloper} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-color-2">View Ressume</button>
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={100}
            style={{ cursor: "pointer" }}
          >
            <button className="btn btn-color-1">Contact me</button>
          </Link>
        </div>
        <div id="socials-container">
          <a
            href="https://www.linkedin.com/in/arun-kumar-dara/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedInImage}
              alt="My LinkedIn profile"
              className="icon"
            />
          </a>
          <a
            href="https://github.com/ArunKumarDara"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubImage} alt="My Github profile" className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
