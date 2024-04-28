import React from 'react'
import './css/style.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  
  return (
    <div>
        <div className="navbar">
            <Link className='links' to={'/'}>Home</Link>
            <Link className='links' to={'./Help'}>Help</Link>
            <Link className='links' to={'/Contact'}>Contact</Link>
            <Link className='links' to={'/Users'}>Users</Link>



        </div>
    </div>
  )
}

export default NavBar