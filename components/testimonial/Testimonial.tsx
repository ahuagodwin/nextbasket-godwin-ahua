"use client";

import { datas } from "@/data";
import { Boxs, Img, ProductRating, Section, Span, Text, View } from "@/elements";
import { Images } from "@/public";
import React from "react";

const Testimonial = () => {
  const [value, setValue] = React.useState<number | null>(4);

  return (
    <View className="testimonial-container">

      <Section className="testimonial-left">
        <Text className="tag">What they say about us</Text>
        <Img src={Images.Designer} alt="" />
        <ProductRating
          name="simple-controlled"
          value={value}
          onChange={(e, newValue) => {
            setValue(newValue);
          }}
          className="rating"
        />
        <Text className="comment">Slate helps you see how many more days you need to work to reach your financial goal.</Text>
        <Text className="name">Regina Miles</Text>
        <Span className="designation">Designer</Span>
      </Section>
      

      <Section className="testimonial-right">
        {datas.galleryData.map((item, index) => (
          <Boxs key={index} className="gallery-img">
            <Img src={item?.img} alt="" />
          </Boxs>
        ))}
      </Section>
    </View>
  );
};

export default Testimonial;
