import React from 'react';
import Logo from './assets/Logo.svg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <div>
        
        <div className="Nav">
        <div className="Navcontainer">
       <Link to={'/'}> <img src={Logo}alt="" /></Link>
        <div className="links">
          
            
              <NavLink className='navlinks' to={'/'}>Home</NavLink>
              <NavLink className='navlinks' to={'/Aboutus'}>About us</NavLink>
              <NavLink className='navlinks' to={'/Features'}>Features</NavLink>
              <NavLink className='navlinks' to={'/Pricing'}>Pricing</NavLink>
              <NavLink className='navlinks' to={'/faq'}>FAQ</NavLink>
              <NavLink className='navlinks' to={'/Blog'}>Blog</NavLink>
              <Link className='button' to={'/contact'}>Contact us</Link>

           
          
        </div>

        </div>

        </div>
    </div>
  )
}

export default NavBar