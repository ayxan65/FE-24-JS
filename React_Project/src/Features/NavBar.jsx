import React from 'react';
import Logo from '/assets/Logo.svg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const links = [{to:'/',title:'Home'},
                {to:'/Aboutus',title:'About us'},
                {to:'/Features',title:'Features'},
                {to:'/Pricing',title:'Pricing'},
                {to:'/faq',title:'FAQ'},
                {to:'/Blog',title:'Blog'},
                
]

  return (
    <div>
        
        <div className="Nav">
        <div className="Navcontainer">
       <Link to={'/'}> <img src={Logo}alt="" /></Link>
        <div className="links">
             
          {
            links.map(({to,title})=>{
              return <NavLink className='navlinks' to={to}>{title}</NavLink>
            })
           
          }
            <Link className='button' to={'/contact'}>Contact us</Link>

           
          
        </div>

        </div>

        </div>
    </div>
  )
}

export default NavBar