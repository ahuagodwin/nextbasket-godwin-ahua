"use client";


import { Button, Img, Section, Span, Text, View } from '@/elements'
import { Images } from '@/public'
import React from 'react'

const CTA = () => {
  return (
    <View className='cta-container'>
        <Img src={Images.CTABg} alt="" className="desktop-cta" />
        <Img src={Images.MobileCTA} alt="" className="mobile-cta" />
        <Section className='cta-content-wrapper'> 
            <Span className='caption'>Designing Better Experience</Span>
            <Text className='title'>Problems trying to resolve the conflict between </Text>
            <Span className='desc'>Problems trying to resolve the conflict between the two major realms of Classical physics: </Span>
            <Text className='price'>$16.48</Text>

            <Button title='ADD YOUR CALL TO ACTION' stylestype='secondary' size='large'/>
        </Section>
    </View>
  )
}

export default CTA