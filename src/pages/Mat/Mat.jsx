import React from "react";
import Button from "../../components/Button/Button";
import logo from "../../imgs/logomark.png";
import "./Mat.css";

const Mat = () => {
  return (
    <div className="Mat-main" id="mat">
      <img src={logo} className="logo" alt="oops" />
      <p>
        Mat rebel is 60 minutes of yoga flow through a series of strength and
        focused exercise, complimented with deep breathing and calming of the
        mind.
      </p>
      <a href="#one-class">
        <Button text="Explore the class" design="1" />
      </a>
    </div>
  );
};

export default Mat;
