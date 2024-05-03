import React from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <div>
        <div className="main1">
            <div className="container1">
                <div className="left1">
                <div className="title1">How we work</div>
                <div className="footerr">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="getbtn">
                <Link to={'/'} className='Getbtn'>Get in touch with us</Link>
                </div>
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default Work