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

const veriables = [ {basliq:'Building stellar websites for early startups'},
 {description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
 {link:<Link className='view' to={'/'}>View our work</Link>},
 {link2:<Link className='price' to ={'/'}>View pricing</Link>},
 {basliq2:'All the features you need'},
 {link3:<Link className='view' to ={'/Pricing'}>View pricing</Link>}
]


return(
    <div>
        <NavBar/>
        <Routes>
            <Route path='/' element={<İndex/>}></Route>

            <Route path='/Features' element={<Feature title={veriables[4].basliq2} desc={veriables[1].description}
             img={pcimg} link={veriables[5].link3}></Feature>}></Route>
        </Routes>
        
        
        
    </div>
)
}

export default App
