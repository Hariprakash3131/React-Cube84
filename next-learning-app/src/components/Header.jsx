"use client";
import React, { useState } from 'react'

// useState is a React hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that state. You can use it like this:

const Header = ({ name, age, gender }) => {
    let message = "123";
    const [count, setCount] = useState(0);
// const [adasds, setAdasds] = useState(second)
    const handleClick = () => {
        // message = "456";
        setCount(count + 1);
    };
    console.log("rendered");
    return (
      //   <div>Header New , {name} !</div>
      <>
            <h1>{`Welcome ${name}!`}</h1>
            <pz>{count}</pz>
        <button onClick={handleClick}>Click me</button>  
      </>
  )
}

export default Header