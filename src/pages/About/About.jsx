import React from "react";
import Button from "../../components/Button/Button";
import "./About.css";

import vivkie from "../../imgs/vickie.png";
import relax from "../../imgs/relax.svg";
import recharge from "../../imgs/recharge.svg";

const About = () => {
  return (
    <div className="about-main">
      <div className="about-left-conteainer">
        <img src={relax} className="about-left-img" alt="oops" />
      </div>
      <div className="about-center-container">
        <h1>You're in good hands</h1>
        <img src={vivkie} alt="oops" className="about-viki-img" />
        <p>
          Hey I’m Vickie. I’ve had a love of yoga for over a decade and fitness
          for a lifetime.
        </p>
        <p>
          With Mat rebel, I hope to share my love of yoga practice and teaching
          to help you sculpt your perfect phyisque and build a healthy mind.
        </p>
        <Button text="View class times" design="2" />
      </div>
      <div className="about-right-conteainer">
        <img className="about-right-img" src={recharge} alt="oops" />
      </div>
    </div>
  );
};

export default About;
