import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className={"navContainer"}>
      <ul className="navContainer-ul-left">
        <li>mat rebel logo</li>
      </ul>
      <ul className="navContainer-ul-right">
        <li>About our classes</li>
        <li>classesTimetable</li>
        <li>Private classes</li>
      </ul>
    </nav>
  );
};

export default NavBar;
