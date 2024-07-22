import React from "react";

import NavBar from "./NavBar";
import Card from "./card";
function FoodDrink() {
  return (
    <div className="main">
      <video
        autoPlay
        muted
        loop
        src="https://videos.pexels.com/video-files/2620043/2620043-uhd_2560_1440_25fps.mp4"
      ></video>

      <div className="nav-container">
        <div className="nav-content">
          <NavBar />
        </div>
      </div>
      <Card />
    </div>
  );
}
export default FoodDrink;
