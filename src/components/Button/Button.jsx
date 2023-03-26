import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <a
      href={props.url}
      className={`${
        (props.design === "1" && "button1") ||
        (props.design === "2" && "button2") ||
        (props.design === "3" && "button3")
      }`}
    >
      {props.text}
    </a>
  );
};

export default Button;
