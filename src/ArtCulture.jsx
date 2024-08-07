import React from "react";
import DubaiCity from "../src/images_/DubaiCity.jpeg";
import DubaiCity2 from "../src/images_/DubaiCity2.jpeg";
import NavBar from "./NavBar";
import ArtCard from "./ArtCard";

function ArtCulture() {
  return (
    <div className="main">
      <img className="backgrounnd" src={DubaiCity}></img>

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
