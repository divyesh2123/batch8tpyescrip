import React from 'react'
import { IEmployee } from '../types/IEmployee'

export default function EmployeeDisplay(d: IEmployee) {
  return (
    <tr><td>{d.fname}</td><td>{d.lname}</td></tr>
  )
}
