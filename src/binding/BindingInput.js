import React, { useState } from 'react'

const BindingInput = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleSubmit = () =>{
        console.log('Your name is: ' + name)
        console.log('Your email is: ' + email)
    }
  return (
    <div>
        <input type="text" value={name} onChange={e=> setName(e.target.value)} />
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
        <button onClick={handleSubmit}>Register</button>
        <p>Your name: {name}</p>
        <p>You email: {email}</p>
    </div>
  )
}

export default BindingInput