import React from "react";
import { LuBadgeDollarSign } from "react-icons/lu";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoTiktok } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function FooterItem() {
  return (
    <div className="footer">
      <div className="row">
        <div className="col">
          <LuBadgeDollarSign className="FooterIcon" />

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
            eius?
          </p>
        </div>
        <div className="col">
          <h3>
            Office{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <p>Dubai</p>
          <p>United Arab Emitate</p>
          <h4>+971 54 378 3584</h4>
          <p className="email">hamzathorladapo@yahoo.com</p>
        </div>
        <div className="col">
          <h3>
            Links{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <a href="" className="media-links">
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a href="" className="media-links">
                <BsTwitterX />
              </a>
            </li>
            <li>
              <a href="" className="media-links">
                <IoLogoTiktok />
              </a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>
            Contact Me
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <form>
            <FaEnvelope className="envelope" />

            <input type="email" placeholder="Enter Your Email" required></input>
            <button type="submit">
              <FaArrowRight className="form-btn" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FooterItem;
