import React from 'react';
import Banner from '../Banner';
import Work from '../Work';
import { Link } from 'react-router-dom';
import image from '../assets/image.svg';
import View from '../View';
import Desing from '../Desing';
import Clients from '../Clients';
import Questions from './Questions';
import İnput from './İnput'


const İndex = () => {
  const veriables = [ {basliq:'Building stellar websites for early startups'},
 {description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
 {link:<Link className='view' to={'/'}>View our work</Link>},
 {link2:<Link className='price' to ={'/'}>View pricing</Link>},
 {basliq2:'All the features you need'},
 {link3:<Link className='view' to ={'/Pricing'}>View pricing</Link>}
]

  return (
    <div>
        <Banner title={veriables[0].basliq} desc={veriables[1].description} link={veriables[2].link} link2={veriables[3].link2} img={image}/>
        <Work/>
        <View/>
        <Desing/>
        <Clients/>
        <Questions/>
        <İnput/>


    </div>
  )
}
// <İndex title={veriables[0].basliq} desc={veriables[1].description} link={veriables[2].link} link2={veriables[3].link2} img={image}/>}>
export default İndex