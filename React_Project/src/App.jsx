import React from 'react';
import NavBar from './NavBar.jsx';
import { Route , Routes } from 'react-router';
import './css/homestyle.css';
import İndex from './Home/index.jsx';
import Feature from './Features/Feature.jsx';
import About from './AboutUs/index.jsx';
import Price from './Pricing/Price.jsx';


function App() {

return(
    <>
        <NavBar/>
        <Routes>
            <Route path='/' element={<İndex/>}></Route>
             <Route path='/Pricing' element={<Price/>}></Route>   
            <Route path='/Features' element={<Feature/>}></Route>
            <Route path='/Aboutus' element={<About/>}></Route>
        </Routes>
        
      
      </>
)
}

export default App
