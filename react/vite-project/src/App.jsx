import React from "react";
import './style.css';
import Card from "./components/card";
import { UserData } from "./data";

const App =()=>{
  
    return( 
    <div className="main">
            <div className="container">
                            
         {
            UserData.map(({title,id,desc})=>
             {
                return   <Card title={title} key={id} desc= {desc}/>
              
             }
        )
         }

            </div>
    </div>
    )
}
export default App