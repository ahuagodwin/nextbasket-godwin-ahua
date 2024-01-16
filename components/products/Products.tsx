"use client";

import { Heading, ProductCard } from "@/common";
import { View, } from "@/elements";
import React from "react";


const AllProducts = () => {

  return (
    <View className="product-container">
      <Heading
        titleSmall="Featured Product"
        title="BESTSELLER PRODUCTS"
        desc="Problems trying to resolve the conflict between "
        className="mb-[56px]"
      />
          <ProductCard displayButton={true} sliceAmount={10}/>
    </View>
  );
};

export default AllProducts;
