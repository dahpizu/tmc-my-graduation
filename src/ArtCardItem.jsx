import React from "react";
import BurjKhalifa from "../src/images_/BurjKhalifa.webp";

import GoldSouq from "../src/images_/GoldSouq.png";

import DubaiMarina from "../src/images_/DubaiMarina.jpeg";
import SpiceSouq from "../src/images_/SpiceSouq.jpeg";
import MuseumFuture from "../src/images_/MuseumFuture.jpeg";
import DubaiFrame from "../src/images_/DubaiFrame.webp";
import Aya from "../src/images_/AYA.jpeg";

function ArtCardItem() {
  return (
    <li className="Art-cards-item">
      <div className="Art-div">
        <div className="art-wrap">
          <img className="Art-img" src={BurjKhalifa} alt="FoodImg" />
          <h5 className="Art-text">BurjKhalifa</h5>
          <button className="Art-button">
            <a
              className="Art-cards-item-text-a"
              href="https://www.burjkhalifa.ae/en/index.aspx"
            >
              VISIT
            </a>
          </button>
        </div>
      </div>
      <div className="Art-div">
        <div className="art-wrap">
          <img className="Art-img" src={MuseumFuture} alt="FoodImg" />
          <h5 className="Art-text">Museum of the Future</h5>
          <button className="Art-button">
            <a
              className="Art-cards-item-text-a"
              href="https://museumofthefuture.ae/en"
            >
              VISIT
            </a>
          </button>
        </div>
      </div>
      <div className="Art-div">
        <div className="art-wrap">
          <img className="Art-img" src={Aya} alt="FoodImg" />
          <h5 className="Art-text">Aya</h5>
          <button className="Art-button">
            <a
              className="Art-cards-item-text-a"
              href="https://ayauniverse.ae/?gad_source=1&gclid=CjwKCAjwqMO0BhA8EiwAFTLgIO_335o9qh0zZy9SLRwSSyd1VaIYjuEmDws_WOm6UFVLPzUVBXWA-hoCLRIQAvD_BwE"
            >
              VISIT
            </a>
          </button>
        </div>
      </div>
      <div className="Art-div">
        <div className="art-wrap">
          <img className="Art-img" src={DubaiFrame} />
          <h5 className="Art-text">Dubai Frame</h5>
          <button className="Art-button">
            <a
              className="Art-cards-item-text-a"
              href="https://www.dubaiframe.ae/en"
            >
              VISIT
            </a>
          </button>
        </div>
      </div>
      <div className="Art-div">
        <div className="art-wrap">
          <img className="Art-img" src={GoldSouq} alt="FoodImg" />
          <h5 className="Art-text">GoldSouq</h5>
          <button className="Art-button">
            <a
              className="Art-cards-item-text-a"
              href="https://www.google.com/maps/place/Dubai+Gold+Souk/@25.2700283,55.2932652,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f43438edb60cd:0xbc047ee4e16b356d!8m2!3d25.2700235!4d55.2981361!16s%2Fm%2F03wfhyy?entry=ttu"
            >
              VISIT
            </a>
          </button>
        </div>
      </div>
      <div className="Art-div">
        <div className="art-wrap">
          <img className="Art-img" src={DubaiMarina} alt="FoodImg" />
          <h5 className="Art-text">Dubai Marina</h5>
          <button className="Art-button">
            <a
              className="Art-cards-item-text-a"
              href="https://www.google.com/maps/place/Dubai+Marina+-+Dubai/@25.0833429,55.1192998,14z/data=!3m1!4b1!4m6!3m5!1s0x3e5f6b5402c126e3:0xb9511e6655c46d7c!8m2!3d25.0806744!4d55.1397921!16zL20vMDdkMHRo?entry=ttu"
            >
              VISIT
            </a>
          </button>
        </div>
      </div>

      <div className="Art-div">
        <div className="art-wrap">
          <img className="Art-img" src={SpiceSouq} alt="FoodImg" />
          <h5 className="Art-text">Spice Souq</h5>
          <button className="Art-button">
            <a
              className="Art-cards-item-text-a"
              href="https://www.google.com/maps/place/Dubai+Spice+Souk/@25.2676366,55.2938887,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f43412e9c1bf9:0x3668783743f4a66f!8m2!3d25.2676366!4d55.2964636!16s%2Fm%2F03wfwvr?entry=ttu"
            >
              VISIT
            </a>
          </button>
        </div>
      </div>
    </li>
  );
}

export default ArtCardItem;
