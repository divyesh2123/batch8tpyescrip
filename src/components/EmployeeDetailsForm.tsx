import React, { useEffect, useState } from 'react'
import { IEmployee } from '../types/IEmployee'
import { IEmployeeProps } from '../propsType/IEmployeeProps';

export default function EmployeeDetailsForm(d : IEmployeeProps) {

 const [data,setData] = useState<IEmployee>({address : "",
 city : "",fname : "",lname : "",state : "",zipcode : ""});


 useEffect(()=> {

  console.log(d.ind);
  console.log(d.list);

  const ins = d.ind != null? d.ind : 0;
  setData(d.list[ins]);
 },[d.ind])



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

        <input type='text' name='address' value={data.address}  onChange={changeHandler} />
        <input type='text' name='city' value={data.city}   onChange={changeHandler} />
        <input type='text' name='fname'  value={data.fname}   onChange={changeHandler} />
        <input type='text' name='lname'  value={data.lname}   onChange={changeHandler} />
        <input type='text' name='state' value={data.state}   onChange={changeHandler} />
        <input type='text' name='zipcode'  value={data.zipcode} onChange={changeHandler} />

        <input type='submit' value="save" />




      </form>


    </div>
  )
}
