import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("")


    const handleAdd = () => {
        setCount(count+1);
    }

    const handleSub = () => {
        setCount(count-1);
    }

    const handleReset = () => {
        setCount(0)
    }

  return (
    <div>

        <h1>Counter</h1>

        <input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />

        <p>{name}</p>
        <p>{count}</p>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSub}>-</button>
        <button onClick={handleReset}>reset</button>

    </div>
  )
}

export default Counter