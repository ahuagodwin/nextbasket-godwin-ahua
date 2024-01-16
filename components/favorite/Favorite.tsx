"use client";

import { Notification } from "@/common";
import { Icons } from "@/constants";
import { Boxs, Button, Img, Section, Text, View } from "@/elements";
import { appService } from "@/services";
import { AppDispatch } from "@/store/store";
import { formatAmount, nodata } from "@/utils/helper";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Favorite = () => {
  const favoriteItems = useSelector(appService.getAllFavorite);
  const dispatch = useDispatch<AppDispatch>(); 
  const [ successMsg, setSuccessMsg ] = React.useState<string>('')


  const handleDelItem = (itemId: number) => {
    dispatch(appService.deleteFavoriteItem(itemId))
    toast.success("Favorite item deleted")
  }

  const handleClearCart = () => {
    dispatch(appService.clearWhist())
    setSuccessMsg("Favorite item cleared")
  }


  return (
    <>
      {favoriteItems.length === 0 ? nodata  : (
        <Boxs className="cart-container">

        {favoriteItems.map((item) => (
          <View key={item?.id} className="cart-inner-content">
           <Boxs className="cart-inner-left">
              <Img src={item?.thumbnail} alt={item?.name} width={100} height={100} />
              <Section className="flex justify-start items-start flex-col">
                <Text>{item?.name?.slice(0, 18) + "..."}</Text>
                {item?.description?.slice(0, 18) + "..."}
              </Section>
           </Boxs>
              
               <Text>{formatAmount(item.price * item?.quantity)} </Text>
  
               <Icons.DeleteIcon  color="#e74040" size={30} onClick={() => handleDelItem(item?.id)} />
          </View>
        ))}
  
        <View className="cart-clear-btn">
          <Button  handleClick={() => handleClearCart()} title="Clear Favorite" stylestype="secondary" size="small" /> 
        </View>
      </Boxs>
      ) }

      <Notification message={successMsg} />
    </>

  );
};

export default Favorite;
