import React from 'react';
import Logo from './assets/Logo.svg';
import face from './assets/face.svg';
import insta from './assets/insta.svg';
import tw from './assets/tw.svg';
import linkedn from './assets/linkedn.svg';

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
          
           <div className="right-con">
          <div className="title-right-con">
          <div className="hrc">Lets Talk!</div>
          </div>
          <div className="foot-right-con">
          We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.
          </div>
          <div className="logos-right-con">
            <img src={face} alt="" />
            <img src={insta} alt="" />
            <img src={tw} alt="" />
            <img src={linkedn} alt="" />
          </div>
           </div>
        </div>
    </div>
    
    </>
  )
}

export default Footer