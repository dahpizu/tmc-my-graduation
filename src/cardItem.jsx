import React from "react";

import TheLink from "../src/images_/TheLink.webp";
import DinnerSky from "../src/images_/DinnerSky.jpeg";
import Fila from "../src/images/Fila.webp";
import OrderOnline from "../src/images_/OrderOnline.webp";
import Talabat from "../src/images_/Talabat.webp";
import Deliveroo from "../src/images_/Deliveroo.png";
import Careem from "../src/images_/Careem.jpeg";
import Noon from "../src/images_/Noon.jpeg";
import UberEats from "../src/images_/UberEats.png";
import EasyEats from "../src/images_/Eateasy.png";

function CardItem() {
  return (
    <li className="cards-item">
      <div className="cards-item-link">
        <div className="card-item-pic-wrap">
          <img className="cards-item-img" src={TheLink} />

          <h5 className="card-item-text">The LINK</h5>
          <p className="card-item-text-p">
            a captivating restaurant and bar destination, floating 100 metres
            above the city.
          </p>
          <button className="card-item-button">
            <a
              className="card-item-text-a"
              href="https://www.thelinkdubai.com/"
            >
              Order
            </a>
          </button>
        </div>
      </div>
      <div className="cards-item-link">
        <div className="card-item-pic-wrap">
          <img className="cards-item-img" src={DinnerSky} alt="FoodImg" />
          <h5 className="card-item-text">Dinner In The Sky</h5>
          <p className="card-item-text-p">
            Enjoy The Ultimate Dinner in the Sky
          </p>
          <button className="card-item-button">
            <a className="card-item-text-a" href="https://dinnerinthesky.ae/">
              Order
            </a>{" "}
          </button>
        </div>
      </div>
      <div className="cards-item-link">
        <div className="card-item-pic-wrap">
          <img className="cards-item-img" src={Fila} alt="FoodImg" />
          <h5 className="card-item-text">Fi’lia, Business Bay</h5>
          <button className="card-item-button">
            <a
              className="card-item-text-a"
              href="https://restaurantsandbars.accor.com/en/restaurant/B5B0_R001"
            >
              GET
            </a>
          </button>
        </div>
      </div>
      <h1 className="card-texting">Order Online</h1>
      <div className="cards-item-link">
        <div className="card-item-pic-wrap">
          <img className="cards-item-img" src={OrderOnline} alt="FoodImg" />
          <h5 className="card-item-text">
            6 Popular Online Food Delivery Apps in Dubai, UAE
          </h5>{" "}
          <a href="https://www.talabat.com/uae">
            <img className="card-item-btn" src={Talabat} alt=""></img>
          </a>
          <a href="https://deliveroo.ae/">
            <img className="card-item-btn" src={Deliveroo} alt=""></img>
          </a>
          <a href="https://www.careem.com/en-AE/food/">
            <img className="card-item-btn" src={Careem} alt=""></img>
          </a>
          <a href="https://food.noon.com/">
            <img className="card-item-btn" src={Noon} alt=""></img>
          </a>
          <a href="https://www.ubereats.com/">
            <img className="card-item-btn" src={UberEats} alt=""></img>
          </a>
          <a href="https://www.eateasy.ae/dubai?gclid=CjwKCAjwqMO0BhA8EiwAFTLgIIvZdYMKc6GewUbakkYN09GEhzcXPB5XRL0ux7Oxm2XbCuw-ZHRUhBoCxRwQAvD_BwE#">
            <img className="card-item-btn" src={EasyEats} alt=""></img>
          </a>
        </div>
      </div>
    </li>
  );
}

export default CardItem;
