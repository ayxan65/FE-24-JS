import React from 'react';


const Problems = ({ img,color, head,title,desc}) => {

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
            <img src={img} alt="" />
        </div>
 
    </div>
    </>
  )
}

export default Problems