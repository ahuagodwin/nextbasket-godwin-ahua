"use client";

import { Heading, ProductCard } from "@/common";
import { Icons } from "@/constants";
import { Section, View, Button, FlexGrid } from "@/elements";
import { appService } from "@/services";
import { AppDispatch, RootState } from "@/store/store";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const AllProducts = () => {
  const userRef = useRef(false)
  const data  = useSelector((state: RootState) => state.products)
  const dispatch = useDispatch<AppDispatch>()


 useEffect(() => {
    if(userRef.current === false) {
      dispatch(appService.fetchProducts());
    }
    return () => {
      userRef.current === true
    }
 },[])

 const allProducts = data?.products?.products

 console.log(" all products:", allProducts)

  return (
    <View className="product-container">
      <Heading
        titleSmall="Featured Product"
        title="BESTSELLER PRODUCTS"
        desc="Problems trying to resolve the conflict between "
        className="mb-[56px]"
      />
          <FlexGrid isGrid={true} gridType="grid5" isBorder={false}>
              <ProductCard data={allProducts} />
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
