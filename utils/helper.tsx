"use client";

import { Img, View } from "@/elements";
import { Images } from "@/public";


// a custom function to format amount
export const formatAmount = (amount: any) => {
    amount = Number(amount);
    if (isNaN(amount)) {
      return 'Invalid Amount';
    }
  
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  
    return formatter.format(amount);
  };


export const formattedCategory = (category: string) => Array.isArray(category) ? category[0] : category;
export  const formattedTitle = (title: string) => Array.isArray(title) ? title.join(' ') : title;


export const nodata = <View className="no-data"><Img src={Images.EmptyData} alt="" /></View>