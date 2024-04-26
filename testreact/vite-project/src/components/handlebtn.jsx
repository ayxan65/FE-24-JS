// import React from 'react'
// const HandleBtn =()=>{
   
// return({
//   if (newtodo.trim() === '') {
//     alert('boş yazma');
// } else {
//     settodo([newtodo, ...todo]);
//     setNewtodo('');
// }
// })

// }

// export default HandleBtn;

import React from 'react';

const HandleBtn = ({ newtodo, todo, settodo, setNewtodo }) => {
  const handleClick = () => {
    if (newtodo.trim() === '') {
      alert('boş yazma');
    } else {
      settodo([newtodo, ...todo]);
      setNewtodo('');
    }
  };

  return (
    <button onClick={handleClick}>
      Handle Button
    </button>
  );
};

export default HandleBtn;
