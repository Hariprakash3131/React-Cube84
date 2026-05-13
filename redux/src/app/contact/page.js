import React from 'react'

const page = ({name, age, gender}) => {
  return (
    <div>  
      <div>Contact Page</div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
    </div>
  )
}

export default page