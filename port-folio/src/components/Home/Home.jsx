import React from "react";
import "./Home.css";
import Image2 from "../../assets/Image2.jpg";


const Home = () => {
  return (
    <main>
      <div className="container">
        <section className="home-grid" id="home-grid">
          <div className="home-section">
            <div className="name-part">
              <h5>Hi, I am </h5>
              <span data-text="&nbsp;Om Joshi">Om Joshi&nbsp;</span>
            </div>
            <p>
              A curious Computer Science Student wanting get his hands dirty on
              couple of things.
            </p>
            <button className="button">
              <h5>Scroll Down</h5>
            </button>
          </div>
        </section>

        {/* About Section  */}

        <div className="about-grid" id="about-grid">
          <section className="about-section">
            <div className="image-section">
              <img src={Image2} alt="Om Joshi" />
            </div>
            <div className="text-section">
              <h1>
                I'm <span>Om Joshi</span>, a Computer Science Student exploring
                technologies.
              </h1>
              <p>
                I'm currently focused on learning and experimenting with
                frontend and backend technologies, bringing ideas to life
                through <span>Python</span>, <span>JavaScript</span>,{" "}
                <span>React</span>, <span>Flutter</span>, their{" "}
                <span> Frameworks </span> and their <span>Projects</span>. I
                enjoy creating engaging user experiences with animations, custom
                cursors, and dynamic effects.
              </p>
              <br /> <br />
              <p>
                Beyond coding, I like exploring{" "}
                <span>Machine Learning models</span>, understanding how systems
                work under the hood, experimenting with AI-generated art, and
                discovering innovative ways to combine creativity with
                programming.
              </p>
            </div>
          </section>
        </div>


        {/* Skill Section  */}
        <div className="skills-grid" id="skills-grid">
          <div className="skills-section" id="skills-grid">
            <div className="frontend-skills">
              <div className="frontend-text">
                <h1>FRONTEND</h1>
              </div>

              <div className="frontend-stacks">
                <div className="stacks">
                  <img src="/html.svg" alt="" />
                  <span>HTML</span>
                </div>
                <div className="stacks">
                  <img src="/css.svg" alt="" />
                  <span>CSS</span>
                </div>
                <div className="stacks">
                  <img src="/js.svg" alt="" />
                  <span>JavaScript</span>
                </div>
                <div className="stacks">
                  <img src="react.svg" alt="" />
                  <span>React</span>
                </div>
                <div className="stacks">
                  <img src="jinja.svg" alt="" />
                  <span>Jinja</span>
                </div>
                <div className="stacks">
                  <img src="flutter.svg" alt="" />
                  <span>Flutter</span>
                </div>
              </div>

            </div>

            <div className="backend-skills">
              <div className="backend-text">
                <h1>BACKEND</h1>
              </div>

              <div className="backend-stacks">
                <div className="stacks">
                  <img src="/django.svg" alt="" />
                  <span>Django</span>
                </div>

                <div className="stacks">
                  <img src="/node.svg" alt="" />
                  <span>NodeJS</span>
                </div>

                <div className="stacks">
                  <img src="/express.svg" alt="" />
                  <span>ExpressJS</span>
                </div>

                <div className="stacks">
                  <img src="fastapi.svg" alt="" />
                  <span>FastAPI</span>
                </div>

              </div>

            </div>

            <div className="database-skills">
              <div className="database-text">
                <h1>DATABASE</h1>
              </div>

              <div className="database-stacks">
                <div className="stacks">
                  <img src="/mongo.svg" alt="" />
                  <span>MongoDB</span>
                </div>

                <div className="stacks">
                  <img src="/postgres.svg" alt="" />
                  <span>PostGres</span>
                </div>

                <div className="stacks">
                  <img src="/sqlite.svg" alt="" />
                  <span>Sqlite</span>
                </div>




              </div>

            </div>

          </div>
        </div>

        <div className="projects-grid" id="projects-grid">
          <section className="projects-section">
            <div className="image-section">
              <img src={Image2} alt="Om Joshi" />
            </div>
            <div className="text-section">
              <h1>
                I'm <span>Om Joshi</span>, a Computer Science Student exploring
                technologies.
              </h1>
              <p>
                I'm currently focused on learning and experimenting with
                frontend and backend technologies, bringing ideas to life
                through <span>Python</span>, <span>JavaScript</span>,{" "}
                <span>React</span>, <span>Flutter</span>, their{" "}
                <span> Frameworks </span> and their <span>Projects</span>. I
                enjoy creating engaging user experiences with animations, custom
                cursors, and dynamic effects.
              </p>
              <br /> <br />
              <p>
                Beyond coding, I like exploring{" "}
                <span>Machine Learning models</span>, understanding how systems
                work under the hood, experimenting with AI-generated art, and
                discovering innovative ways to combine creativity with
                programming.
              </p>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
};

export default Home;
