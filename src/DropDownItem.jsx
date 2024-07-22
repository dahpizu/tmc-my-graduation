import React, { useState } from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { HiHomeModern } from "react-icons/hi2";

import { IoIosRestaurant } from "react-icons/io";
import { FaCarSide } from "react-icons/fa6";

import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";

function DropDownItem(props) {
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="dropdownItem">
      <li className="nav-item">
        <Link to="/Staycation/" className="nav-links">
          <HiHomeModern className="dropdownIcon" />

          <button className="D1">Shelter</button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/ArtCulture/" className="nav-links">
          <MdOutlineTravelExplore className="dropdownIcon" />
          <button className="D1">Explore</button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/FoodDrink/" className="nav-links">
          <IoIosRestaurant className="dropdownIcon" />
          <button className="D1">Food & Drinks</button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Mobility/" className="nav-links" onClick={closeMobileMenu}>
          <FaCarSide className="dropdownIcon" />
          <button className="D2">Mobility</button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Shopping/" className="nav-links" onClick={closeMobileMenu}>
          <FaCartShopping className="dropdownIcon" />
          <button className="D3">Shopping</button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/AboutMe/" className="nav-links" onClick={closeMobileMenu}>
          <MdAccountCircle className="dropdownIcon" />

          <button className="D2">About Me</button>
        </Link>
      </li>
      <li className="nav-item"></li>
    </div>
  );
}

export default DropDownItem;
