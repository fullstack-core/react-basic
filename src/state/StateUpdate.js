import React, {useState} from 'react'

const StateUpdate = () => {
    const [info, setInfo] = useState({
        name: 'Nguyen van A',
        age: 20,
        address: 'Sai Gon'
    });
    const handleUpdate = () =>{
      setInfo({...info, link: 'abc'})
    }
    return (
      <div>
        <p>{JSON.stringify(info)}</p>
        <button onClick={handleUpdate}>Submit</button>
      </div>
    )
}

export default StateUpdate