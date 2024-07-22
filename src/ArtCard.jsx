import React from "react";
import Footer from "./Footer";
import "./card.css";
import ArtCardItem from "./ArtCardItem";

function ArtCard() {
  return (
    <div className="Card">
      <div className="overlay-box">
        <div className="card-overlay"></div>
      </div>

      <div className="card-content">
        <h1 className="card-texting">THIS IS DUBAI</h1>
        <p className="card-texting-p">
          Dubai is a vibrant city with so much to explore. You could visit the
          iconic Burj Khalifa, wander around the Dubai Marina, explore the
          traditional souks, or relax at Jumeirah Beach. There's also the Dubai
          Mall for shopping and entertainment.Dubai is a fascinating city known
          for its modern architecture, luxurious shopping, and vibrant
          nightlife. It's home to the world's tallest building, the Burj
          Khalifa, and the Palm Jumeirah, an artificial archipelago. You can
          explore traditional markets like the Gold Souk and Spice Souk, or
          enjoy the stunning views from the Dubai Fountain. Don't forget to
          experience the desert safari adventures and perhaps indulge in some
          luxury dining experiences. Dubai truly offers a mix of traditional
          charm and modern extravagance. Enjoy your time exploring Dubai!!
        </p>
        <div className="card-container">
          <div className="card-wrapper">
            <ul className="card-item">
              <ArtCardItem />
              <Footer />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ArtCard;
