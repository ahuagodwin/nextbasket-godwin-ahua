"use client";

import { ProductCard, TagLine } from "@/common";
import { SingleProduct } from "@/components";
import { Icons } from "@/constants";
import { datas } from "@/data";
import { Button, FlexGrid, Section, View } from "@/elements";
import React from "react";

const page = () => {
  return (
   <>
       <View className="bg-[#fafafa]">
       <SingleProduct />

      <View className="product-container">
        <TagLine title="BESTSELLER PRODUCTS"/>
        <FlexGrid isGrid={true} gridType="grid5" isBorder={true}>
           <ProductCard data={datas.product} />
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
    </View>
   </>
  );
};

export default page;
