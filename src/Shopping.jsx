import React from "react";

import NavBar from "./NavBar";
import ShoppingCard from "./ShoppingCard";
function Shopping() {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        src=" https://cdn.pixabay.com/video/2019/03/21/22205-326032532_large.mp4"
      ></video>

      <div className="nav-container">
        <div className="nav-content">
          <NavBar />
        </div>
      </div>
      <ShoppingCard />
    </div>
  );
}

export default Shopping;
