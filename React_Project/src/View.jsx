import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Rectangle from './assets/Rectangle 1316.svg'

const View = () => {
  return (
    <>
    <div className="bigdiv">
    <div className="ourview">
        <div className="viewourproject">View our projects</div>
        <div className="btncls">
        <div className="Link">View More</div>
        <FaArrowRight className='arrlink'></FaArrowRight>
        </div>
    </div>
      <div className="leftright">
      <div className="left2">
            <img src={Rectangle} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default View