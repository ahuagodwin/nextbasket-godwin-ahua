"use client";

import { Icons, } from "@/constants";
import {  Boxs, Button, Img, Section, Text, View } from "@/elements";
import { appService } from "@/services";
import { AppDispatch } from "@/store/store";
import { formatAmount, nodata } from "@/utils/helper";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Cart: React.FC = () => {
  const cartItems = useSelector(appService.selectCartItems);
  const dispatch = useDispatch<AppDispatch>();



  const handleDecQty = (itemId: number) => {
    dispatch(appService.decreaseCart(itemId))
    toast.success("Decrease Quantity")

  }

  const handleIncQty = (itemId: number) => {
    dispatch(appService.increaseCart(itemId))
    toast.success("Increased quantity")
  }

  const handleDelItem = (itemId: number) => {
    dispatch(appService.deleteCartItem(itemId))
    toast.success("Successfully deleted")

  }

  const handleClearCart = () => {
    dispatch(appService.clearCart())
    toast.success("Successfully deleted")
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      {cartItems.length === 0 ? nodata  : (
        <Boxs className="cart-container">

        {cartItems.map((item) => (
          <View key={item?.id} className="cart-inner-content">
           <Boxs className="cart-inner-left">
              <Img src={item?.thumbnail} alt={item?.name} width={100} height={100} />
              <Section className="flex justify-start items-start flex-col">
                <Text>{item?.name?.slice(0, 18) + "..."}</Text>
                {item?.description?.slice(0, 18) + "..."}
              </Section>
           </Boxs>
              
              <View className="cart-actions">
                <Icons.MinusIcon size={20} onClick={() => handleDecQty(item?.id)} /> {item.quantity} <Icons.PlusIcon size={20} onClick={() => handleIncQty(item?.id)} />
              </View>
               <Text>{formatAmount(item.price * item?.quantity)} </Text>
  
               <Icons.DeleteIcon  color="#e74040" size={30} onClick={() => handleDelItem(item?.id)} />
          </View>
        ))}
  
        <View className="cart-clear-btn">
          <Button  handleClick={() => handleClearCart()} title="Clear Cart" stylestype="secondary" size="small" /> 
          <Button title={`Total: ${formatAmount(calculateTotal().toFixed(2))}`}  stylestype="secondary"  size="small"  /> 
        </View>
      </Boxs>
      ) }
    </>

  );
};

export default Cart;
