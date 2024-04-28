import React from 'react';
import './components/style.css';
import NavBar from './NavBar';
import { Route , Routes } from 'react-router';
import Home from './Home';
import Contact from './Contact';
import Help from './Help';

const App = () => {
    return (
        <div>
          
           <NavBar/>
           <Routes>
            

            <Route path='/' element = {<Home/>} />
            <Route path='/Contact' element = {<Contact/>} />
            <Route path='/Help' element = {<Help/>} />
           </Routes>
            
          
        </div>
      )

}

export default App
