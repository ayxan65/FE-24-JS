import React from 'react';
import people from '../assets/Aboutus/people.svg';

const Problems = ({color, head,title,desc}) => {

  return (
    <>
    <div style={{backgroundColor:color}}  className="question-container">
     
     <div className="prob-left">
           <div style={{fontSize:'18px'}} className="first-prob">
            {head}
           </div>
           <div className="second-prob">
           {title}
           </div>
           <div className="third-prob">
            {desc}
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