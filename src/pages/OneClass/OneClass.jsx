import React from "react";
import "./OneClass.css";
import unwind from "../../imgs/unwind.svg";
import pause from "../../imgs/pause.svg";
import energise from "../../imgs/energise.svg";

import Button from "../../components/Button/Button";

const OneClass = () => {
  return (
    <div className="OneClass-main" id="one-class">
      <img src={pause} alt="oops" className="OneClass-left-svg" />
      <div className="OneClass-content">
        <h1>One class, all the benefits</h1>
        <p>
          Great things happen when you pause and stretch. Re-focus on you, build
          stamina and strength from within.
        </p>
        <Button text="Meet your instructor" design="2" url="#About" />
      </div>
      <div className="OneClass-right-svg">
        <img src={energise} alt="oops" />
        <img src={unwind} alt="oops" />
      </div>
    </div>
  );
};

export default OneClass;
