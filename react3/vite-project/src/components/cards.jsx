import React, { useEffect, useState } from 'react'
import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/users';

const Cards = () => {
    const [users,setusers] = useState([]);
    useEffect(()=>{
       axios(url).then(({data})=>{
           setusers(data);
       })

   })
   return(
   
        users.map(({username,id})=>{
        //   <div>
        //     <p>{username}</p>
        //     <p>{id}</p>
        //   </div>
            console.log(username);
            console.log(id);
            
        })
 
   )
   


}

export default Cards