import React from "react";
import StaycationCardItem from "./StaycationCardItem";
import Footer from "./Footer";

function StaycationCard() {
  return (
    <div className="ArtCard">
      <div className="overlay-box">
        <div className="card-overlay"></div>
      </div>
      <div className="card-content">
        <h1 className="card-texting">SLEEP IN DUBAI</h1>
        <p className="card-texting-p">
          Living in Dubai offers a luxurious lifestyle with a wide range of
          accommodation options. From high-end apartments with stunning views to
          lavish villas with private pools, Dubai caters to various preferences.
          The city is known for its modern amenities, impressive architecture,
          and vibrant expat community, making it an exciting place to call home.
        </p>
        <div className="card-container">
          <div className="card-wrapper">
            <ul className="card-item">
              <StaycationCardItem />
              <Footer />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StaycationCard;
