import { SubscribeButton } from '@/common'
import { Icons } from '@/constants'
import { datas } from '@/data'
import { Anchor, Boxs, Container, Padding, Section, Text, View } from '@/elements'
import React from 'react'

const Footer = () => {
  return (
   <>

   {/* footer logo and social icons */}
         <View className='footer'>
        <Padding>
            <Container>
                <Boxs className="footer-logo">
                    <Text className='logo'>Bandage</Text>
                    <Section className='right'>
                        <Icons.FacebookIcon size={24} />
                            <Icons.InstagramIcon size={24} />
                            <Icons.TwitterIcon size={24} />
                    </Section>
                </Boxs>
            </Container>
        </Padding>
    </View>

{/* footer content and links */}
    <View className='footer-bg'>
        <Padding>
            <Container>
            <Boxs className='footer-content'>
                    {datas.FooterData.map((item, index) => (
                        <View className='footer-content-inner' key={index}>
                        <Text>{item?.title}</Text>   
                        {item?.sub === null ? <SubscribeButton /> : item?.sub.map((sub, index) => (
                            <Anchor className='items-links' as="#" key={index}>{sub?.item}</Anchor>
                        ))}
                    </View>
                    ))}
                </Boxs>
            </Container>
        </Padding>
    </View>

{/* footer copyright */}
    <View className='footer'>
        <Padding>
            <Container>
                <Text className='copyright'>Made With Love By Godwin Ahua All Right Reserved </Text>
            </Container>
        </Padding>
    </View>

   </>
  )
}

export default Footer