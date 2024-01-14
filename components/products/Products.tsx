"use client";

import { Heading, ProductCard } from "@/common";
import { Icons } from "@/constants";
import { datas } from "@/data";
import { Section, View, Button, FlexGrid } from "@/elements";
import React from "react";

const AllProducts = () => {
  const sampleData = datas.product;
  return (
    <View className="product-container">
      <Heading
        titleSmall="Featured Product"
        title="BESTSELLER PRODUCTS"
        desc="Problems trying to resolve the conflict between "
        className="mb-[56px]"
      />
          <FlexGrid isGrid={true} gridType="grid5" isBorder={false}>
              <ProductCard data={sampleData} />
          </FlexGrid>


      <Section className="mt-[50px]">
        <Button
          icon={<Icons.Spinner />}
          title="LOAD MORE PRODUCT"
          stylesType="primary"
          size="medium"
        />
      </Section>
    </View>
  );
};

export default AllProducts;
