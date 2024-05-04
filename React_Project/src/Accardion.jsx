import React, { useState } from 'react';

const Accordion = ({ index,title, desc }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
       <div className="acdiv">
        <div className="bas">
        <div className='index'>{index}</div>
       <div>{title}</div>
        </div>
        <div>{isActive ? <span>-</span> : <span>+</span>}</div>
       </div>
      </div>
      {isActive && <div className="accordion-content">{desc}</div>}
      <hr />
    </div>
  );
};

export default Accordion;
