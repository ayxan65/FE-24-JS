import React from 'react'
const HandleBtn =()=>{
   
    if (newtodo.trim() === '') {
        alert('boş yazma');
    } else {
        settodo([newtodo, ...todo]);
        setNewtodo('');
    }

}

export default HandleBtn;