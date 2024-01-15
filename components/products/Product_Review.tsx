
"use client";

import { datas } from '@/data'
import { Boxs, Container, FlexGrid, Img, Padding, Section, Span, Text, View } from '@/elements'
import { Images } from '@/public'
import React from 'react'

const Product_Review = () => {

  return (
    <View className='single-prod-review-container'>
        <Padding>
              <Container>

                <View className='prod-review-tab'>
                  {datas.tabData.map((item, index) => (
                    <Text className='tab' key={index}>{item?.item}</Text>
                  ))}
                </View>

                   <Boxs className='prod-review-container'>
                   <FlexGrid isGrid={true} gridType='grid2' isBorder={false}>
                          <Section className='prod-review-left'>
                              <Text className='title'>the quick fox jumps over </Text>
                              <Span className='desc'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Span>
                                <View className='desc-border'> <Text className='desc'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Text></View>
                              <Span className='desc'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Span>
                          </Section>
                          <Section className='prod-review-right'>
                            <Img src={Images.CartItemImg} alt="" />
                          </Section>
                    </FlexGrid>
                   </Boxs>
              </Container>
        </Padding>
    </View>
  )
}

export default Product_Review