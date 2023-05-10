import React, { useEffect, useState } from 'react'
import { IEmployee } from '../types/IEmployee'
import { IEmployeeProps } from '../propsType/IEmployeeProps';

export default function EmployeeDetailsForm(d : IEmployeeProps) {

 const [data,setData] = useState<IEmployee>({address : "",
 city : "",fname : "",lname : "",state : "",zipcode : ""});


 useEffect(()=> {

  const ins = d.ind != null? d.ind : 0;
  setData(d.list[ins]);
 },[])



  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=> {
    setData({...data,[e.target.name] : e.target.value})

  }

  const submitData = (event:React.FormEvent<HTMLFormElement>)=> {

    event.preventDefault();
    let p = [...d.list];
    if(d.ind != null && d.ind  >=0)
    {
      p[d.ind] = data
    }
    else
    {
      
      p.push(data);
    }
   

   let pd = d.setlist != undefined? d.setlist(p) : "";
    console.table(data);
  
   }


  return (
    <div>

      <form onSubmit={submitData}>

        <input type='text' name='address'  onChange={changeHandler} />
        <input type='text' name='city'  onChange={changeHandler} />
        <input type='text' name='fname'  onChange={changeHandler} />
        <input type='text' name='lname'  onChange={changeHandler} />
        <input type='text' name='state'  onChange={changeHandler} />
        <input type='text' name='zipcode'  onChange={changeHandler} />

        <input type='submit' value="save" />




      </form>


    </div>
  )
}
