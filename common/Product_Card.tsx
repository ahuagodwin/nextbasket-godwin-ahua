import { paths } from "@/constants";
import { Card, Img, Section, Text, Span, Anchor, Boxs, View } from "@/elements";
import { Images } from "@/public";
import { PostProps } from "@/types";
import React from "react";

const Products = (props: PostProps) => {
  const productData = props.data || []
  return (
    <>
      {Array.isArray(productData) && productData?.map((item) => (
        <Card key={item?.id} className="product-card">
          <Img src={item?.thumbnail ?? Images.Product1} alt="" width={100} height={100}/>
          <Section className="product-content">
            <Anchor as={`${paths.store}/${item?.category}/${item?.id}/${encodeURIComponent(item?.title)}` }><Text className="title">{item?.title?.slice(0, 15) + "..." ?? "Graphic Design"}</Text></Anchor>
            <Text className="desc">
              {item?.description?.slice(0, 18) + "..." ?? "English Department"}
            </Text>
            <Text className="price">
              <Span>${item?.discountPercentage ?? "0.00"}</Span>
              <Span>${item?.price ?? "0.00"}</Span>
            </Text>
          </Section>
        </Card>
      ))}
    </>
  );
};

export default Products;
