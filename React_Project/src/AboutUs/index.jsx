import React from 'react'
import Problems from './Problems'
import Goals from './Goals'
import Follow from './Follow'
import Desing from '../Home/Desing'
import Benefits from './Benefits'

const index = () => {
  return (
   <>
   <Problems color='white' head='About us' title='Our designs solve problems' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'/>
   <Goals/>
   <Follow/>
   <Problems color='rgba(238, 244, 250, 1)' head='Our vision' title='Laser focus' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'/>
   <Benefits/>
   </>
   
  )
}

export default index