import React from "react";

import NavBar from "./NavBar";
import ArtCard from "./ArtCard";

function ArtCulture() {
  return (
    <div className="main">
      <video
        autoPlay
        muted
        loop
        src="https://cdn.pixabay.com/video/2024/05/02/210358_large.mp4"
      ></video>

      <div className="nav-container">
        <div className="nav-content">
          <NavBar />
        </div>
      </div>
      <ArtCard />
    </div>
  );
}

export default ArtCulture;
