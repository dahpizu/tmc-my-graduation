import React, { useState } from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { HiHomeModern } from "react-icons/hi2";

import { IoIosRestaurant } from "react-icons/io";
import { FaCarSide } from "react-icons/fa6";

import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import SearchIcon from "../src/images_/search.png";
import HotelIcon from "../src/images_/sleepicon.png";
import ShoppingIcon from "../src/images_/shoppingcartt.png";
function DropDownItem() {
  return (
    <div className="dropdownItem">
      <li className="nav-item">
        <div className="nav-links">
          <MdOutlineTravelExplore className="dropdownIcon" />
          <button className="D1">Explore</button>
        </div>
      </li>
      <li className="nav-item">
        SERVICE
        <div className="nav-links">
          <ul>
            <Link to="/Staycation/">
              <DropDownThings img={HotelIcon} text={"Book an Hotel"} />
            </Link>

            <Link to="/Shopping/">
              <DropDownThings img={ShoppingIcon} text={"GO SHOPPING"} />
            </Link>
          </ul>
        </div>
      </li>
      <li className="nav-item">
        <Link to="/Mobility/" className="nav-links">
          <FaCarSide className="dropdownIcon" />
          <button className="D2">Mobility</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/AboutMe/" className="nav-links">
          <MdAccountCircle className="dropdownIcon" />

          <button className="D2">About</button>
        </Link>
      </li>
    </div>
  );
}

function DropDownThings(props) {
  return (
    <li className="DropDownThings-Items">
      <div className="DropDownThings-icon">
        <img className="DropDownThings-img" src={props.img}></img>
      </div>
      <div className="DropDownThings-text">
        <a className="DropDownThings-texts">{props.text} </a>
      </div>
    </li>
  );
}

export default DropDownItem;
