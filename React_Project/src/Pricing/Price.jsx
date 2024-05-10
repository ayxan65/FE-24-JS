import React from "react";
import PriceCards from "./PriceCards";
import PriceTitle from "./PriceTitle";

const Price = () => {
  return (
    <>
      <div className="price-main">
        <PriceTitle title='Our Pricing Plans' desc=' When you’re ready to go beyond prototyping in Figma, Webflow is
                   ready to help you bring your designs to life — without coding
                   them.'/>
        <PriceCards />
      </div>
    </>
  );
};

export default Price;
