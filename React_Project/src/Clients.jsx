import React from 'react';
import personimg from './assets/person.svg';
import { FaArrowCircleRight } from 'react-icons/fa';

const Clients = () => {
  return (
    <>
    <div className="Clientmain">
        <div className="client-container">
            <div className="client-left">
                <div className="client-header">
                What our clients say about us
                </div>
                <div className="client-footer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
                </div>
            </div>
            <div className="client-right">
            <div className="right-header">
            "The best agency we've worked with so far. They understand our product and are able to add new features with a great focus."
            </div>
           <div className="right-footer">
           <div className="persondata">
                <img src={personimg} alt="" />
             <div className="person">
             <div className="person-name">
             Jenny Wilson
</div>
<div className="person-title">Vice President</div>
             </div>
            </div>
            <div className="arrows">
                <FaArrowCircleRight className='arrow'/>
            </div>
           </div>
             
            </div>
        </div>
    </div>

    </>
  )
}

export default Clients