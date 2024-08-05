import React from "react";

import NavBar from "./NavBar";
import AboutMeCard from "./AboutMeCard";
import Backa from "../src/images_/Dubaidesert.jpeg";

function AboutMe() {
  return (
    <div className="main">
      <div className="backgrounnd">
        <img src={Backa}></img>
      </div>

      <div className="nav-container">
        <div className="nav-content">
          <NavBar />
        </div>
      </div>
      <AboutMeCard />
    </div>
  );
}

export default AboutMe;
