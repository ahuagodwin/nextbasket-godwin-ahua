"use client";

import { Heading, ProductCard } from "@/common";
import { Icons } from "@/constants";
import { Section, View, Button, FlexGrid } from "@/elements";
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
          <ProductCard/>
    </View>
  );
};

export default AllProducts;
