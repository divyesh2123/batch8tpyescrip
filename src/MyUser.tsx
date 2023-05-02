import React, { useState } from 'react'
import { IEmployeeForm } from './IEmployeeForm';
import { TextField } from '@mui/material';
export default function MyUser() {

   const [name,setName] = useState<IEmployeeForm>({
    Address : '',
    City : '',
    FirstName : '',
    LastName : '',    
    State : ""
   });

   const inputHanler = (e: React.ChangeEvent<HTMLInputElement>)=> {

    


    setName({...name,[e.target.name] : e.target.value});

   }

   const submitData = (event:React.FormEvent<HTMLFormElement>)=> {

    event.preventDefault();

    console.table(name);
  
   }
  return (
    <div>

      <form onSubmit={submitData}>

      <TextField id="outlined-basic" label="Standard" variant="standard" />
        <input type='text' name="FirstName"  onChange={inputHanler}  />
        <input type='text'   name="LastName"   onChange={inputHanler}  />
        <input type='text'   name="City"  onChange={inputHanler}  />
        <input type='text'  name="State"  onChange={inputHanler}  />
        <input type='text'  name="Address" onChange={inputHanler}  />
      

        <input type='submit' value="save" />

        </form>


    </div>
  )
}
