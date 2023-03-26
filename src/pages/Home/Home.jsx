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
      <div className="nav-contaner">
        <NavBar className="nav-contaner" />
      </div>
      <div className="main">
        <div className="content">
          <h2 className="home-h2">
            Experience the best workout humanly possible
          </h2>
          <div className="line"></div>
          <div className="home-button-container">
            <Button text={"Book your class"} design="1" url="" />
          </div>
        </div>
        <div className="namaste"></div>
      </div>
      <div className="ArrowDown-container">
        <ArrowDown className="ArrowDown" url="#mat" />
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
