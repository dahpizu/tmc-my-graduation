import React from "react";

import NavBar from "./NavBar";
import AboutMeCard from "./AboutMeCard";

function AboutMe() {
  return (
    <div className="main">
      <video
        autoPlay
        muted
        loop
        src="https://cdn.pixabay.com/video/2020/08/29/48504-454713939_large.mp4"
      ></video>

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
