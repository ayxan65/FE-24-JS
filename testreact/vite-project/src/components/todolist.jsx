import React, { useState } from 'react';
import HandleBtn from './handlebtn';

const Todolist = () => {
    const [todo,settodo] = useState(["ders oxu"," kod yaz"]);
    const [newtodo,setNewtodo] =useState("");
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            if (newtodo.trim() === '') {
                alert('boş yazma');
            } else {
                settodo([newtodo, ...todo]);
                setNewtodo('');
            }
        }
    };
  

    return (
    <div>

     <div className="div">
        <h1>TO DO LİST</h1>
     

<input 
    type="text" 
    value={newtodo} 
    onChange={(e) => setNewtodo(e.target.value)} 
    onKeyDown={handleKeyDown}
  
/>
{/* <button onClick={handleAddButton}>Add</button> */}
<HandleBtn/>
 



        
        <ul>
           {todo.map((todo,index)=>{
            return(
                <li key = {index}>{todo}</li>
            )
           })}
        </ul>
     </div>
    </div>
  )
}

export default Todolist