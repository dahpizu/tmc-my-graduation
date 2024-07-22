import React from "react";
import Footer from "./Footer";
import MobilityCardItem from "./MobilityCardItem";

function MobilityCard() {
  return (
    <div className="Mobilitycard">
      <div className="overlay-box">
        <div className="card-overlay"></div>
      </div>

      <div className="card-content">
        <h1 className="card-texting">THIS IS DUBAI</h1>
        <p className="card-texting-p">
          When it comes to mobility in Dubai, there are various options
          available. From traditional taxis to ride-sharing services like Uber
          and Careem, getting around the city is convenient. Additionally, Dubai
          has an efficient metro system that connects key areas. If you're
          looking for a more luxurious experience, you can opt for private car
          services or even try the iconic Dubai Water Taxis for a unique way to
          travel around the city.
        </p>
        <div className="card-container">
          <div className="card-wrapper">
            <ul className="card-item">
              <MobilityCardItem />
              <Footer />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobilityCard;
