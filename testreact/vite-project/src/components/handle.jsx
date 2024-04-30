import React from "react";
const HandleKeyDown = (e) => {
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

export default HandleKeyDown;
