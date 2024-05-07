import React from 'react';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
            restoran.map(({id,name,rating,capacity})=>(
             <Link to={`/Price/${id}`} key={id}> <div className='namediv' key={name}>
             <h1>{name}</h1>
             <h2>rating: {rating}</h2>
             <h3>{capacity}</h3>
         </div></Link>
            ))
        }
   </div>
    
    </>
  )
}

export default Menu


