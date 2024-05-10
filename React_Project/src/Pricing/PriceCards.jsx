import React from "react";
import img1 from "../assets/Price/data1.svg";
import img2 from "../assets/Price/data2.svg";
import img3 from "../assets/Price/data3.svg";

const PriceCards = () => {
  return (
    <>
      <div className="price-cards-div">
        {/* reactive yaza bilmedim :( */}
        <div className="price-card-div">
          <div className="container-price-div">
            <div className="number-price">$299</div>
            <div className="header-cards">Landing Page</div>
            <div className="title-cards">
              When you’re ready to go beyond prototyping in Figma,
            </div>
            <img src={img1} alt="" />
            <div className="price-button">
              <button id="button3">Get stared</button>
            </div>
          </div>
        </div>
        <div className="price-card-div">
          <div className="container-price-div">
            <div className="number-price">$399</div>
            <div className="header-cards">Website Page</div>
            <div className="title-cards">
              When you’re ready to go beyond prototyping in Figma,
            </div>
          
            <img src={img2} alt="" />
            <div className="price-button">
              <button id="button2">Get stared</button>
            </div>
          </div>
        </div>
        <div className="price-card-div">
          <div className="container-price-div">
            <div className="number-price">$499</div>
            <div className="header-cards">Complex Project</div>
            <div className="title-cards">
              When you’re ready to go beyond prototyping in Figma,
            </div>
            <img src={img3} alt="" />
            <div className="price-button">
              <button id="button">Get stared</button>
            </div>
          </div>
        </div>
      </div>
    </>
    // bu koda göre bütün react developerlerden üzr isteyirem
  );
};

export default PriceCards;
