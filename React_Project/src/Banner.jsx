import React from 'react';
import image from './assets/image.svg';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div>
        <div className="banner">
            <div className="container">
            <div className="left">
                <div className="header">
                <p>
                Building stellar websites for early startups
                </p>
                </div>
               <div className="footer">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
               </div>
            <div className="buttons">
                <div className="button1"><Link className='view' to={'/'}>View our work</Link></div>
                <div className="button2"><Link className='price' to ={'/'}>View pricing</Link></div>
            </div>
            </div>
            <div className="right">
                <img src={image} alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Banner