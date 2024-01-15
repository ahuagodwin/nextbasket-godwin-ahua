"use client"

import { View } from '@/elements'
import { LayoutProps } from '@/types'
import React from 'react'
import Footer from './Footer'
import { Navbar } from './navbar';


const Layout = ({ children }: LayoutProps) => {
  return (
    <View>
        <Navbar />
        {children}
        <Footer />
    </View>
  )
}

export default Layout