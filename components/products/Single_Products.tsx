"use client"

import { BreadCrumbs, Colors } from '@/common';
import { Icons } from '@/constants';
import { datas } from '@/data';
import { Container, FlexGrid, Padding, Section, View, Img, Text,  Ratings, Span, Boxs, Button } from '@/elements'
import { Images } from '@/public';
import { appService } from '@/services';
import { AppDispatch, RootState } from '@/store/store';
import { formatAmount } from '@/utils/helper';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Single_Products = () => {
    const { id } = useParams();
    const productId = Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10);

    const  {singleProduct} = useSelector(( state: RootState) => state.singleProduct)
    const dispatch = useDispatch<AppDispatch>()


    useEffect(() => {
        dispatch(appService.fetchSingleProducts(productId))

    },[dispatch, productId])

    const data = singleProduct

    const handleAddToCart = () => {
        const { id, title, price, thumbnail, description } = data;
        dispatch(appService.addToCart({ id, name: title, price, quantity: 1, thumbnail, description }));
      };

      const handleAddToWhist = () => {
        const { id, title, price, thumbnail, description } = data;
        dispatch(appService.addToWhist({ id, name: title, price, quantity: 1, thumbnail, description }));
      };


  return (
    <View>
        <Padding>
            <Container>
               <BreadCrumbs />
               <View className='single-product-container'>
                <FlexGrid isGrid={true} gridType="grid2" isBorder={false}>
                        <Section className='single-prd-left'>
                            <Img src={data?.thumbnail ?? Images.Hero1} alt="" width={100} height={100} />
                            
                        </Section>
                        <Section className='single-prd-right'>
                            <Text className='single-name'>{data?.title}</Text>
                            <Span className='single-rating'><Ratings value={data?.rating} name="read-only" readOnly/> {data?.rating} Reviews</Span>

                            <Text className='single-price'><Span>{formatAmount(data?.discountPercentage)}</Span> {formatAmount(data?.price)}</Text>
                            <Text className='single-stock'>Availability: <Span>{data?.stock} In Stock</Span></Text>
                            <Text className="single-desc">{data?.description}</Text>
                            <Boxs className='single-colors'> 
                                {datas.colors.map((color, index) => (
                                    <Colors colors={color?.color} key={index} /> 
                                ))}
                            </Boxs>

                            <Boxs className='single-cart'>
                                <Button title='selected options' stylesType='secondary' size='small' />
                                <Icons.LikeIcon handleCart={() => handleAddToWhist()} />
                                {/* add to cart button */}
                                <Icons.BasketIcon handleCart={() => handleAddToCart()} /> 
                                <Icons.MoreIcon />
                            </Boxs>
                        </Section>
                    </FlexGrid>

                    {/* product details img */}
                    <View className='single-prod-images'>
                        <FlexGrid isGrid={true} gridType='grid5' isBorder={false}>
                            {data?.images?.map((img: any) => (
                                <Img src={img} alt="" width={200} height={100} />
                            ))}
                        </FlexGrid>
                    </View>
               </View>
            </Container>
        </Padding>
    </View>
  )
}

export default Single_Products