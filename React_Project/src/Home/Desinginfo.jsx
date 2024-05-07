import React from 'react'
import DesingData from './DesingData'

const Desinginfo = () => {
  return (
    <div>
            <div className="desingcontainer">
        <div className="centerdiv">
            <div className='features'>{tit}</div>
            <div className='solve'><p>{title}</p> <p>{subtitle}</p> <p>{subtitle2}</p></div>
            <div className="boxes">
              <DesingData/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Desinginfo