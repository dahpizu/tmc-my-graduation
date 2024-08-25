import React from "react";
import BurjKhalifa from "../src/images_/BurjKhalifa.webp";

import GoldSouq from "../src/images_/GoldSouq.png";

import DubaiMarina from "../src/images_/DubaiMarina.jpeg";
import SpiceSouq from "../src/images_/SpiceSouq.jpeg";
import MuseumFuture from "../src/images_/MuseumFuture.jpeg";
import DubaiFrame from "../src/images_/DubaiFrame.webp";
import Aya from "../src/images_/AYA.jpeg";
import { Link } from "react-router-dom";
import MultiSteps from "./MultiSteps";

function ArtCardItem() {
  return (
    <li className="Art-cards-item">
      <div className="media-links">
        <div className="Art-div">
          <div className="art-wrap">
            <img className="Art-img" src={BurjKhalifa} alt="FoodImg" />
            <h5 className="Art-text">BurjKhalifa</h5>
            <Link to="/MultiSteps/">
              <button className="Art-button">
                <a className="Art-cards-item-text-a" href={MultiSteps}>
                  VISIT
                </a>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="media-links">
        <div className="Art-div">
          <div className="art-wrap">
            <img className="Art-img" src={MuseumFuture} alt="FoodImg" />
            <h5 className="Art-text">Museum of the Future</h5>
            <Link to="/MultiSteps/">
              <button className="Art-button">
                <a className="Art-cards-item-text-a">VISIT</a>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="media-links">
        <div className="Art-div">
          <div className="art-wrap">
            <img className="Art-img" src={Aya} alt="FoodImg" />
            <h5 className="Art-text">Aya</h5>
            <Link to="/MultiSteps/">
              <button className="Art-button">
                <a className="Art-cards-item-text-a">VISIT</a>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="media-links">
        <div className="Art-div">
          <div className="art-wrap">
            <img className="Art-img" src={DubaiFrame} />
            <h5 className="Art-text">Dubai Frame</h5>
            <Link to="/MultiSteps/">
              <button className="Art-button">
                <a className="Art-cards-item-text-a">VISIT</a>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="media-links">
        <div className="Art-div">
          <div className="art-wrap">
            <img className="Art-img" src={GoldSouq} alt="FoodImg" />
            <h5 className="Art-text">GoldSouq</h5>
            <Link to="/MultiSteps/">
              <button className="Art-button">
                <a className="Art-cards-item-text-a">VISIT</a>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="media-links">
        <div className="Art-div">
          <div className="art-wrap">
            <img className="Art-img" src={DubaiMarina} alt="FoodImg" />
            <h5 className="Art-text">Dubai Marina</h5>
            <Link to="/MultiSteps/">
              <button className="Art-button">
                <a className="Art-cards-item-text-a">VISIT</a>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="media-links">
        <div className="Art-div">
          <div className="art-wrap">
            <img className="Art-img" src={SpiceSouq} alt="FoodImg" />
            <h5 className="Art-text">Spice Souq</h5>
            <Link to="/MultiSteps/">
              <button className="Art-button">
                <a className="Art-cards-item-text-a">VISIT</a>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ArtCardItem;
