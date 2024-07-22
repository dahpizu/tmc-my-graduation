import React from "react";

import DropDownItem from "./DropDownItem";
import { useState } from "react";
import { GiCamel } from "react-icons/gi";

function Home() {
  const [open, setOpen] = useState(true);
  const handleClick = () => setClick(!click);
  return (
    <div className="main">
      <div className="overlay"></div>
      <video
        autoPlay
        muted
        loop
        src="https://videos.pexels.com/video-files/12605297/12605297-uhd_2560_1440_30fps.mp4"
      ></video>
      <div className="content">
        <h1>Welcome to Do-Buy</h1>
        <div className="menu-trigger" onClick={handleClick}>
          <button
            className="Home-btn"
            onClick={() => {
              setOpen(!open);
            }}
          >
            EXPLORE.....
            <GiCamel className="D31" />
          </button>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <p>What's your plan?</p>
          <ul>
            <DropDownItem />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Home;
