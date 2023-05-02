import React, { useEffect, useState } from 'react'
import Item from './Item'
import { IProduct } from './IProduct'

export default function MyDisplay() {

  const [data,setData] = useState<IProduct[]>([])


  useEffect(()=> {

    fetch("https://pear-shy-caterpillar.cyclic.app/api/products").
    then(y=>y.json())
    .then(y=> {
        setData(y)
    })

  },[])
  return (
    <div>
        {
            data.map((value: IProduct, index: number)=> {


                return (<Item index={index} item1={value}></Item>)
            })
        }
    </div>
  )
}
