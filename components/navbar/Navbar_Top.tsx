import { Icons } from '@/constants'
import { Container, Padding, Section, Span, Text, View } from '@/elements'
import React from 'react'

const NavbarTop = () => {
  return (
    <View id='nav_top'>
        <Padding>
            <Container>
               <View className='nav_top_container'>
                    <Section className='nav_top_content_left'>
                      <Span><Icons.CallIcon /> (225) 555-0118</Span>
                      <Span><Icons.EmailIcon /> godwincahua@gmail.com </Span>
                    </Section>
                    <Text>Follow Us  and get a chance to win 80% off</Text>
                    <Section  className='nav_top_content_right'>Follow Us : 
                        <Icons.InstagramIcon size={16} />
                        <Icons.YoutubeIcon size={16} />
                        <Icons.FacebookIcon size={16}/>
                        <Icons.TwitterIcon size={16}/>     
                    </Section>
               </View>
            </Container>
        </Padding>
    </View>
  )
}

export default NavbarTop