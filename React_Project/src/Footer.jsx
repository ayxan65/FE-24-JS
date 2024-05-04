import React from 'react';
import Logo from './assets/Logo.svg';

const Footer = () => {
  return (
    <>
    <div className="footer-main">
        <div className="footer-con">
            <div className="left-con">
            <img src={Logo} alt="" />
            <div className="con-left-footer">
            We are always open to discuss your project and improve your online presence.
            </div>
            </div>
           
        </div>
            <div className="yellow-div">
<div className="infosfoot">
    <div className="emails">
    <div className="email">Email me at</div>
            <div className="eyazi" >contact@website.com</div>
    </div>
 <div className="phones">   <div className="phone">Call us</div>
    <div className="pinfo">0927 6277 28525</div></div>
</div>
            </div>
          
    </div>
    
    </>
  )
}

export default Footer