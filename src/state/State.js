import React, {useState} from 'react';

const State = () => {
  const [counter, setCounter] = useState(1);
  const handleClick = () =>{
    setCounter(counter +1)
  }
  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default State