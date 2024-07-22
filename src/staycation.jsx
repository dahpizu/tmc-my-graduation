import React from "react";

import NavBar from "./NavBar";
import StaycationCard from "./StaycationCard";

function Staycation() {
  return (
    <div className="main">
      <video
        autoPlay
        muted
        loop
        src="https://videos.pexels.com/video-files/6754119/6754119-uhd_2560_1440_30fps.mp4"
      ></video>
      <div className="nav-container">
        <div className="nav-content">
          <NavBar />
        </div>
      </div>
      <StaycationCard />
    </div>
  );
}

export default Staycation;
