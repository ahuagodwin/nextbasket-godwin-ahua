"use client";

import { ProductCard, TagLine } from "@/common";
import { ProductReview, SingleProduct } from "@/components";
import { View } from "@/elements";
import React from "react";

const page = () => {
  return (
   <>
       <View className="bg-[#fafafa]">
       <SingleProduct />

       <ProductReview />

      <View className="product-container">
        <TagLine title="BESTSELLER PRODUCTS"/>
           <ProductCard />
      </View>
    </View>
   </>
  );
};

export default page;
