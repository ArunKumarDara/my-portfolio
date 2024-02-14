import educationImg from "../assets/education.png";
import arrow from "../assets/arrow.png";
import experienceImg from "../assets/experience.png";
import developerImg from "../assets/developer.jpg";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={developerImg} alt="Profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experienceImg} alt="Experience icon" className="icon" />
              <h3>Experience</h3>
              <p>
                2+ years <br />
                Full Stack Development
              </p>
            </div>
            <div className="details-container">
              <img src={educationImg} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>
                B.Tech. Bachelors Degree,
                <br />
                M.Tech. Masters Degree
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Enthusiastic web developer with 2+ years of experience. Looking
              for opportunities to work on technologies, with focus on
              Javascript. Able to effectively self-manage during independent
              projects, as well as collaborate in a team setting.
            </p>
          </div>
        </div>
      </div>
      <Link
        to="experience"
        smooth={true}
        duration={100}
        style={{ cursor: "pointer" }}
      >
        <img src={arrow} alt="Arrow icon" className="icon arrow" />
      </Link>
    </section>
  );
};

export default About;
