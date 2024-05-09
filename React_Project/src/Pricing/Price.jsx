import React from "react";
import PriceCards from "./PriceCards";

const Price = () => {
  return (
    <>
      <div className="price-main">
        <div className="price-title">
          <div className="price-head">
            <div className="price-banner">Our Pricing Plans</div>

            <div className="price-footer">
              When you’re ready to go beyond prototyping in Figma, Webflow is
              ready to help you bring your designs to life — without coding
              them.
            </div>
          </div>
        </div>
        <PriceCards />
      </div>
    </>
  );
};

export default Price;
