import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button
      className={`${
        (props.design === "1" && "button1") ||
        (props.design === "2" && "button2") ||
        (props.design === "3" && "button3")
      }`}
    >
      {props.text}
    </button>
  );
};

export default Button;
