import React from 'react';
import bilb from '../assets/Aboutus/bilb.svg';

const Goals = () => {
  return (
    <>
<div className="Goal">
<div className="Goal-con">
        <div className="top">
            <div className="top-left">
                <div className="top-title">Who we are</div>
                <div className="top-header">Goal focussed</div>
                <div className="top-footer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </div>
            <div className="top-right">
                <div className="yy">ww</div>
            <div className="top-header">Continuous improvement</div>
            <div className="top-footer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>                
            </div>
        </div>
    </div>
    <div className="img-goal">
        <img className='imgbilb' src={bilb} alt="" />
    </div>
</div>
    </>
  )
}

export default Goals