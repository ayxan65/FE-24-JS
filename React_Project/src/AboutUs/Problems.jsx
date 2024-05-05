import React from 'react';
import people from '../assets/Aboutus/people.svg';

const Problems = () => {
  return (
    <>
    <div className="question-container">
     
     <div className="prob-left">
           <div style={{fontSize:'18px'}} className="first-prob">
            About us
           </div>
           <div className="second-prob">
           Our designs solve problems
           </div>
           <div className="third-prob">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
           </div>

        </div>
        <div className="img-div-prob">
            <img src={people} alt="" />
        </div>
 
    </div>
    </>
  )
}

export default Problems