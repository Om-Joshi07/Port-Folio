import React from "react";
import "./Home.css";
import Image2 from "../../assets/Image2.jpg";
import { VscGithubInverted } from "react-icons/vsc";
import { BsInstagram, BsStackOverflow } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FiExternalLink, FiGithub, FiArrowDown } from "react-icons/fi";

const TECH_STACKS = [
  {
    category: "Frontend",
    className: "frontend",
    items: [
      { name: "HTML", icon: "/html.svg" },
      { name: "CSS", icon: "/css.svg" },
      { name: "JavaScript", icon: "/js.svg" },
      { name: "React", icon: "/react.svg" },
      { name: "Next.js", icon: "/nextjs.svg" },
      { name: "Jinja", icon: "/jinja.svg" },
    ],
  },
  {
    category: "Backend",
    className: "backend",
    items: [
      { name: "Python", icon: "/python.svg" },
      { name: "Django", icon: "/django.svg" },
      { name: "NodeJS", icon: "/node.svg" },
      { name: "ExpressJS", icon: "/express.svg" },
      { name: "FastAPI", icon: "/fastapi.svg" },
    ],
  },
  {
    category: "Database",
    className: "database",
    items: [
      { name: "PostgreSQL", icon: "/postgres.svg" },
      { name: "MySQL", icon: "/mysql.svg" },
      { name: "MongoDB", icon: "/mongo.svg" },
      { name: "SQLite", icon: "/sqlite.svg" },
      { name: "ChromaDB", icon: "/chromadb.svg" },
    ],
  },
  {
    category: "AI / ML",
    className: "other",
    items: [
      { name: "NumPy", icon: "/numpy.svg" },
      { name: "Pandas", icon: "/pandas.svg" },
      { name: "Scikit-learn", icon: "/scikit-learn.svg" },
      { name: "LangChain", icon: "/langchain.svg" },
      { name: "Seaborn", icon: "/seaborn.svg" },
      { name: "Matplotlib", icon: "/matplotlib.svg" },
    ],
  },
];

