import React from "react";

import DropDownItem from "./DropDownItem";
import { useState } from "react";
import { GiCamel } from "react-icons/gi";
import Backa from "../src/images_/Dubaidesert.jpeg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main">
      <div className="backgrounnd">
        <img src={Backa}></img>
      </div>
      <div className="content">
        <h1>Welcome to Do-Buy</h1>
        <div className="menu-trigger">
          <Link to="/ArtCulture/">
            <button className="Home-btn">
              PLAN A TRIP
              <GiCamel className="D31" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
