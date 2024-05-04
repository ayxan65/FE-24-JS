import React from 'react';
import DesRec from './assets/DesingRec.svg';

const Desing = () => {
  return (
    <>
    <div className="maindesing">
        <div className="desingcontainer">
        <div className="centerdiv">
            <div>Features</div>
            <div className='solve'><p>Design that solves</p> <p>problems, one product at</p> <p>a time</p></div>
            <div className="boxes">
                <div className="box"><img src={DesRec} alt="" /></div>
                <div className="box"><img src={DesRec} alt="" /></div>
                <div className="box"><img src={DesRec} alt="" /></div>
                <div className="box"><img src={DesRec} alt="" /></div>
                <div className="box"><img src={DesRec} alt="" /></div>
                <div className="box"><img src={DesRec} alt="" /></div>
            </div>
        </div>
        </div>
    </div>
    </>


  )
}

export default Desing