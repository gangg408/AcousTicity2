import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Mankind has been trying to utilise the resources from nature: the Sun, wind, and even tides. Despite these resources, we are still struggling to replace our main energy source of coal because of the accessibility and availability of the energy. Our team focuses on ‘sound,’ a new medium to produce energy which is as available around us and accessible just like coal. By creating a sound harvester, we aim to create a portable, yet efficient energy source that can power our World anywhere, anytime.  
        </p>
      </div>
    </div>
  );
}

export default About;
