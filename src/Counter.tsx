import React, { useState } from 'react'

export default function Counter() {
   const [counter,setcounter] = useState<number>(0)

   const myChange = ()=> {

    setcounter(counter+1);
   }
  return (
    <div>
        {counter}
        
        <button onClick={myChange}>COUNTER</button>
    </div>
  )
}
