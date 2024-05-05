import React from 'react';
import useCounter from './UseCounter'; 

const App = () => {
  const { count, increment ,decrement } = useCounter(); 
  console.log(count);
  console.log(increment);

  return (
    <>
    
    <div style={{margin:'4em'}}>
    <div style={{fontSize:'24px'}}>{count}</div>
      <button style={{width:'120px',height:'35px'}} onClick={increment}>Increment</button> 
      <button style={{width:'120px',height:'35px'}} onClick={decrement}>decrement</button> 
    </div>
    </>
  );
}

export default App;

