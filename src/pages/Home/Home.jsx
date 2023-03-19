import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button/Button";
import ArrowDown from "../../components/ArrowDown/ArrowDown";
import "./Home.css";

import Mat from "../Mat/Mat";
import OneClass from "../OneClass/OneClass";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="main">
        <div className="content">
          <h2>Experience the best workout humanly possible</h2>
          <div className="line"></div>
          <Button text={"Book your class"} />
        </div>
        <div className="namaste"></div>
      </div>
      <div className="ArrowDown-container">
        <ArrowDown className="ArrowDown" />
      </div>
      <Mat />
      <OneClass />
    </div>
  );
};

export default Home;
