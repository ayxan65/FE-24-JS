import React from 'react';
import img1 from '../assets/Aboutus/logoipsum.svg';
import img2 from '../assets/Aboutus/logoipsum1.svg';
import img3 from '../assets/Aboutus/logoipsum2.svg';
import img4 from '../assets/Aboutus/logoipsum3.svg';
import img5 from '../assets/Aboutus/logoipsum4.svg';


const BenefitFooter = () => {
  return (
    <>
        <div className="users-ben">
            <p className='hundered'>100.000+</p>
            <p>Finsweet Users</p>
        </div>
        <div className="image-ben"><img src={img1} alt="" /></div>
        <div className="image-ben"><img src={img2} alt="" /></div>
        <div className="image-ben"><img src={img3} alt="" /></div>
        <div className="image-ben"><img src={img4} alt="" /></div>
        <div className="image-ben"><img src={img5} alt="" /></div>
    </>
  )
}

export default BenefitFooter