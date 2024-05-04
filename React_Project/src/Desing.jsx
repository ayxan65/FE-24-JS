import React from 'react';
import icon1 from './assets/Icon.svg';

const Desing = () => {
  return (
    <>
    <div className="maindesing">
        <div className="desingcontainer">
        <div className="centerdiv">
            <div>Features</div>
            <div className='solve'><p>Design that solves</p> <p>problems, one product at</p> <p>a time</p></div>
            <div className="boxes">
                <div id='salam' className="box"><img src={icon1} alt="" />
                <p>Uses Client First</p> 
                <div>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </div>
                </div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        </div>
        </div>
    </div>
    </>


  )
}

export default Desing