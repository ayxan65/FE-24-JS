import React from 'react';
import NavBar from './NavBar.jsx';
import { Route , Routes } from 'react-router';
import './css/homestyle.css';
import İndex from './Home/index.jsx';
import Feature from './Features/Feature.jsx';
import İnput from './Home/İnput.jsx'

function App() {

return(
    <>
        <NavBar/>
        <Routes>
            <Route path='/' element={<İndex/>}></Route>

            <Route path='/Features' element={<Feature/>}></Route>
            
        </Routes>
      
      </>
)
}

export default App
