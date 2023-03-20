import React from "react";
import "./Classes.css";
import Button from "../../components/Button/Button";

const Classes = () => {
  return (
    <div className="classes-main" id="Classes">
      <div className="classes-price">
        <h1>Classes for 2019</h1>
        <p>£48 for a block of 6 consecutive classes (£8.00 per class)</p>
        <p>£10 per class for drop-in</p>
      </div>
      <div className="classes-header-table">
        <h1>May 2019</h1>
        <h3 className="classes-black-header">Classes each Thursday</h3>
      </div>

      <div className="classes-table">
        <div>
          <h1>7:00 - 8:00pm</h1>
        </div>
        <div>
          <h1>Hatha Flow</h1>
          <p>Wantage Methodist Church Hall</p>
        </div>
        <div className="classes-button">
          <Button text="Reserve your space +" design="3" />
        </div>
        <div>
          <h1>8:15 - 9:15pm</h1>
        </div>
        <div>
          <h1>Hatha Flow</h1>
          <p>Wantage Methodist Church Hall</p>
        </div>
        <div className="classes-button">
          <Button text="Reserve your space +" design="3" />
        </div>
      </div>
    </div>
  );
};

export default Classes;
