import React from "react";
import "./ArrowDown.css";
import { IoIosArrowDown } from "react-icons/io/";

const ArrowDown = () => {
  return (
    <a href="#mat">
      <button className="ArrowDown">
        <IoIosArrowDown className="ArrowDown-icon" />
      </button>
    </a>
  );
};

export default ArrowDown;
