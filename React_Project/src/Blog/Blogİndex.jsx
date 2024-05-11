import React from "react";
import people from "./blog-assets/officepeople.svg";
import Blogdata from "./Blogdata";
import Footer from "../Footer";


const Blogİndex = () => {
  return (
    <>
      <div className="blog-main">
        <div className="title-blog">
          <p>A UX Case Study on Creating a </p>
          <p>Studious Environment for Students</p>
          <div className="desc-title"> Aykhan Posted on 27th January 2021</div>
        </div>
        <div className="img-blog">
          <img src={people} alt="" />
        </div>
        <div className="desc-img">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon of the sea to the level of the{" "}
          <p>spectator on a hillside.</p>
        </div>
        <div className="read-more">read more</div>
        <div className="our_blog">
        
        <Blogdata/>
        
        
        </div>
      </div>
        <Footer/>
    </>
  );
};

export default Blogİndex;
