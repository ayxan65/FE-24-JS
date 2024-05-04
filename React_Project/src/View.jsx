import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import ourimg from './assets/ourwork.svg';

const View = () => {
  return (
    <>
    <div className="bigdiv">
    <div className="ourview">
        <div className="viewourproject">View our projects</div>
        <div className="btncls">
        <div className="Link">View More</div>
        <img src={ourimg} alt="" />
        <FaArrowRight className='arrlink'></FaArrowRight>
        </div>
    </div>
      <div className="leftright">
      <div className="left2">
           <div className="opacityimg"> 
           <p className='opp'>Workhub office Webflow Webflow Design</p>
          
           </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default View