
"use client"
import { Icons } from "@/constants";
import { Container, Padding, Section,  Span,  View } from "@/elements";
import Link from "next/link";
import React, { useEffect } from "react";
import NavbarTop from "./Navbar_Top";
import { usePathname } from "next/navigation";
import { datas } from "@/data";
import { useHooks } from "@/hooks";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";

import { ModalPopUp } from "@/common";
import { appService } from "@/services";

const Navbar = () => {
    const pathname = usePathname()
    const { isFixed } = useHooks()
    const { isOpen, handleOpen } = useHooks();
    const cartItems = useSelector(appService.selectCartItems);
    const favoriteItems = useSelector(appService.getAllFavorite)

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
                            <Span className="space-x-2 cursor-pointer" onClick={() => handleOpen()}><Icons.CartIcon/>{cartItems.length ?? 0}</Span>
                            <Span className="space-x-2"><Icons.FavoriteIcon/> {favoriteItems.length ?? 0 }</Span>
                        </View>
                    </Section>
                </View>
            <Icons.MenuIcon className="nav-menu" />
          </View>

          {isOpen && (
              
                <ModalPopUp
                open={isOpen} close={() => handleOpen()}    
                >
                    <Cart />
                </ModalPopUp>

      )}
        </Container>
      </Padding>
    </>
  );
};

export default Navbar;
