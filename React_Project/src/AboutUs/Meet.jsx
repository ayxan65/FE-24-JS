import React from 'react';
import img1 from '../assets/Aboutus/linkman.svg';
import img2 from '../assets/Aboutus/simon.svg';
import img3 from '../assets/Aboutus/paul.svg';
import img4 from '../assets/Aboutus/sara.svg';


const Meet = () => {
  return (
    <>
    <div className="main-meet">
    <div className="main-meet2">
    <div className="title-meet">
            Meet our team
        </div>
        <div className="cards-meet">
            <div className="card-meet"><img src={img1} alt="" />
            <p className='tit-ben'>John Smith</p>
            <p className='foot-ben'>CEO</p></div>


            <div className="card-meet">
                <img src={img2} alt="" />
                 <p className='tit-ben'> Simon Adams</p>
            <p className='foot-ben'>CTO</p></div>


            <div className="card-meet">
                <img src={img3} alt="" />
                 <p className='tit-ben'>Paul Jones</p>
            <p className='foot-ben'>Design Lead</p></div>


            <div className="card-meet"> 
            <img className='sara' src={img4} alt="" />
            <p className='tit-ben'>Sara Hardin</p>

            <p className='foot-ben'>Project Manager</p></div>


        </div>
    </div>
    </div>
    
    
    </>
  )
}

export default Meet