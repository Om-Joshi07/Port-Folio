import React from "react";
import "./Home.css";
import Image2 from "../../assets/Image2.jpg";

const Home = () => {
  return (
    <main>
      <div className="container">
        <section className="home-grid">
          <div className="home-section">
            <div className="name-part">
              <h5>Hi, I am </h5>
              <span data-text="&nbsp;Om Joshi">Om Joshi&nbsp;</span>
            </div>
            <p>
              A curious Computer Science Student wanting get his hands dirty on
              couple of things.
            </p>
            <div className="button-part">
              <button>
                <h5>Scroll Down</h5>
              </button>
            </div>
          </div>

          {/* About Section  */}

          <div className="about-section">
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
                through <span>Python</span>, <span>JavaScript</span>, <span>React</span>, <span>Flutter</span>, their <span> Frameworks </span> and their <span>Projects</span>. I enjoy
                creating engaging user experiences with animations, custom
                cursors, and dynamic effects.
              </p>

              <br/> <br />
              <p>
                Beyond coding, I like exploring <span>Machine Learning Models</span>,
                understanding how systems work under the hood, experimenting
                with AI-generated art, and discovering innovative ways to
                combine creativity with programming.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
