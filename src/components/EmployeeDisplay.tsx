import React from 'react'
import { IEmployee } from '../types/IEmployee'

export default function EmployeeDisplay(d: IEmployee) {

  const mydelete = ()=> {

    let  t=  d.removeEmployee != null? d.removeEmployee(d.deleteindex) : "";

  }

  const myedit = ()=> {

    let  t=  d.setEdit != null? d.setEdit(d.deleteindex) : ""

  }

  return (
    <tr><td>{d.fname}</td><td>{d.lname}</td>
    <td><button onClick={mydelete}>Delete</button></td>
    <td><button onClick={myedit} >Edit</button></td>
    </tr>
  )
}
