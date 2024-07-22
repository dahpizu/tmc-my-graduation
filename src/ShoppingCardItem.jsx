import React from "react";

import MOE from "../src/image_/MOE.jpeg";
import IBN from "../src/images_/IBN.jpeg";
import CityWalk from "../src/images_/CityWalk.jpeg";
import BurjumanMall from "../src/images_/BurjumanMall.jpeg";
import WafiCity from "../src/images_/WafiCity.jpeg";
import DubaiMall from "../src/images_/DubaiMall.jpeg";

function ShoppingCardItem() {
  return (
    <li className="Shoopping-cards-item">
      <div className="Shopping-cards-item-link">
        <div className="Shopping-item-pic-wrap-2">
          <img className="Shopping-cards-item-img" src={MOE} alt="FoodImg" />

          <h5 className="Shopping-card-item-text">MALL OF EMIRATE</h5>
          <button className="Shopping-card-item-button">
            <a
              className="Shopping-card-item-text-a"
              href="https://www.google.com/maps/place/Mall+of+the+Emirates/@25.118107,55.1980331,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f6bbec39f339d:0x47afe5626875154c!8m2!3d25.118107!4d55.200608!16zL20vMDhwN3F4?entry=ttu"
            >
              SHOP
            </a>
          </button>
        </div>
      </div>
      <div className="Shopping-cards-item-link">
        <div className="Shopping-item-pic-wrap-2">
          <img
            className="Shopping-cards-item-img"
            src={DubaiMall}
            alt="FoodImg"
          />

          <h5 className="Shopping-card-item-text">Dubai Mall</h5>
          <button className="Shopping-card-item-button">
            <a
              className="Shopping-card-item-text-a"
              href="https://www.google.com/maps/place/Dubai+Mall/@25.1974428,55.276923,17z/data=!3m2!4b1!5s0x3e5f6829d585a26f:0xa2f9a6d6258c2d45!4m6!3m5!1s0x3e5f682829c85c07:0xa5eda9fb3c93b69d!8m2!3d25.1972295!4d55.279747!16zL20vMGJ4ZG40?entry=ttu"
            >
              SHOP
            </a>
          </button>
        </div>
      </div>
      <div className="Shopping-cards-item-link">
        <div className="Shopping-item-pic-wrap-2">
          <img className="Shopping-cards-item-img" src={IBN} alt="FoodImg" />

          <h5 className="Shopping-card-item-text"> IBN Battuta</h5>
          <button className="Shopping-card-item-button">
            <a
              className="Shopping-card-item-text-a"
              href="https://www.google.com/maps/place/Ibn+Battuta+Mall/@25.044552,55.1177223,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f436ae71d43a7:0xe8bbdded984af7dd!8m2!3d25.0445472!4d55.1202972!16zL20vMDdfNXJ6?entry=ttu"
            >
              SHOP
            </a>{" "}
          </button>
        </div>
      </div>
      <div className="Shopping-cards-item-link">
        <div className="Shopping-item-pic-wrap-2">
          <img
            className="Shopping-cards-item-img"
            src={CityWalk}
            alt="FoodImg"
          />

          <h5 className="Shopping-card-item-text"> City Walk</h5>
          <button className="Shopping-card-item-button">
            <a
              className="Shopping-card-item-text-a"
              href="https://www.google.com/maps/place/City+Walk/@25.2074943,55.2599504,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f4264371b53e7:0x8bd6cda3ab913cad!8m2!3d25.2074895!4d55.2625253!16s%2Fg%2F11tjz_m067?entry=ttu"
            >
              VISIT
            </a>{" "}
          </button>
        </div>
      </div>
      <div className="Shopping-cards-item-link">
        <div className="Shopping-item-pic-wrap-2">
          <img
            className="Shopping-cards-item-img"
            src={BurjumanMall}
            alt="FoodImg"
          />

          <h5 className="Shopping-card-item-text">Burjuman Mall</h5>
          <button className="Shopping-card-item-button">
            <a
              className="Shopping-card-item-text-a"
              href="https://www.google.com/maps/place/BurJuman/@25.2545277,55.3009201,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f436ae7a97b57:0x502d0604cd2571b6!8m2!3d25.2545229!4d55.303495!16zL20vMGRmeTVs?entry=ttu"
            >
              SHOP
            </a>
          </button>
        </div>
      </div>
      <div className="Shopping-cards-item-link">
        <div className="Shopping-item-pic-wrap-2">
          <img
            className="Shopping-cards-item-img"
            src={WafiCity}
            alt="FoodImg"
          />

          <h5 className="Shopping-card-item-text">Wafi City</h5>
          <button className="Shopping-card-item-button">
            <a
              className="Shopping-card-item-text-a"
              href="https://www.google.com/maps/place/Wafi+City/@25.2297691,55.3163767,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f5d35f0425a33:0x4ca1b0dbf1d7981b!8m2!3d25.2297643!4d55.3189516!16s%2Fm%2F03cx63b?entry=ttu"
            >
              VISIT
            </a>
          </button>
        </div>
      </div>
    </li>
  );
}

export default ShoppingCardItem;
