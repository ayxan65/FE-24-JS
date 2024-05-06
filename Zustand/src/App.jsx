import React from 'react';
import { Route , Routes } from 'react-router';
import Restoran from './Restoran';


const App = () => {
  return (
    <>
    <Routes>
      <Route path={'/'} element={<Restoran/>} />
    </Routes>
    </>


  )
}

export default App

