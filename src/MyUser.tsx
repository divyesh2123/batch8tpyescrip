import React, { useState } from 'react'
export default function MyUser() {

   const [name,setName] = useState<string>('')

   const display = (e: any)=> {

    setName(e.target.value);

   }

   const submitData = ()=> {

    console.log(name);
   }
  return (
    <div>

        <input type='text'  onChange={display}  />
        {name}

        <button onClick={submitData}>Save</button>


    </div>
  )
}
