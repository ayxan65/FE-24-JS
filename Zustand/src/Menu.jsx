import React from 'react';
import { useState , useEffect } from 'react';
import axios from 'axios';

const Menu = () => {
  const [restoran, setRestoran] = useState([]);
    const url = 'http://localhost:3000/restaurant/';

  useEffect(()=>{
    const GetData =async()=>{
        const {data}= await axios.get(url);
       console.log(data);
        setRestoran(data)
    }
    GetData();
  },[])
  return (
    < >
   <div className="menudiv">
     
   {
            restoran.map(({name,rating,capacity})=>(
                <div className='namediv' key={name}>
                    <h1>{name}</h1>
                    <h2>{rating}</h2>
                    <h3>{capacity}</h3>
                </div>
            ))
        }
   </div>
    
    </>
  )
}

export default Menu


