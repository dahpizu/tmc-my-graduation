import React from "react";
import DropDownItem from "./DropDownItem";
import { SiReact } from "react-icons/si";
import { Link } from "react-router-dom";
import Home from "./Home";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="nav-logo">
            <SiReact />
            <h2>Do-Buy</h2>
          </Link>
          <div className="nav-menu">
            <DropDownItem className="dropdownItems" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
