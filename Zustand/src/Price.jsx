import React from 'react';
import { useState , useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Price = () => {
    const [menu,setMenu] = useState([]);
    const { restaurantId } = useParams();
    useEffect(()=>{
        const GetData =async()=>{
            const url =`http://localhost:3000/menu/${restaurantId}`;
            const {data} = await axios.get(url);
            console.log(data);
            setMenu(data)
        }
        GetData();

    },[restaurantId])
  return (
    
    <>
    <div>
      {
        menu.map(({name,price})=>(
          <div>
            <h2>
              {name}
            </h2>
            <h3>{price}</h3>

          </div>
        ))
      }
    </div>
    </>
  )
}

export default Price



