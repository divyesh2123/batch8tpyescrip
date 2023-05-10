import React, { useState } from 'react'
import { IEmployee } from '../types/IEmployee'
import EmployeeDetailsForm from '../components/EmployeeDetailsForm';
import EmployeeList from '../components/EmployeeList';

export default function Employee() {

   const [employee,setEmployee] = useState<IEmployee[]>([]);

   const [edit,setEdit] = useState<number>(-1);

   const deleteEmployee = (index: number)=> {

    let d = [...employee];

    d.splice(index,1);

    setEmployee(d);

   }

  return (
    <div>
        <EmployeeDetailsForm list={employee} setlist={setEmployee}  ind={edit}></EmployeeDetailsForm>
        <EmployeeList  list={employee} remove={deleteEmployee} setEdit={setEdit}></EmployeeList>

    </div>
  )
}
