import React from "react";

import NavBar from "./NavBar";
import ArtCard from "./ArtCard";

function ArtCulture() {
  return (
    <div className="main">
      <div className="backgrounnd"></div>

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
