import React from 'react'

const NameEmail = ({title1,title2}) => {
  return (
    <div>
          <div style={{marginTop:'2em'}} className="name-email">
             <div className="name">
                <div className="name">{title1}</div>
                <input className='nameinput' type="text" />
             </div>
             <div className="email">
                <div className="email">{title2}</div>
                <input className='nameinput' type="text" />
             </div>
           </div>
    </div>
  )
}

export default NameEmail