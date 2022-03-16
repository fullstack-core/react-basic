import React, {useState} from 'react'

const gifts = ['Iphone', 'Moto', 'TV', 'Laptop', 'Money'];
const BindingText = () => {
    const [gift, setGift] = useState()
    const onRandomGift = () =>{
        const index = Math.floor(Math.random() * gifts.length)
        setGift(gifts[index])
    }
  return (
    <div>
        <p>{gift || 'Roll to get a grif'}</p>
        <button onClick={onRandomGift}>Nhận quà</button>
    </div>
  )
}

export default BindingText