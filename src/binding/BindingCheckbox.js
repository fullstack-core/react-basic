import React, {useState} from 'react'

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
const BindingCheckbox = () => {
  const [checked, setChecked] = useState([])
  const handleSubmit = (id) =>{
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if(isChecked){
        return checked.filter(item => item !== id)
      }
      else{
        return [...prev, id]
      }
    })
  }
  return (
    <div>
      {courses.map(course=>(
        <div key={course.id}>
          <input type="checkbox"
                checked={checked.includes(course.id)}
                onChange={() => handleSubmit(course.id)} />
          {course.name}
        </div>
      ))}
      <p>You choose: {checked}</p>
    </div>
  )
}

export default BindingCheckbox