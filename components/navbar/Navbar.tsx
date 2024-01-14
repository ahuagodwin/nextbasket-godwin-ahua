
"use client"
import { Icons } from "@/constants";
import { Container, Padding, Section,  Span,  View } from "@/elements";
import Link from "next/link";
import React, { useEffect } from "react";
import NavbarTop from "./Navbar_Top";
import { usePathname } from "next/navigation";
import { datas } from "@/data";

const Navbar = () => {
    const pathname = usePathname()
    const [ isFixed, setIsFixed] = React.useState<boolean>(false)
    
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const triggerHeight = 100;
  
        setIsFixed(scrollY > triggerHeight);
      };
  
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <>
      <NavbarTop />
      
      <Padding>
        <Container>
          <View className={`nav_container ${isFixed ? 'nav-fixed' : 'inherit'}`}>
            <View className="nav-left">Bandage</View>
                <View className="nav-right">
                    <Section className="right-links">
                    {datas.navData.map((item, index) => {
                    return (
                        <Link className={`links ${pathname === item?.path  ? "active" : "links" }`} href={item?.path} key={index}>{item?.title}</Link>
                    )
                        })}
                    </Section>
                    <Section className="right-inner">
                        <View className="right-inner-auth">
                            <Icons.UserIcon />
                            <Span>Login / Register</Span>
                        </View>
                        <View className="right-inner-icon">
                            <Span className="space-x-2"><Icons.SearchIcon /></Span>
                            <Span className="space-x-2"><Icons.CartIcon /> 1</Span>
                            <Span className="space-x-2"><Icons.FavoriteIcon/> 1</Span>
                        </View>
                    </Section>
                </View>
            <Icons.MenuIcon className="nav-menu" />
          </View>
        </Container>
      </Padding>
    </>
  );
};

export default Navbar;
