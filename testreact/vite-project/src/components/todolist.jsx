import React, { useState } from 'react'

const Todolist = () => {
    const [todo,settodo] = useState(["ders oxu"," kod yaz"])
    const [newtodo,setNewtodo] =useState("")

    return (
    <div>

     <div className="div">
        <h1>TO DO LİST</h1>
     

<input 
    type="text" 
    value={newtodo} 
    onChange={(e) => setNewtodo(e.target.value)} 
   function onk onKeyDown={(e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            if (newtodo.trim() === '') {
                alert('boş yazma');
            } else {
                settodo([newtodo, ...todo]);
                setNewtodo('');
            }
        }
    }} 
/>
<button onClick={() => {
    if (newtodo.trim() === '') {
        alert('boş yazma');
    } else {
        settodo([newtodo, ...todo]);
        setNewtodo('');
    }
}}>
    Add
</button>

        
        <ul>
           {todo.map((todo)=>{
            return(
                <li typ>{todo}</li>
            )
           })}
        </ul>
     </div>
    </div>
  )
}

export default Todolist