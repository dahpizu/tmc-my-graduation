import React from "react";

import DubaiWaterTaxi from "../src/images/DubaiWaterTaxi.jpeg";
import DubaiBus from "../src/images_/DubaiBus.jpeg";
import DubaiTram from "../src/images_/DubaiTram.jpeg";
import UberCareem from "../src/images_/UberCareem.jpeg";
import Lime from "../src/images/Lime.jpeg";
import DubaiMetro from "../src/images_/DubaiMetro.webp";
import DubaiAirTaxi from "../src/images_/DubaiAirTaxi.webp";

import Careem from "../src/images_/Careem.jpeg";
import Uber from "../src/images_/Uber.png";
import Tier from "../src/images_/Tier.png";
import Arnab from "../src/images_/Arnab.png";
import Fenix from "../src/images_/Fenix.png";
import Limee from "../src/images_/Limee.jpeg";
function MobilityCardItem() {
  return (
    <li className="Mobility-cards-item">
      <div className="Mobility-cards-item-link">
        <div className="Mobility-card-item-pic-wrap">
          <video
            autoPlay
            muted
            loop
            className="Mobility-cards-item-img"
            alt="FoodImg"
            src="https://videos.pexels.com/video-files/20557092/20557092-uhd_1440_2560_60fps.mp4"
          ></video>

          <h5 className="Mobility-card-item-text"> Dubai Abra</h5>
          <h5 className="Mobility-card-item-text-2">
            {" "}
            Where to catch an Abra in Dubai? Deira Old Souq Station (Deira) -
            Bur Dubai Station (Bur Dubai). Al Sabkha Station (Deira) - Dubai Old
            Souq Station (Bur Dubai).
          </h5>
        </div>
      </div>
      <div className="Mobility-cards-item-link">
        <div className="card-item-pic-wrap">
          <img
            className="Mobility-cards-item-img"
            src={DubaiWaterTaxi}
            alt="FoodImg"
          />

          <h5 className="Mobility-card-item-text"> Dubai Ferry</h5>
          <button className="Mobility-card-item-button">
            <a
              className="card-item-text-a"
              href="https://dubai-ferry.com/routes/#google_vignette"
            >
              Book
            </a>{" "}
          </button>
        </div>
      </div>
      <div className="Mobility-cards-item-link">
        <div className="card-item-pic-wrap">
          <img
            className="Mobility-cards-item-img"
            src={DubaiMetro}
            alt="FoodImg"
          />

          <h5 className="Mobility-card-item-text"> Dubai Metro</h5>
          <button className="Mobility-card-item-button">
            <a
              className="card-item-text-a"
              href="https://www.dubaicityguide.com/site/dubai-metro/metro_brochure.pdf"
            >
              How to Use
            </a>{" "}
          </button>
        </div>
      </div>
      <div className="Mobility-cards-item-link">
        <div className="card-item-pic-wrap">
          <img
            className="Mobility-cards-item-img"
            src={DubaiBus}
            alt="FoodImg"
          />

          <h5 className="Mobility-card-item-text"> Dubai Bus</h5>
          <button className="Mobility-card-item-button">
            <a
              className="card-item-text-a"
              href="https://www.bayut.com/mybayut/dubai-bus/"
            >
              How to Use
            </a>{" "}
          </button>
        </div>
      </div>

      <div className="Mobility-cards-item-link">
        <div className="card-item-pic-wrap">
          <img
            className="Mobility-cards-item-img"
            src={DubaiTram}
            alt="FoodImg"
          />

          <h5 className="Mobility-card-item-text"> Dubai Tram</h5>
          <button className="Mobility-card-item-button">
            <a
              className="card-item-text-a"
              href="https://www.rta.ae/wps/portal/rta/ae/public-transport/tram/about-tram"
            >
              How to USE
            </a>{" "}
          </button>
        </div>
      </div>
      <div className="Mobility-cards-item-link">
        <div className="card-item-pic-wrap">
          <img
            className="Mobility-cards-item-img"
            src={UberCareem}
            alt="FoodImg"
          />

          <h5 className="Mobility-card-item-text"> Online</h5>

          <a href="https://www.careem.com/en-AE/taxi/">
            <img
              className="Mobility-card-item-button-b"
              src={Careem}
              alt=""
            ></img>
          </a>
          <a href="https://www.uber.com/global/en/r/cities/dubai-dubai-ae/">
            <img
              className="Mobility-card-item-button-b"
              src={Uber}
              alt=""
            ></img>
          </a>
        </div>
      </div>
      <div className="Mobility-cards-item-link">
        <div className="card-item-pic-wrap">
          <img className="Mobility-cards-item-img" src={Lime} alt="FoodImg" />

          <h5 className="Mobility-card-item-text"> E-Scooters</h5>
          <a href="https://www.li.me/">
            <img className="card-item-btn" src={Limee} alt=""></img>
          </a>
          <a href="https://apps.apple.com/ae/app/arnab/id1618588748">
            <img className="card-item-btn" src={Arnab} alt=""></img>
          </a>
          <a href="https://www.tier.app/en/">
            <img className="card-item-btn" src={Tier} alt=""></img>
          </a>
          <a href="https://apps.apple.com/us/app/fenix-mobility-deliveries/id1530199872">
            <img className="card-item-btn" src={Fenix} alt=""></img>
          </a>
        </div>
      </div>

      <div className="Mobility-cards-item-link">
        <div className="card-item-pic-wrap">
          <img
            className="Mobility-cards-item-img"
            src={DubaiAirTaxi}
            alt="FoodImg"
          />

          <h5 className="Mobility-card-item-text"> Dubai Air Taxi</h5>
          <button className="Mobility-card-item-button">
            <a
              className="card-item-text-a"
              href="https://www.jobyaviation.com/news/joby-to-launch-air-taxi-service-uae/"
            >
              Know More
            </a>{" "}
          </button>
        </div>
      </div>
    </li>
  );
}

export default MobilityCardItem;
