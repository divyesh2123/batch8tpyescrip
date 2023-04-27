import React, { useEffect, useState } from 'react'
import { IUser } from './IUser'
//import { serialize } from 'v8'

export default function APIData() {
    
  const [data,setData] = useState<IUser[]>([])

  useEffect(()=> {

    fetch("https://jsonplaceholder.typicode.com/users").then(y=>y.json())
    .then(y=> {

        setData(y);
    })

  },[])
  
    return (
    <div>{
        data.map((value: IUser)=> {

            return(<div>{value.email} {value.address.city}</div>)

        })
        
        }</div>
  )
}
