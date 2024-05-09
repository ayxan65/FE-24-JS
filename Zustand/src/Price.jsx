import React from 'react';
import { useState , useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Price = () => {
    const [menu,setMenu] = useState([]);
   
    useEffect(()=>{
        const GetData =async()=>{
            const url =`http://localhost:3000/restaurant/`;
            const {data} = await axios.get(url);
            console.log(data);
            console.log(data);
            setMenu(data)
        }
        GetData();

    },[])
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



