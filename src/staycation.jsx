import React from "react";
import DubaiCity from "../src/images_/DubaiCity.jpeg";
import NavBar from "./NavBar";
import StaycationCard from "./StaycationCard";

function Staycation() {
  return (
    <div className="main">
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
