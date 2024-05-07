import React from 'react'
import BenefitsData from './BenefitsData'

const Benefits = () => {
  return (
    <>
    <div className="main-con-benefits">
        <div className="benefit-container">
            <div className="title-benefits">
                <p className='benefit-head'>The benefits of working </p>
                <p  className='benefit-head'>with us</p>
            </div>
            <div className="center-benefits">
                <BenefitsData/>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Benefits