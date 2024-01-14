import { paths } from "@/constants";
import { Card, Img, View, Section, Text, Padding, Span, Anchor } from "@/elements";
import { Images } from "@/public";
import { DataProps, User } from "@/types";
import React from "react";

const Products: React.FC<DataProps> = ({ data }) => {
  return (
    <>
      {data?.map((item: User) => (
        <Card key={item?.id} className="product-card">
          <Img src={item?.img ?? Images.Product1} alt="" />
          <Section className="product-content">
            <Anchor as={paths.store + `/${item?.category}` + `/${item?.id}`}><Text className="title">{item?.name ?? "Graphic Design"}</Text></Anchor>
            <Text className="desc">
              {item?.description ?? "English Department"}
            </Text>
            <Text className="price">
              <Span>${item?.amount ?? "0.00"}</Span>
              <Span>${item?.amount ?? "0.00"}</Span>
            </Text>
          </Section>
        </Card>
      ))}
    </>
  );
};

export default Products;
