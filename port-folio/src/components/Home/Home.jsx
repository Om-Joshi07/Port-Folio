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
                  <img src="/python.svg" alt="" />
                  <span>Python</span>
                </div>

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

            <div className="other-skills">
              <div className="other-text">
                <h1>AI/ML</h1>
              </div>

              <div className="other-stacks">
                <div className="stacks">
                  <img src="/numpy.svg" alt="" />
                  <span>NumPy</span>
                </div>

                <div className="stacks">
                  <img src="/pandas.svg" alt="" />
                  <span>Pandas</span>
                </div>

                <div className="stacks">
                  <img src="/seaborn.svg" alt="" />
                  <span>Seaborn</span>
                </div>

                <div className="stacks">
                  <img src="/matplotlib.svg" alt="" />
                  <span>Matplotlib</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-grid" id="projects-grid">
          <section className="projects-section">
            <div className="projects-text">
              <h1>Projects</h1>
              <p>College Projects I built.</p>
            </div>
            <div className="projects-div">
              <div className="project-card">
                <div className="project-image">
                  <img src="/Hospital_Management_System.jpg" alt="" />
                </div>

                <div className="project-text-section">
                  <div className="project-name">
                    <h3>Hospital Management System</h3>
                    <p>
                      A Python-based Hospital Management System built using
                      Object-Oriented Programming (OOP) concepts. This
                      console-based project allows hospital staff and admins to
                      perform a variety of operations such as managing doctors
                      and patients, storing data, generating reports, and more.
                    </p>
                  </div>
                  <div className="project-stacks">
                    <div className="stacks">
                      <img src="/python.svg" alt="" />
                      <span>Python</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <img src="/Smart_Heating_Home.jpg" alt="" />
                </div>

                <div className="project-text-section">
                  <div className="project-name">
                    <h3>Smart Heating Home</h3>
                    <p>
                      An Arduino-based Smart Home Heating System designed in
                      Tinkercad. It uses sensors like temperature, motion, and
                      light to monitor and control home conditions
                      automatically. An RGB LED and LCD display provide
                      feedback, making the system energy-efficient and
                      responsive.
                    </p>
                  </div>
                  <div className="project-stacks">
                    <div className="stacks">
                      <img src="/tinkercad.svg" alt="" />
                      <span>TinkerCAD</span>
                    </div>

                    <div className="stacks">
                      <img src="/arduino.svg" alt="" />
                      <span>Arduino</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <img src="/Beast_Esports.png" alt="" />
                </div>

                <div className="project-text-section">
                  <div className="project-name">
                    <h3>Beast Esports</h3>
                    <p>
                      Beast Esport is an eSports platform that lets users watch
                      live tournaments and scrims. Players can register for
                      events and participate in competitions directly on the
                      site. A real-time leaderboard tracks player rankings,
                      keeping the community engaged and competitive.
                    </p>
                  </div>
                  <div className="project-stacks">
                    <div className="stacks">
                      <img src="/html.svg" alt="" />
                      <span>HTML</span>
                    </div>
                    <div className="stacks">
                      <img src="/css.svg" alt="" />
                      <span>CSS</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <img src="/image.png" alt=" " />
                </div>

                <div className="project-text-section">
                  <div className="project-name">
                    <h3>KrishiPath</h3>
                    <p>
                      Beast Esport is an eSports platform that lets users watch
                      live tournaments and scrims. Players can register for
                      events and participate in competitions directly on the
                      site. A real-time leaderboard tracks player rankings,
                      keeping the community engaged and competitive.
                    </p>
                  </div>
                  <div className="project-stacks">
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
                      <span>JaveScript</span>
                    </div>
                    <div className="stacks">
                      <img src="/jinja.svg" alt="" />
                      <span>Jinja</span>
                    </div>
                    <div className="stacks">
                      <img src="/langchain.svg" alt="" />
                      <span>LangChain</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;
