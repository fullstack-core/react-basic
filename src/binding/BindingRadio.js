import React, { useState } from 'react'

const courses = [{
    id: 1,
    name: 'HTML & CSS'
},
{
    id: 2,
    name: 'JavaScript'
},
{
    id: 3,
    name: 'React'
}]
const BindingRadio = () => {
    const [checked, setChecked] = useState()
    const handleSubmit = () =>{
        console.log({id: checked})
    }
  return (
    <div>
        {courses.map(course => (
            <div key={course.id}>
                <input type="radio"
                    value={course.name}
                    checked={checked === course.id}
                    onChange={() => setChecked(course.id)} />
                {course.name}
            </div>
        ))}
        <p>You choose id: {checked}</p>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default BindingRadio