import React from 'react'
import Problems from './Problems'
import Goals from './Goals'
import Follow from './Follow'
import Desing from '../Home/Desing'
import Benefits from './Benefits'
import Meet from './Meet'
import Footer from '../Footer'
import BenefitFooter from '../Home/BenefitFooter'
import people from '../assets/Aboutus/people.svg';
const index = () => {
  return (
   <>
   <Problems img={people} color='white' head='About us' title='Our designs solve problems' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'/>
   <Goals/>
   <Follow/>
   <Problems img={people} color='rgba(238, 244, 250, 1)' head='Our vision' title='Laser focus' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'/>
   <Benefits title1='The benefits of working' title2='with us'/>
   
   <Meet/>
   <Footer/>
   </>
   
  )
}

export default index