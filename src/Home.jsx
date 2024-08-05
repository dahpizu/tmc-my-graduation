import React from "react";

import DropDownItem from "./DropDownItem";
import { useState } from "react";
import { GiCamel } from "react-icons/gi";
import Backa from "../src/images_/Dubaidesert.jpeg";

function Home() {
  const [open, setOpen] = useState(true);
  const handleClick = () => setClick(!click);
  return (
    <div className="main">
      <div className="backgrounnd">
        <img src={Backa}></img>
      </div>
      <div className="content">
        <h1>Welcome to Do-Buy</h1>
        <div className="menu-trigger" onClick={handleClick}>
          <button
            className="Home-btn"
            onClick={() => {
              setOpen(!open);
            }}
          >
            PLAN A TRIP
            <GiCamel className="D31" />
          </button>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <p>What's your plan?</p>
          <ul>
            <DropDownItem />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Home;
