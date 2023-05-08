import React, { useState } from 'react'
import { IEmployee } from '../types/IEmployee'
import EmployeeDetailsForm from '../components/EmployeeDetailsForm';
import EmployeeList from '../components/EmployeeList';

export default function Employee() {

   const [employee,setEmployee] = useState<IEmployee[]>([]);

  return (
    <div>
        <EmployeeDetailsForm list={employee} setlist={setEmployee}></EmployeeDetailsForm>
        <EmployeeList  list={employee}></EmployeeList>

    </div>
  )
}
