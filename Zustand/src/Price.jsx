import React from 'react';
import { useState , useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Price = () => {
  const url = 'http://localhost:3000/restaurant';

fetch(url).then((res) => {
    return res.json()
}).then((data) => {
    data.map(({menu}) => {
    menu.map((a) => {
        console.log(a);
    })
    });
})
  return (
    
    <>
    <div>
      {
        menu.map(({menu})=>(
          <div>
            <h2>
              {menu}
            </h2>
            <h3></h3>

          </div>
        ))
      }
    </div>
    </>
  )
}

export default Price



