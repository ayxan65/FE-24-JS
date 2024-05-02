import React from 'react';



const Banner = ({title,desc,img,link,link2}) => {
  return (
    <div>
        <div className="banner">
            <div className="container">
            <div className="left">
                <div className="header">
                
                <p>{title}</p>
                
                </div>
               <div className="footer">
                <p>{desc}</p>
               </div>
            <div className="buttons">
                <div className="button1">{link}</div>
                <div className="button2">{link2}</div>
            </div>
            </div>
            <div className="right">
                <img src={img} alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Banner