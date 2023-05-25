import React from 'react'
import { useState } from 'react'

function FuncComponent() {
    const [value, setValue] = useState(200)
  return (
    <div>FuncComponent

        <p>
            <button onClick={ () => setValue(value -1)}>-</button>
         {value} 
            <button onClick={ () => setValue(value +1)}>+</button> 
        </p>
    </div>
  )
}

export default FuncComponent