import React, { useState } from 'react'
import { IEmployee } from '../types/IEmployee'
import { IEmployeeProps } from '../propsType/IEmployeeProps'
import EmployeeDisplay from './EmployeeDisplay'

export default function EmployeeList(d: IEmployeeProps) {

  console.log(d);
  return (
    <table>
        
    {
        d?.list?.map((value:IEmployee,index:number)=> {

            return (<EmployeeDisplay {...value} deleteindex={index} removeEmployee={d.remove} setEdit={d.setEdit} ></EmployeeDisplay>)
        })
    }

    </table>
  )
}
