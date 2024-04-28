import React from 'react';
import './css/style.css';
import NavBar from './NavBar';
import { Route , Routes } from 'react-router';
import Home from './Home';
import Contact from './Contact';
import Help from './Help';
import Users from './Users';
import UsersDetails from './UsersDetails';

const App = () => {
    return (
        <div>
          
           <NavBar/>
           <Routes>
            

            <Route path='/' element = {<Home/>} />
            <Route path='/Contact' element = {<Contact/>} />
            <Route path='/Help' element = {<Help/>} />
            <Route path='/Users' element = {<Users/>}/>
            <Route path='/user/:id' element = {<UsersDetails/>}/>
           </Routes>
          
            
          
        </div>
      )

}

export default App
