"use client";


import { Text } from '@/elements'
import { HeadingProps } from '@/types'
import React from 'react'

const Tag_Line = (props: HeadingProps) => {
  return (
    <Text className="tag-line">{props.title}</Text>
  )
}

export default Tag_Line