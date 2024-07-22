import React from "react";

import NavBar from "./NavBar";
import MobilityCard from "./MobilityCard";
function Mobility() {
  return (
    <div className="main">
      <video
        autoPlay
        muted
        loop
        src="https://cdn.pixabay.com/video/2024/03/12/203953-922734728_large.mp4"
      ></video>
      <div className="nav-container">
        <div className="nav-content">
          <NavBar />
        </div>
      </div>
      <MobilityCard />
    </div>
  );
}

export default Mobility;
