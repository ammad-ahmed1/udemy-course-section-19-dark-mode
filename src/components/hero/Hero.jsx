import React from "react";
import heroImg from "../../assets/react.svg";
import "./Hero.css";
const Hero = ({ myTheme }) => {
  return (
    <section className="hero" data-theme={myTheme}>
      <div className="container">
        <div className="hero-text">
          <h1>The Dark Mode</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint iure
            eius quibusdam voluptatem assumenda, ut similique consequuntur optio
            recusandae dolorem eligendi sed, sunt laborum! Tempora nihil maxime
            natus itaque dolore!
          </p>
          <p>
            Additional content goes here. You can add more paragraphs, images,
            or any other elements you need in the hero section.
          </p>
        </div>
        <div className="hero-btns">
          <button>Learn More</button>
          <button>Sign up</button>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="react-logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
