import React, { useState } from 'react'
import { IEmployee } from '../types/IEmployee'
import { IEmployeeProps } from '../propsType/IEmployeeProps'
import EmployeeDisplay from './EmployeeDisplay'

export default function EmployeeList(d: IEmployeeProps) {

  console.log(d);
  return (
    <table>
        
    {
        d?.list?.map((value:IEmployee)=> {

            return (<EmployeeDisplay {...value}></EmployeeDisplay>)
        })
    }

    </table>
  )
}
