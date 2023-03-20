import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className={"navContainer"}>
      <ul className="navContainer-ul-left">
        <li>mat rebel logo</li>
      </ul>
      <ul className="navContainer-ul-right">
        <li>
          <a className="nav-a" href="#About">
            About our classes
          </a>
        </li>
        <li>
          <a className="nav-a" href="#Classes">
            classesTimetable
          </a>
        </li>
        <li>
          <a className="nav-a" href="#Private">
            Private classes
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
