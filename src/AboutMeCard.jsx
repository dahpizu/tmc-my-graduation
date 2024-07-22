import React from "react";
import AboutMeCardItem from "./AboutMeCardItem";
import Footer from "./Footer";
function AboutMeCard() {
  return (
    <div className="AboutMe-card">
      <div className="AboutMe-overlay-box">
        <div className="AboutMe-card-overlay"></div>
      </div>
      <div className="AboutMe-card-content">
        <h1 className="AboutMe-card-texting">Oladapo Hamzat</h1>
        <AboutMeCardItem />
        <p className="AboutMe-card-texting-p">
          A dedicated web developer with a deep passion for crafting vistually
          stunning and highly functional websites
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMeCard;
