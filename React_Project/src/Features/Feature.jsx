import React from "react";
import Banner from "../Banner";
import { Link } from "react-router-dom";
import image from "../assets/pcimg.svg";
import Benefits from "../AboutUs/Benefits";
import Problems from "../AboutUs/Problems";
import boy from "./featureimmg/boy.svg";
import Revision from "./Revision";
import office from "./featureimmg/office.svg";

const Feature = () => {
  const veriables = [
    { basliq: "Building stellar websites for early startups" },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      link: (
        <Link className="view" to={"/"}>
          View our work
        </Link>
      ),
    },
    {
      link2: (
        <Link className="price" to={"/"}>
          View pricing
        </Link>
      ),
    },
    { basliq2: "All the features you need" },
    {
      link3: (
        <Link className="view" to={"/Pricing"}>
          View pricing
        </Link>
      ),
    },
  ];

  return (
    <>
      <Banner
        title={veriables[0].basliq}
        desc={veriables[1].description}
        link={veriables[2].link}
        img={image}
      />
      <Benefits title1="The benefits of working" title2="with our team" />
      <Problems
        img={boy}
        color="white"
        head="Use Client-First"
        title="Top agencies and freelancers around the world use 
Client-first "
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />
      <Revision
        img={office}
        color=" 
rgba(244, 246, 252, 1)"
height='500px'
 title='Get free Revisions and one week of free maintenance'

      />
    </>
  );
};

export default Feature;
