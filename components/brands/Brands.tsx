import { Container, FlexGrid, Img, Padding, Section, View } from '@/elements'
import { Images } from '@/public'
import React from 'react'

const Brands = () => {
  return (
    
    <View className='py-[50px]'>
        <Padding>
            <Container>
                    <FlexGrid isGrid={true} gridType='grid6' isBorder={false}>
                            <Img src={Images.Brand1} alt="" />
                            <Img src={Images.Brand2} alt="" />
                            <Img src={Images.Brand3} alt="" />
                            <Img src={Images.Brand4} alt="" />
                            <Img src={Images.Brand5} alt="" />
                            <Img src={Images.Brand6} alt="" />

                    </FlexGrid>
            </Container>     
        </Padding>
    </View>
  )
}

export default Brands