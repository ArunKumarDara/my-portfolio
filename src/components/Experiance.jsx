import checkMark from "../assets/checkmark.png";
import arrow from "../assets/arrow.png";
import { Link } from "react-scroll";

const Experiance = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>JavaScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>React Js</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>TypeScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Ant Design</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>SQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>MongoDb</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>PostgreSQL</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="projects"
        smooth={true}
        duration={100}
        style={{ cursor: "pointer" }}
      >
        <img src={arrow} alt="Arrow icon" className="icon arrow" />
      </Link>
    </section>
  );
};

export default Experiance;
