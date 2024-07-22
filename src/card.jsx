import React from "react";
import CardItem from "./cardItem";
import "./card.css";
import Footer from "./Footer";

function Card() {
  return (
    <div className="C-card">
      <div className="overlay-box">
        <div className="card-overlay"></div>
      </div>

      <div className="card-content">
        <h1 className="card-texting">TASTE DUBAI</h1>
        <p className="card-texting-p">
          Dubai offers a diverse culinary scene with a mix of traditional
          Emirati dishes and international cuisine. Some must-try foods in Dubai
          include shawarma, falafel, hummus, Arabic sweets like baklava, and
          camel milk products. The city also boasts a vibrant food culture with
          various restaurants offering global flavors. When you're in Dubai,
          you've got to try some of the local favorites! Start with Shawarma, a
          delicious wrap filled with seasoned meat, veggies, and sauces. Then,
          don't miss out on Machboos, a flavorful rice dish with meat, spices,
          and dried fruits. And for dessert, indulge in Umm Ali, a traditional
          bread pudding with nuts and raisins. These dishes will give you a
          taste of the rich culinary culture in Dubai! Enjoy exploring the local
          flavors!
        </p>
        <div className="card-container">
          <div className="card-wrapper">
            <ul className="card-item">
              <CardItem />

              <Footer />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
