import React from 'react'
import img1 from '../assets/Price/data1.svg';
import img2 from '../assets/Price/data2.svg';
import img3 from '../assets/Price/data3.svg';

const PriceCardsData = () => {
    const data = [
        {
            price:299,
            title:'Landing Page',
            desc:'When you’re ready to go beyond prototyping in Figma',
            img:img1

        },
        {
            price:399,
            title:'Website Page ',
            desc:'When you’re ready to go beyond prototyping in Figma',
            img:img2

        },
        {
            price:499,
            title:'Complex Project',
            desc:'When you’re ready to go beyond prototyping in Figma',
            img:img3

        }

    ]
  return (
    <>
    <div className="price-cards">
         
        <div className="container-price">
        {
            data.map(({price,title,desc,img})=>{
               <div></div>
                

            })
        }
        </div>
    </div>
    
    </>
  )
}

export default PriceCardsData