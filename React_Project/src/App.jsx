import React from 'react';
import NavBar from './NavBar.jsx';
import Banner from "./Banner.jsx";
import { Route , Routes } from 'react-router';
import image from './assets/image.svg';
import pcimg from './assets/pcimg.svg';
import { Link } from 'react-router-dom';


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
            <Route path='/' element={<Banner title={veriables[0].basliq} desc={veriables[1].description} link={veriables[2].link} link2={veriables[3].link2} img={image}/>}></Route>

            <Route path='/Pricing' element={<Banner title={veriables[4].basliq2} desc={veriables[1].description}
             img={pcimg} link={veriables[5].link3}></Banner>}></Route>
        </Routes>
        
        
    </div>
)
}

export default App
