import React from 'react';
import NavBar from './NavBar.jsx';
import Banner from "./Banner.jsx";
import { Route , Routes } from 'react-router';
import image from './assets/image.svg';
import pcimg from './assets/pcimg.svg';
import { Link } from 'react-router-dom';
import './css/homestyle.css';
import İndex from './Home/index.jsx';
import Feature from './Features/Feature.jsx';


function App() {


return(
    <div>
        <NavBar/>
        <Routes>
            <Route path='/' element={<İndex/>}></Route>

            <Route path='/Features' element={<Feature/>}></Route>
        </Routes>
        
        
        
    </div>
)
}

export default App
