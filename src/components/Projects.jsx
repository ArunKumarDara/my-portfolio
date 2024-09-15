import restaurantImg from "../assets/restaurant.jpg";
import jobPortal from "../assets/job-portal.jpg";
import arrow from "../assets/arrow.png";
import { Link } from "react-scroll";
import hmImg from "../assets/hm-r.jpg";
import imdb from "../assets/imdb.jpg";

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={restaurantImg}
                alt="Html&Css-Project"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Dine Express - MERN Stack App
            </h2>
            <div className="btn-container">
              <a
                href="https://github.com/ArunKumarDara/Dine-Express"
                target="_blank"
              >
                <button className="btn btn-color-2 project-btn">Github</button>
              </a>
              <a href="https://dine-express.onrender.com" target="_blank">
                <button className="btn btn-color-2 project-btn">
                  Live Demo
                </button>
              </a>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={jobPortal}
                alt="Javascript-Project"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Job Portal Application (MERN Stack)
            </h2>
            <div className="btn-container">
              <a
                href="https://github.com/ArunKumarDara/mern-job-portal"
                target="_blank"
              >
                <button className="btn btn-color-2 project-btn">Github</button>
              </a>

              <a href="https://job-portal-is7n.onrender.com" target="_blank">
                <button className="btn btn-color-2 project-btn">
                  Live Demo
                </button>
              </a>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={hmImg} alt="React-Project" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">
              H&M Restaurant (HTML & CSS)
            </h2>
            <div className="btn-container">
              <a
                href="https://github.com/ArunKumarDara/fm-hotel-html-css"
                target="_blank"
              >
                <button className="btn btn-color-2 project-btn">Github</button>
              </a>
              <a href="https://fm-hotel.netlify.app" target="_blank">
                <button className="btn btn-color-2 project-btn">
                  Live Demo
                </button>
              </a>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={imdb}
                alt="Javascript-Project"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              IMDB Clone (React JS)
            </h2>
            <div className="btn-container">
              <a
                href="https://github.com/ArunKumarDara/imdb-clone"
                target="_blank"
              >
                <button className="btn btn-color-2 project-btn">Github</button>
              </a>

              <a href="https://tmdb32.netlify.app" target="_blank">
                <button className="btn btn-color-2 project-btn">
                  Live Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="contact"
        smooth={true}
        duration={100}
        style={{ cursor: "pointer" }}
      >
        <img src={arrow} alt="Arrow icon" className="icon arrow" />
      </Link>
    </section>
  );
};

export default Projects;
