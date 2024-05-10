import React from 'react'
import NameEmail from './NameEmail'
import Message from './Message'


const ContactContainer = () => {
  return (
    <>
    
    <div className="contact-main">
        <div className="contact-container">
          <div className="padding-div">
          <NameEmail title1='Name' title2='Email'/>
          <NameEmail title1='Subject' title2='Subject'/>
          <Message/>
          </div>
         

        </div>
    </div>

    </>
  )
}

export default ContactContainer