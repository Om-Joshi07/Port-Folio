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
              A Computer Science Student wanting get his hands dirty on couple
              of things
            </p>
            <div className="button-part">
              <button>
                <p>Scroll Down</p>
              </button>
            </div>
          </div>

          <div className="about-section">
            <div className="image-section">
              <img src={Image2} alt="Om Joshi" />
            </div>
            <div className="text-section">
              <h1>I'm Om Joshi</h1>
              <p>CS Student</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
