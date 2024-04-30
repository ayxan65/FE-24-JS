import React from 'react';
import NavBar from './NavBar.jsx';
import Banner from "./Banner.jsx";
import { Route , Routes } from 'react-router';
import image from './assets/image.svg';
import pcimg from './assets/pcimg.svg';
import { Link } from 'react-router-dom';


function App() {

return(
    <div>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Banner title='Building stellar websites for early startups' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' link={<Link className='view' to={'/'}>View our work</Link>} link2={<Link className='price' to ={'/'}>View pricing</Link>} img={image}/>}></Route>

            <Route path='/Pricing' element={<Banner title='All the features you need' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
             img={pcimg} link={<Link className='view' to ={'/Pricing'}>View pricing</Link>}></Banner>}></Route>
        </Routes>
        
        
    </div>
)
}

export default App
