import React from "react";
import img1 from "./blog-assets/blog1.svg";
import img2 from "./blog-assets/blog2.svg";
import img3 from "./blog-assets/blog3.svg";
import img4 from "./blog-assets/blog4.svg";
import img5 from "./blog-assets/blog5.svg";
import img6 from "./blog-assets/new.svg";

const Blogdata = () => {
  const data = [
    {
      img: img1,
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      desc: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    },
    {
      img: img2,
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      desc: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    },
    {
      img: img3,
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      desc: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    },
    {
      img: img4,
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      desc: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    },
    {
      img: img5,
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      desc: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    },
    {
      img: img6,
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      desc: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    },
  ];
  return (
    <>
      <div className="big-cards">
        {data.map(({ img, title, desc }) => {
          return (
            <div className="small-cards">
              <div className="small-img">
                <img src={img} alt="" />
              </div>
              <div className="small-title">{title}</div>
              <div className="small-desc">{desc}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blogdata;
