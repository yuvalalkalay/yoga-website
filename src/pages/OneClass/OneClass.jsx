import React from "react";
import "./OneClass.css";
import unwind from "../../imgs/unwind.svg";
import pause from "../../imgs/pause.svg";
import energise from "../../imgs/energise.svg";

import Button from "../../components/Button/Button";

const OneClass = () => {
  return (
    <div className="OneClass-main">
      <img src={unwind} alt="oops" />
      <img src={pause} alt="oops" />
      <img src={energise} alt="oops" />
      <img src={pause} alt="oops" />
      <Button text="Meet your instructor" />
    </div>
  );
};

export default OneClass;
