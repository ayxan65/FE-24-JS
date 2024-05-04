import React from 'react';
import icon1 from './assets/Icon.svg';
import icon2 from './assets/ruler.svg';
import icon3 from './assets/ok.svg';
import icon4 from './assets/Icon8.svg';
import icon5 from './assets/some.svg';
import icon6 from './assets/ok2.svg'; 
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
                <div className="box"><img src={icon3} alt="" />
                <p>Hands-on approach</p> 
                <div>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </div></div>
                <div className="box"><img src={icon4} alt="" /> <p>Quick Delivery</p> 
                <div>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </div></div>
                <div className="box"><img src={icon5} alt="" /> <p>Template Customization</p> 
                <div>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </div></div>
                <div className="box"><img src={icon6} alt="" /> <p>24/7 Support</p> 
                <div>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </div></div>
                <div className="box"><img src={icon2} alt="" /> <p>Two Free Revision Round</p> 
                <div>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </div></div>
            </div>
        </div>
        </div>
    </div>
    </>


  )
}

export default Desing