

import { View } from '@/elements'
import { TypesProps } from '@/types'
import React from 'react'

const Colors = (props: TypesProps) => {
  const color = props.colors || "#23A6F0"
  return (
    <>
     <View className={`prd-color`} style={{ background: color}}></View>
    </>
   
  )
}

export default Colors