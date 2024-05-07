import React from 'react';
import icon1 from '../assets/Icon.svg';
import icon2 from '../assets/ruler.svg';
import icon3 from '../assets/ok.svg';

const BenefitsData = () => {
    const Data =[
        {   img:icon1,
            title:'Uses Client First',
            desc:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.'
        },
        {  img:icon2,
            title:'Hands-on approach',
            desc:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.'
        },
        {  img:icon3,   
            title:'Quick Delivery',
            desc:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.'
        }]
  return (
    <>
           {
        Data.map(({title,desc,img})=>{
            return <div className="box-bene">
                <img src={img} alt="" />
                <p>{title}</p>
            <div>{desc}</div>
            </div>
        })
      } 

    </>
  )
}

export default BenefitsData