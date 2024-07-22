import React from "react";
import ShoppingCardItem from "./ShoppingCardItem";
import Footer from "./Footer";

function ShoppingCard() {
  return (
    <div className="Shoppingcard">
      <div className="overlay-box">
        <div className="card-overlay"></div>
      </div>

      <div className="card-content">
        <h1 className="card-texting">Shopping in DUBAI</h1>
        <p className="card-texting-p">
          When it comes to shopping in Dubai, there are plenty of fantastic
          options to explore! You can check out the Dubai Mall, which is a
          shopper's paradise located in Downtown Dubai. It offers a wide range
          of shops, restaurants, and even entertainment options like an aquarium
          and an ice rink. It's a must-visit destination for any shopping
          enthusiast!. In addition to the Dubai Mall, you might want to explore
          the Mall of the Emirates, known for its luxury brands and indoor ski
          slope, perfect for a unique shopping experience. Another popular spot
          is the Ibn Battuta Mall, which is inspired by the travels of the
          famous explorer Ibn Battuta and offers a variety of shops and dining
          options themed around different countries. These malls provide diverse
          shopping experiences that cater to different tastes and preferences.
          Happy shopping!
        </p>
        <div className="card-container">
          <div className="card-wrapper">
            <ul className="card-item">
              <ShoppingCardItem />
              <Footer />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCard;
