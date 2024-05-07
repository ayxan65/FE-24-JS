import React from 'react';
import { useState , useEffect } from 'react';
import axios from 'axios';

const Price = () => {
    const [menu,setMenu] = useState([]);
    useEffect(()=>{
        const GetData =async()=>{
            const url ='http://localhost:3000/restaurant/menu';
            const {data} = await axios.get(url);
            console.log(data);
            setMenu(data)
        }
        GetData();

    },[])
  return (
    
    <>
    
    </>
  )
}

export default Price



