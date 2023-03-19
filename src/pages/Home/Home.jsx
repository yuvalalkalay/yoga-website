import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button/Button";
import ArrowDown from "../../components/ArrowDown/ArrowDown";
import "./Home.css";

//pages.
import Mat from "../Mat/Mat";
import OneClass from "../OneClass/OneClass";
import About from "../About/About";
import Classes from "../Classes/Classes";
import Private from "../Private/Private";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="main">
        <div className="content">
          <h2>Experience the best workout humanly possible</h2>
          <div className="line"></div>
          <Button text={"Book your class"} design="1" />
        </div>
        <div className="namaste"></div>
      </div>
      <div className="ArrowDown-container">
        <ArrowDown className="ArrowDown" />
      </div>
      <Mat />
      <OneClass />
      <About />
      <Classes />
      <div className="divider"></div>
      <Private />
    </div>
  );
};

export default Home;
