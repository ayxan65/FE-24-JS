import React from 'react'
import Problems from './Problems'
import Goals from './Goals'
import Follow from './Follow'

const index = () => {
  return (
   <>
   <Problems head='About us' title='Our designs solve problems' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'/>
   <Goals/>
   <Follow/>
   <Problems head='Our vision' title='Laser focus' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'/>

   </>
   
  )
}

export default index