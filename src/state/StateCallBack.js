import React, {useState} from 'react'

const order = [200, 300, 400];
const StateCallBack = () => {
    const [cart, setCart] = useState(()=>{
        const total = order.reduce((total, cur) => total + cur)
        return total
    });

    const handleClick = () =>{
      setCart(prev => prev + 1)
    }
    return (
      <div>
        <p>{cart}</p>
        <button onClick={handleClick}>Submit callback</button>
      </div>
    )
}

export default StateCallBack