import React from 'react'
import { IImageProps } from '../propsType/IImageProps'

export default function Image(img: IImageProps) {
  return (
    <img src={img.url} height={img.height}/>
  )
}
