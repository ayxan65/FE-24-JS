import React from 'react'
import BenefitsData from './BenefitsData'
import BenefitFooter from '../Home/BenefitFooter'

const Benefits = ({title1, title2}) => {
  return (
    <>
    <div className="main-con-benefits">
        <div className="benefit-container">
            <div className="title-benefits">
                <p className='benefit-head'>{title1} </p>
                <p  className='benefit-head'>{title2}</p>
            </div>
            <div className="center-benefits">
                <BenefitsData/>
            </div>
            <div className="benefit-footer">
            <BenefitFooter/>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Benefits