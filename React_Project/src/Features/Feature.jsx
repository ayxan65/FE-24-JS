import React from 'react'
import Banner from '../Banner'
import { Link } from 'react-router-dom';
import image from '../assets/pcimg.svg'
const Feature = () => {
    const veriables = [ {basliq:'Building stellar websites for early startups'},
 {description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
 {link:<Link className='view' to={'/'}>View our work</Link>},
 {link2:<Link className='price' to ={'/'}>View pricing</Link>},
 {basliq2:'All the features you need'},
 {link3:<Link className='view' to ={'/Pricing'}>View pricing</Link>}
]

  return (
    <div>
        <Banner title={veriables[0].basliq} desc={veriables[1].description} link={veriables[2].link} img={image}/>
    </div>
  )
}

export default Feature