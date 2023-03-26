import React from "react";
import "./ArrowDown.css";
import { IoIosArrowDown } from "react-icons/io/";

const ArrowDown = (props) => {
  return (
    <a href={props.url} className="ArrowDown">
      <IoIosArrowDown className="ArrowDown-icon" />
    </a>
  );
};

export default ArrowDown;
