import React, { useEffect, useState } from 'react'
import './css/style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UsersDetails from './UsersDetails';



const url = 'https://jsonplaceholder.typicode.com/users';
const data = await axios(url)

const Users = () => {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    axios(url).then(({data})=>setUsers(data)

)
  })
  return (
    <div>
        {
            users.map(({id,username})=>{
                return <div key={id} className='user'>
                    <Link to={'/UserDetails'}>{username}</Link>
                </div>
            })
        }
    </div>
  )
}

export default Users