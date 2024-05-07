import React from 'react';
import { Route , Routes } from 'react-router';
import Restoran from './Restoran';
import Price from './Price';


const App = () => {
  return (
    <>
    <Routes>
      <Route path={'/'} element={<Restoran/>} />
      <Route path={'/Price/:id'} element={<Price/>}/>
    </Routes>
    </>


  )
}

export default App

