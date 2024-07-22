import React from "react";
import Rove from "../src/images_/rove.jpeg";
import RoveRoom from "../src/images_/RoveRooms.jpeg";
import HolidayInn from "../src/images_/HolidayInn.jpeg";
import HolidayInnRooms from "../src/images_/HolidayInnRooms.jpeg";
// import Gevora from "../src/images/gevora.jpeg";
// import GevoraRooms from "../src/images/gevorarooms.jpeg";
// import RoyalAscot from "../src/images/RoyalAscot.jpeg";
// import RoyalAscotRooms from "../src/images/RoyalAscotRooms.jpeg";
import Atlantis from "../src/images_/Atlanntis.jpeg";
import AtlantisRooms from "../src/images_/AtlantisRooms.jpeg";

function StaycationCardItem() {
  return (
    <li className="Staycation-cards-item">
      <div className="staycation-div">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="front-card">
              <img className="hotel-img" src={Rove} alt="" />
            </div>
            <div className="back-card">
              <img className="hotel-img" src={RoveRoom} alt="" />
            </div>
          </div>
          <h1>Rove Expo City Hotel</h1>
          <h5 className="Staycation-card-texting-p">
            The First Hotel at Expo City Dubai Within walking distance from
            Dubai Exhibition Centre
          </h5>
          <button className="booking-btn">
            <a
              className="booking-btn-a"
              href="https://www.rovehotels.com/en/hotels/rove-expo-2020/"
            >
              Book
            </a>
          </button>
        </div>
      </div>
      <div className="staycation-div">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="front-card">
              <img className="hotel-img" src={HolidayInn} alt="" />
            </div>
            <div className="back-card">
              <img className="hotel-img" src={HolidayInnRooms} alt="" />
            </div>
          </div>
          <h1>Holiday Inn al-Maktoum Airport</h1>
          <h5 className="Staycation-card-texting-p">
            Located next to Jebel Ali, five minutes from Al Maktoum
            International Airport and near top attractions such as Dubai Parks &
            Resorts and Expo City.
          </h5>
          <button className="booking-btn">
            <a
              className="booking-btn-a"
              href="https://www.ihg.com/holidayinn/hotels/us/en/dubai/dxbwc/hoteldetail"
            >
              Book
            </a>
          </button>
        </div>
      </div>
      <div className="staycation-div">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="front-card">
              <img className="hotel-img" src={Atlantis} alt="" />
            </div>
            <div className="back-card">
              <img className="hotel-img" src={AtlantisRooms} alt="" />
            </div>
          </div>
          <h1>Atlantis The Royal</h1>
          <h5 className="Staycation-card-texting-p">
            THIS IS THE MOST ULTRA-LUXURY EXPERIENTIAL RESORT IN THE WORLD
          </h5>
          <button className="booking-btn">
            <a
              className="booking-btn-a"
              href="https://www.atlantis.com/atlantis-the-royal?gad_source=1&gclid=Cj0KCQjwv7O0BhDwARIsAC0sjWO7ao7OCBW_6694HZOr1rXUQmoxPm4Fm0FvogJkxyMxw9NB3KdsVGAaAv1HEALw_wcB"
            >
              Book
            </a>
          </button>
        </div>
      </div>
    </li>
  );
}

export default StaycationCardItem;
