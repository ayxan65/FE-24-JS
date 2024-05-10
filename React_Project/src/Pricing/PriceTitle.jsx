import React from 'react'

const PriceTitle = ({title, desc}) => {

  return (
    <div>
        {
               <div className="price-title">
               <div className="price-head">
                 <div className="price-banner">{title}</div>
     
                 <div className="price-footer">
                  {desc}
                 </div>
               </div>
             </div>
        }
    </div>
  )
}

export default PriceTitle