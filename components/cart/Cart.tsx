import { Icons } from "@/constants";
import { Boxs, Button, Img, Section, Text, View } from "@/elements";
import { appService } from "@/services";
import { AppDispatch } from "@/store/store";
import { nodata } from "@/utils/helper";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector(appService.selectCartItems);
  const dispatch = useDispatch<AppDispatch>();

  const handleDecQty = (itemId: number) => {
    dispatch(appService.decreaseCart(itemId))
  }

  const handleIncQty = (itemId: number) => {
    dispatch(appService.increaseCart(itemId))
  }

  const handleDelItem = (itemId: number) => {
    dispatch(appService.deleteCartItem(itemId))
  }

  const handleClearCart = () => {
    dispatch(appService.clearCart())
  }


  return (
    <>
      {cartItems.length === 0 ? nodata  : (
        <Boxs className="cart-container">

        {cartItems.map((item) => (
          <View key={item?.id} className="cart-inner-content">
           <Boxs className="cart-inner-left">
              <Img src={item?.thumbnail} alt={item?.name} width={100} height={100} />
              <Section className="flex justify-start items-start flex-col">
                <Text>{item?.name}</Text>
                {item?.description?.slice(0, 18) + "..."}
              </Section>
           </Boxs>
              
              <View className="cart-actions">
                <Icons.MinusIcon size={20} onClick={() => handleDecQty(item?.id)} /> {item.quantity} <Icons.PlusIcon size={20} onClick={() => handleIncQty(item?.id)} />
              </View>
               <Text>${item.price * item?.quantity} </Text>
  
               <Icons.DeleteIcon  color="#e74040" size={30} onClick={() => handleDelItem(item?.id)} />
          </View>
        ))}
  
        <View className="cart-clear-btn">
          <Button  handleClick={() => handleClearCart()} title="Clear Cart" stylesType="secondary" size="small" /> 
          <Button title="Total" stylesType="secondary"  size="small"  /> 
          <Button title="Check Out" stylesType="secondary"  size="small"  /> 
        </View>
      </Boxs>
      ) }
    </>

  );
};

export default Cart;
