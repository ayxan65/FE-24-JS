import React from "react";
import Problems from "./Problems";
import Goals from "./Goals";
import Follow from "./Follow";
import Desing from "../Home/Desing";
import Benefits from "./Benefits";
import Meet from "./Meet";
import Footer from "../Footer";
import BenefitFooter from "../Home/BenefitFooter";
import people from "../assets/Aboutus/people.svg";
import Revision from "../Features/Revision";
import man from '../assets/Aboutus/whiteman.svg';
const index = () => {
  return (
    <>
      <Problems
        img={people}
        color="white"
        head="About us"
        title="Our designs solve problems"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />
      <Goals />
      <Follow />
      <Problems color='rgba(238, 244, 250, 1)' img={man} head='Our Mission' title='Inspire, Innovate, Share' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
      <Revision
        img={people}
        color="rgba(238, 244, 250, 1)"
        head="Our vision"
        title="Laser focus"
        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      />
      <Benefits title1="The benefits of working" title2="with us" />

      <Meet />
      <Footer />
    </>
  );
};

export default index;
