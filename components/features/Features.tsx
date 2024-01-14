"use client"

import { Heading } from '@/common'
import { Icons } from '@/constants'
import { Boxs, Container, Padding, Section, Span, Text, View } from '@/elements'
import React from 'react'

const Features = () => {
    const data = [
        {
            icon: <Icons.ConcreteIcon />,
            title: "Easy Wins",
            desc: "Get your best looking smile now!"
        },

        {
            icon: <Icons.EasyIcon />,
            title: "Concrete",
            desc: "Defalcate is most focused in helping you discover your most beautiful smile"
        },

        {
            icon: <Icons.GrowthIcon />,
            title: "Hack Growth",
            desc: "Overcame any hurdle or any other problem."
        },
    ]
  return (
    <>
        <Padding>
            <Container>
                <Boxs className='features-container'> 
                    <Heading titleSmall='Featured Product' title='The Best Services' desc='Problems trying to resolve 
                            the conflict between ' />

                    <View className='feature-body-container'>
                        {data.map((item, index) => (
                            <Section className='feature-body-content' key={index}>
                                {item?.icon}
                                    <Text>{item?.title}</Text>
                                    <Span>{item?.desc}</Span>
                            </Section>
                        ))}
                    </View>
                </Boxs>
            </Container>
        </Padding>
    </>
  )
}

export default Features