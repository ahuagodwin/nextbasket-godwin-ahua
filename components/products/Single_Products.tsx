"use client"

import { BreadCrumbs, Colors } from '@/common';
import { Icons, paths } from '@/constants';
import { datas } from '@/data';
import { Container, FlexGrid, Padding, Section, View, Img, Text,  Ratings, Span, Boxs, Button } from '@/elements'
import { Images } from '@/public';
import { useParams } from 'next/navigation'
import React from 'react'

const Single_Products = () => {
    const { id, category } = useParams();

  return (
    <View>
        <Padding>
            <Container>
               <BreadCrumbs />
               <View className='single-product-container'>
                <FlexGrid isGrid={true} gridType="grid2" isBorder={false}>
                        <Section className='single-prd-left'>
                            <Img src={Images.Hero1} alt="" />
                        </Section>
                        <Section className='single-prd-right'>
                            <Text className='single-name'>Floating Phone</Text>
                            <Span className='single-rating'><Ratings value={1} /> 10 Reviews</Span>

                            <Text className='single-price'>$1,139.33</Text>
                            <Text className='single-stock'>Availability: <Span>In Stock</Span></Text>

                            <Boxs className='single-colors'> 
                                {datas.colors.map((color, index) => (
                                    <Colors colors={color?.color} key={index} /> 
                                ))}
                            </Boxs>

                            <Boxs className='single-cart'>
                                <Button title='selected options' stylesType='secondary' size='small' />
                                <Icons.LikeIcon />
                                <Icons.BasketIcon />
                                <Icons.MoreIcon />
                            </Boxs>
                        </Section>
                    </FlexGrid>

                    item
               </View>
            </Container>
        </Padding>
    </View>
  )
}

export default Single_Products