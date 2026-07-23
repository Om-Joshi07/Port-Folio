import React from "react";
import "./Home.css";
import Image2 from "../../assets/Image2.jpg";
import { VscGithubInverted } from "react-icons/vsc";
import { BsInstagram, BsStackOverflow } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const TECH_STACKS = [
  {
    category: "FRONTEND",
    className: "frontend",
    items: [
      { name: "HTML", icon: "/html.svg" },
      { name: "CSS", icon: "/css.svg" },
      { name: "JavaScript", icon: "/js.svg" },
      { name: "React", icon: "react.svg" },
      { name: "Jinja", icon: "jinja.svg" },
      { name: "Flutter", icon: "flutter.svg" },
    ],
  },
  {
    category: "BACKEND",
    className: "backend",
    items: [
      { name: "Python", icon: "/python.svg" },
      { name: "Django", icon: "/django.svg" },
      { name: "NodeJS", icon: "/node.svg" },
      { name: "ExpressJS", icon: "/express.svg" },
      { name: "FastAPI", icon: "fastapi.svg" },
    ],
  },
  {
    category: "DATABASE",
    className: "database",
    items: [
      { name: "PostGres", icon: "/postgres.svg" },
      { name: "MongoDB", icon: "/mongo.svg" },
      { name: "Sqlite", icon: "/sqlite.svg" },
    ],
  },
  {
    category: "AI/ML",
    className: "other",
    items: [
      { name: "NumPy", icon: "/numpy.svg" },
      { name: "Pandas", icon: "/pandas.svg" },
      { name: "Seaborn", icon: "/seaborn.svg" },
      { name: "Matplotlib", icon: "/matplotlib.svg" },
    ],
  },
];

const PROJECTS = [
  {
    title: "Hospital Management System",
    description: "A Python-based Hospital Management System built using Object-Oriented Programming (OOP) concepts. Allows hospital staff and admins to perform operations such as managing doctors and patients, storing data, and generating reports.",
    image: "/Hospital_Management_System.jpg",
    github: "https://github.com/Om-Joshi07/Hospital-Management-System",
    liveDemo: null,
    stacks: [
      { name: "Python", icon: "/python.svg" },
    ],
  },
  {
    title: "Smart Heating Home",
    description: "An Arduino-based Smart Home Heating System designed in Tinkercad. Uses sensors like temperature, motion, and light to monitor and control home conditions automatically with LCD visual feedback.",
    image: "/Smart_Heating_Home.jpg",
    github: "https://github.com/Om-Joshi07/Smart-Home-Heating-System",
    liveDemo: "https://www.tinkercad.com/things/4QJIbq461wX-smart-heating-home",
    stacks: [
      { name: "TinkerCAD", icon: "/tinkercad.svg" },
      { name: "Arduino", icon: "/arduino.svg" },
    ],
  },
  {
    title: "Beast Esports",
    description: "An online eSports platform bringing players and fans together. Users watch live tournaments, scrims, and competitive matches while players register for events directly on the hub.",
    image: "/Beast_Esports.png",
    github: "https://github.com/Om-Joshi07/Beast-Esports",
    liveDemo: "https://beastesports.com",
    stacks: [
      { name: "HTML", icon: "/html.svg" },
      { name: "CSS", icon: "/css.svg" },
    ],
  },
  {
    title: "KrishiPath",
    description: "A responsive agriculture platform helping farmers with weather updates, soil insights, and map tracking. Features an AI-powered RAG chatbot for farming queries and personalized guidance.",
    image: "/image.png",
    github: "https://github.com/Om-Joshi07/Krishipath",
    liveDemo: null,
    stacks: [
      { name: "HTML", icon: "/html.svg" },
      { name: "CSS", icon: "/css.svg" },
      { name: "JavaScript", icon: "/js.svg" },
      { name: "Jinja", icon: "/jinja.svg" },
      { name: "LangChain", icon: "/langchain.svg" },
    ],
  },
];

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/om-joshi07/", icon: <RxLinkedinLogo /> },
  { href: "https://github.com/", icon: <VscGithubInverted /> },
  { href: "https://www.instagram.com/", icon: <BsInstagram /> },
  { href: "https://stackoverflow.com/", icon: <BsStackOverflow /> },
];

const FORM_FIELDS = [
  { label: "Name", id: "name", type: "text" },
  { label: "Email", id: "email", type: "email" },
  { label: "Subject", id: "subject", type: "text" },
  { label: "Message", id: "message", type: "textarea", rows: 7 },
];

