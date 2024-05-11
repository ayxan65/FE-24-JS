import React from 'react';
import people from "./blog-assets/officepeople.svg";

const Blogtitle = ({margin,desc1,desc,read}) => {
  return (
    <div className='title-blog-main'>
         <div style={{marginTop:margin}} className="title-blog">
      <p>A UX Case Study on Creating a </p>
      <p>Studious Environment for Students</p>
      <div className="desc-title"> Aykhan Posted on 27th January 2021</div>
    </div>
    <div className="img-blog">
      <img src={people} alt="" />
    </div>
    <div className="desc-img">
     {desc1}
      <p>{desc}</p>
    </div>
    <div className="read-more">{read}</div>
    </div>
  )
}

export default Blogtitle