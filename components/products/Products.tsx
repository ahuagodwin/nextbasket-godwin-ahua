"use client";

import { ProductCard } from "@/common";
import { datas } from "@/data";
import { View } from "@/elements";
import React from "react";

const AllProducts = () => {
  const sampleData = datas.product;
  return (
    <View className="product-container">
      <View className="product-grid">
        <ProductCard data={sampleData} />
      </View>
    </View>
  );
};

export default AllProducts;
