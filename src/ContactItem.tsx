import React from 'react'
import { MyContactProps } from './IContactProps'
import { IContact } from './IContact'

export default function ContactItem(d: MyContactProps) {
  return (
    <div>
      
       {
        d?.myitem?.map((value: IContact)=> {

          return(<div><span>{value.contactName}</span><span>{value.contactEmail}</span></div>)
        })
       }
    </div>
  )
}
