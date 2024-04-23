import React, { useState } from 'react'

const Todolist = () => {
    const [todo,settodo] = useState(["ders oxu"," kod yaz"])
    const [newtodo,setNewtodo] =useState("")
  return (
    <div>
     <div className="div">
     <input type="text" value={newtodo}
        onChange={({target})=>setNewtodo(target.value)} />
        <button onClick={()=>{
            if(newtodo =='' ){
                alert('boş yazma')
            }
            else{

                settodo([newtodo,...todo])
                setNewtodo('')
            }
        }}>add</button>
        
        <ul>
           {todo.map((todo)=>{
            return(
                <li>{todo}</li>
            )
           })}
        </ul>
     </div>
    </div>
  )
}

export default Todolist