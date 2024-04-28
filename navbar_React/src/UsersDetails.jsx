import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import './css/style.css';
const url = 'https://jsonplaceholder.typicode.com/users/';
const UsersDetails = () => {
  const {id} = useParams();
  const [user,setUser] = useState({})
  
  useEffect(()=>{
    axios(url + id).then((res)=>{
      if(res.status === 200){
        setUser(res.data);
      }
    }).catch((err)=>{
      setUser({error:true})
    })
  },[])
  return (
   <div>
    {
      user.error || <div>
        <h2>id: {user.id}</h2>
        <h2>Username: {user.username}</h2>
        <h2>Email: {user.email}</h2>
        <h2>Phone: {user.phone}</h2>
      </div>
      
      
    }
   </div>
  )
}

export default UsersDetails