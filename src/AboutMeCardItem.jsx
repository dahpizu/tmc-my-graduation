import React from "react";
import MyPic from "../src/images_/MyPic.png";

function AboutMeCardItem() {
  return (
    <div className="MyPic-card">
      <img className="MyPic-Img" src={MyPic} alt="" />
    </div>
  );
}

export default AboutMeCardItem;