const PROJECTS = [
  {
    title: "Hospital Management System",
    description:
      "A Python-based system built with Object-Oriented Programming (OOP). Lets hospital staff and admins manage doctors and patients, store data, and generate reports.",
    image: "/Hospital_Management_System.jpg",
    github: "https://github.com/Om-Joshi07/Hospital-Management-System",
    liveDemo: null,
    stacks: [{ name: "Python", icon: "/python.svg" }],
  },
  {
    title: "Smart Heating Home",
    description:
      "An Arduino-based smart home heating system designed in TinkerCAD, monitoring temperature, motion, and light with automatic control and LCD feedback.",
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
    description:
      "An online eSports platform bringing players and fans together — watch live tournaments and scrims while players register for events on the hub.",
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
    description:
      "A responsive agriculture platform with weather updates, soil insights and map tracking, plus an AI-powered RAG chatbot for personalized farming guidance.",
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
  {
    title: "RAG Pipeline — Local Demo",
    description:
      "A local RAG (Retrieval-Augmented Generation) pipeline. PDFs are ingested into a persistent Chroma vector store with Jina embeddings, then a hybrid retriever blends BM25 keyword search with semantic (Chroma) search to answer from source-cited context using a Gemini LLM — wrapped in a clean CLI, FastAPI server, and Streamlit UI.",
    image: "/FAISSDB.jpg",
    github: "https://github.com/Om-Joshi07/RAG-Pipeline",
    liveDemo: null,
    stacks: [
      { name: "ChromaDB", icon: "/chromadb.svg" },
      { name: "LangChain", icon: "/langchain.svg" },
      { name: "FastAPI", icon: "/fastapi.svg" },
      { name: "Streamlit", icon: "/streamlit.svg" },
    ],
  },
  {
    title: "Online Shoppers Purchasing Intention",
    description:
      "An end-to-end MLOps pipeline predicting a customer's real-time purchase intention. Built on an ELT architecture with One Big Table (OBT) storage for lightning-fast response times, automated data validation, and continuous model and data drift monitoring.",
    image: "/online-shoppers.jpg",
    github:
      "https://github.com/Om-Joshi07/Online-Shoppers-Purchasing-Intention",
    liveDemo: null,
    stacks: [
      { name: "FastAPI", icon: "/fastapi.svg" },
      { name: "Redis", icon: "/redis.svg" },
      { name: "Docker", icon: "/docker.svg" },
      { name: "Airflow", icon: "/airflow.svg" },
      { name: "MLflow", icon: "/mlflow.svg" },
      { name: "Evidently", icon: "/evidentlyai.webp" },
      { name: "Great Expectations", icon: "greatexpectations.png" },
      { name: "Scikit-learn", icon: "/scikit-learn.svg" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/om-joshi07/",
    label: "LinkedIn",
    icon: <RxLinkedinLogo />,
  },
  {
    href: "https://github.com/Om-Joshi07",
    label: "GitHub",
    icon: <VscGithubInverted />,
  },
  {
    href: "https://www.instagram.com/",
    label: "Instagram",
    icon: <BsInstagram />,
  },
  {
    href: "https://stackoverflow.com/users/om-joshi07",
    label: "StackOverflow",
    icon: <BsStackOverflow />,
  },
];

const FORM_FIELDS = [
  { label: "Name", id: "name", type: "text" },
  { label: "Email", id: "email", type: "email" },
  { label: "Subject", id: "subject", type: "text" },
  { label: "Message", id: "message", type: "textarea", rows: 6 },
];

const iconSrc = (icon) => (icon.startsWith("/") ? icon : `/${icon}`);

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <section className="hero" id="home-grid">
        <div className="container">
          <div className="hero-inner">
            <span className="hero-eyebrow">Hello, I'm</span>
            <h1 className="hero-name">
              Om Joshi<span>.</span>
            </h1>
            <p className="hero-role">
              AI/ML <span className="dot-sep"> | </span> Full Stack Developer
            </p>
            <p className="hero-desc">
              I'm a curious Computer Science student crafting clean, thoughtful
              digital products with Python, MERN and NextJS, and the stacks
              around them, practiced and practicing Applied AI along with
              Classical MLs.
            </p>

            <div className="hero-actions">
              <a href="#projects-grid" className="btn btn-primary">
                <FiArrowDown /> View Projects
              </a>
              <a href="#connect-grid" className="btn btn-ghost">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about-grid" id="about-grid">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">About</span>
            <h2>Turning ideas into working software</h2>
            <p>
              A student developer focused on building things that live on the
              web.
            </p>
          </div>

          <div className="about-section">
            <div className="about-photo">
              <img src={Image2} alt="Om Joshi" />
            </div>

            <div className="about-text">
              <h3>
                I'm <span className="accent-text">Om Joshi</span>, a Computer
                Science Student diving into full-stack development.
              </h3>
              <p>
                I build with{" "}
                <span className="accent-text">Python</span>,{" "}
                <span className="accent-text">JavaScript</span> and{" "}
                <span className="accent-text">React</span> while weaving applied
                AI into real products through tools like{" "}
                <span className="accent-text">LangChain</span> and{" "}
                <span className="accent-text">LangGraph</span>{" "}
                all in service of engaging user experiences, animations and
                dynamic effects.
              </p>
              <p>
                Beyond coding, I enjoy exploring{" "}
                <span className="accent-text">Machine Learning</span> and{" "}
                <span className="accent-text">Deep Learning</span> from
                LLM-powered RAG pipelines to understanding how systems work
                under the hood, and combining creativity with programming in
                fresh ways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills-grid" id="skills-grid">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Toolbox</span>
            <h2>Tech Stacks</h2>
            <p>Technologies, frameworks and tools I work with.</p>
          </div>

          <div className="skills-categories-grid">
            {TECH_STACKS.map((stackGroup) => (
              <div key={stackGroup.category} className="skill-card">
                <div className="skill-card-header">
                  <span className="skill-card-index">
                    0{stackGroup.items.length}
                  </span>
                  <h3>{stackGroup.category}</h3>
                </div>

                <div className="skill-pills">
                  {stackGroup.items.map((item) => (
                    <div key={item.name} className="skill-pill">
                      <img src={iconSrc(item.icon)} alt={item.name} />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects-grid" id="projects-grid">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Work</span>
            <h2>Crafted Projects</h2>
            <p>
              A showcase of technical projects, applications and experiments.
            </p>
          </div>

          <div className="projects-div">
            {PROJECTS.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-img">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-stacks">
                    {project.stacks.map((stack) => (
                      <span key={stack.name} className="stack-pill">
                        {stack.icon && (
                          <img
                            src={iconSrc(stack.icon)}
                            alt={stack.name}
                            className="stack-icon"
                          />
                        )}
                        {stack.name}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost project-btn"
                      >
                        <FiGithub /> <span>Code</span>
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary project-btn"
                      >
                        <FiExternalLink /> <span>Live Demo</span>
                      </a>
                    )}
                    {!project.liveDemo && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary project-btn"
                      >
                        <FiExternalLink /> <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="connect-grid" id="connect-grid">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Contact</span>
            <h2>Connect with me</h2>
            <p>
              Have an idea worth building? Let's collaborate, create, and bring
              it to life together.
            </p>
          </div>

          <div className="connect-section">
            <div className="contact-card">
              <h3>Let's talk</h3>
              <p className="contact-lead">
                Whether it's a full-fledged website or an experimental concept —
                I'm excited to hear about it.
              </p>

              <div className="info-list">
                <div className="info-item">
                  <MdLocationOn className="info-icon" />
                  <div>
                    <span className="info-label">Location</span>
                    <span className="info-value">Kathmandu, Nepal</span>
                  </div>
                </div>
                <div className="info-item">
                  <MdEmail className="info-icon" />
                  <div>
                    <span className="info-label">Email</span>
                    <a
                      href="mailto:omjoshi424566@gmail.com"
                      className="info-value"
                    >
                      omjoshi424566@gmail.com
                    </a>
                  </div>
                </div>
                <div className="info-item">
                  <MdPhone className="info-icon" />
                  <div>
                    <span className="info-label">Phone</span>
                    <span className="info-value">+977 9849126620</span>
                  </div>
                </div>
              </div>

              <div className="social-row">
                {SOCIAL_LINKS.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-form-wrap">
              <form
                className="contact-form"
                onSubmit={(e) => e.preventDefault()}
              >
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
                <button type="submit" className="btn btn-primary send-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
