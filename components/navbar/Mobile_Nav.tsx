"use client";


import { Icons } from "@/constants";
import { Container, Padding, Section, Span, View } from "@/elements";
import Link from "next/link";
import React from "react";
import NavbarTop from "./Navbar_Top";
import { usePathname } from "next/navigation";
import { datas } from "@/data";
import { useHooks } from "@/hooks";
import { useSelector } from "react-redux";

import { appService } from "@/services";
import { ModalPopUp } from "@/common";
import Favorite from "../favorite/Favorite";
import Cart from "../cart/Cart";


const Navbar = () => {
  const pathname = usePathname();
  const { isOpen, handleOpen, isOpenLike, handleOpenLike, isFixed } = useHooks();
  const cartItems = useSelector(appService.selectCartItems);
  const favoriteItems = useSelector(appService.getAllFavorite);


  return (
    <>
      <Padding>
        <Container>
          <View
            className="flex justify-center items-center flex-col w-full overflow-x-hidden"
          >
            <View className="flex justify-center items-center flex-col w-full">
              <Section className="right-links-mobile mt-5">
                {datas.navData.map((item, index) => {
                  return (
                    <Link
                      className={`links-mobile ${
                        pathname === item?.path ? "active" : "links-mobile"
                      }`}
                      href={item?.path}
                      key={index}
                    >
                      {item?.title}
                    </Link>
                  );
                })}
              </Section>
              <Section className="right-inner">
                <View className="right-inner-auth">
                  <Icons.UserIcon />
                  <Span>Login / Register</Span>
                </View>
                <View className="right-inner-icon">
                  <Span className="space-x-2">
                    <Icons.SearchIcon />
                  </Span>
                  <Span
                    className="space-x-2 cursor-pointer"
                    onClick={() => handleOpen()}
                  >
                    <Icons.CartIcon />
                    {cartItems.length ?? 0}
                  </Span>
                  <Span
                    className="space-x-2 cursor-pointer"
                    onClick={() => handleOpenLike()}
                  >
                    <Icons.FavoriteIcon /> {favoriteItems.length ?? 0}
                  </Span>
                </View>
              </Section>
            </View>
          </View>

          {isOpen && (
            <ModalPopUp title="Cart Items" open={isOpen} close={() => handleOpen()}>
              <Cart />
            </ModalPopUp>
          )}

          {isOpenLike && (
            <ModalPopUp title="Favorite Items" open={isOpenLike} close={() => handleOpenLike()}>
              <Favorite />
            </ModalPopUp>
          )}
        </Container>
      </Padding>
    </>
  );
};

export default Navbar;