const Home = () => {
  return (
    <main>
      <div className="container">
        <div className="main-container">
          <section className="home-grid" id="home-grid">
            <div className="home-section">
              <div className="name-part">
                <h5>Hi, I am </h5>
                <span data-text="&nbsp;Om Joshi">Om Joshi&nbsp;</span>
              </div>
              <p>
                A curious Computer Science Student wanting get his hands dirty
                on couple of things.
              </p>
              <button className="button">
                <h5>
                  <a href="#about-grid">Scroll Down</a>
                </h5>
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
                  I'm <span>Om Joshi</span>, a Computer Science Student
                  exploring technologies.
                </h1>
                <p>
                  I'm currently focused on learning and experimenting with
                  frontend and backend technologies, bringing ideas to life
                  through <span>Python</span>, <span>JavaScript</span>,{" "}
                  <span>React</span>, <span>Flutter</span>, their{" "}
                  <span> Frameworks </span> and their <span>Projects</span>. I
                  enjoy creating engaging user experiences with animations,
                  custom cursors, and dynamic effects.
                </p>
                <br /> <br />
                <p>
                  Beyond coding, I like exploring{" "}
                  <span>Machine Learning models</span>, understanding how
                  systems work under the hood, experimenting with AI-generated
                  art, and discovering innovative ways to combine creativity
                  with programming.
                </p>
              </div>
            </section>
          </div>

          {/* Skill Section  */}

          <div className="skills-grid" id="skills-grid">
            <div className="skills-section">
              <div className="skills-header">
                <h1>Tech Stacks</h1>
                <p>Technologies, frameworks, and tools I work with.</p>
              </div>

              <div className="skills-categories-grid">
                {TECH_STACKS.map((stackGroup) => (
                  <div key={stackGroup.category} className="skill-category-card">
                    <div className="category-header">
                      <h3>{stackGroup.category}</h3>
                      <div className="category-line"></div>
                    </div>

                    <div className="category-stacks">
                      {stackGroup.items.map((item) => (
                        <div key={item.name} className="skill-badge">
                          <div className="skill-icon-wrapper">
                            <img src={item.icon} alt={item.name} />
                          </div>
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Section  */}

          <div className="projects-grid" id="projects-grid">
            <section className="projects-section">
              <div className="projects-header">
                <h1>Crafted Projects</h1>
                <p>A showcase of technical projects, applications, and experiments.</p>
              </div>
              <div className="projects-div">
                {PROJECTS.map((project) => (
                  <div key={project.title} className="card-wrapper">
                    <div className="project-card">
                      <div className="project-image-container">
                        <img src={project.image} alt={project.title} className="project-image" />
                      </div>
                      <div className="project-text-section">
                        <div className="project-name">
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                        </div>
                        
                        <div className="project-stacks">
                          {project.stacks.map((stack) => (
                            <div key={stack.name} className="stack-pill">
                              {stack.icon && <img src={stack.icon} alt={stack.name} className="stack-icon" />}
                              <span>{stack.name}</span>
                            </div>
                          ))}
                        </div>

                        <div className="project-actions">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn secondary">
                              <FiGithub /> <span>Code</span>
                            </a>
                          )}
                          {project.liveDemo && (
                            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-btn primary">
                              <FiExternalLink /> <span>Live Demo</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="connect-grid" id="connect-grid">
            <section className="connect-section">
              <div className="connect-text">
                <h1>Connect with Me</h1>
                <p> 
                  Connect with me for exciting projects, whether it's building a
                  full-fledged website, developing a cross-platform app, or
                  exploring innovative tech solutions. I'm passionate about
                  learning and experimenting in areas like Web Development, App
                  Development, Cybersecurity, Machine Learning, Deep Learning,
                  and emerging technologies. Let's collaborate, create, and
                  bring ideas to life together that solve the problem and make
                  life convienent! 
                </p>
              </div>

              <div className="contact-section">
                <div className="contact-info">

                  <div className="info-details">
                    <div className="info-item">
                      <MdLocationOn className="info-icon" />
                      <div className="info-content">
                        <h3>Location</h3>
                        <p>Kathmandu, Nepal</p>
                      </div>
                    </div>
                    <div className="info-item">
                      <MdEmail className="info-icon" />
                      <div className="info-content">
                        <h3>Email</h3>
                        <a href="mailto:omjoshi0424566gmail.com">omjoshi424566@gmail.com</a>
                      </div>
                    </div>
                    <div className="info-item">
                      <MdPhone className="info-icon" />
                      <div className="info-content">
                        <h3>Phone</h3>
                        <a>+977 9849126620</a>
                      </div>
                    </div>

                  <div className="contact-quote">
                    <p>"If you think the price of winning is too high, wait until you get the bill from regret."</p>
                    <span>- Bill Campbell</span>
                  </div>
                  </div>

                  <div className="social-medias-horizontal">
                    {SOCIAL_LINKS.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="contact-form">
                  <form action="">
                    {FORM_FIELDS.map((field) => (
                      <div key={field.id} className="form-element">
                        <label htmlFor={field.id}>{field.label}</label>
                        {field.type === "textarea" ? (
                          <textarea id={field.id} rows={field.rows}></textarea>
                        ) : (
                          <input type={field.type} id={field.id} />
                        )}
                      </div>
                    ))}
                    <button type="submit" className="send-btn">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
