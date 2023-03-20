import React from "react";
import "./Private.css";
import Button from "../../components/Button/Button";
import strength from "../../imgs/strength.svg";

const Private = () => {
  return (
    <div className="Private-main" id="Private">
      <h1>Private classes</h1>
      <p>
        A personal practice that’s right for you. One-on-one tuition or
        instruction for smaller groups and corporate teams.
      </p>
      <Button text="Get in touch" design="2" />
      <img src={strength} alt="oops" />
    </div>
  );
};

export default Private;
