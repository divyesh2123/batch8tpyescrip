import React from 'react'
import data from './data'
import { IBirthDate } from './birthdate'

export default function Home() {
  return (
    <div> {
        
    
        data.map((value : IBirthDate)=> {

            return (<div>{value.name}</div>)

        })
        
        }</div>
  )
}
