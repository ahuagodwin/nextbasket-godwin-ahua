"use client";

import { ProductCard } from "@/common";
import { datas } from "@/data";
import { Section, View, Button } from "@/elements";
import React from "react";

const AllProducts = () => {
  const sampleData = datas.product;
  return (
    <View className="product-container">
      <View className="product-grid">
        <ProductCard data={sampleData} />
      </View>

      <Section className="mt-[24px]">
            <Button title="LOAD MORE PRODUCT" stylesType="primary" size="medium" />
      </Section>
    </View>
  );
};

export default AllProducts;
