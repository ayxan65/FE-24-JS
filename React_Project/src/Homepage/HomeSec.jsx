import React from 'react'
import { Link } from 'react-router-dom'
import image from './assets/Cards.svg'


const HomeSec = () => {
  return (
    <>
     <div className="mainsec">
     <div className="section">
          <div className="letfsec">
            <div className="title">How we work</div>
            <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
            <div className="getbtn"><Link className='getbtn' to={'/'}>Get in touch with us</Link></div>
          </div>
          <div className="rightsec">
            <div className="cards"><img src={image} alt="" />
            <div className="cardtitle"></div>
            <div className="cardfoot"></div>
            </div>
             </div>
        </div>
     </div>
        </>
  )
}

export default HomeSec