import React from 'react'
import { IProudctProps } from './IProductProp'
import Image from './components/Image'

export default function Item(props : IProudctProps ) {
  return (
    <div>{props.index} {props.item1.category}

      <Image url={props.item1.image} height='200px' alt='' />
    
    </div>
  )
}
