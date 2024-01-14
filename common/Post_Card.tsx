"use client"

import { Icons, paths } from "@/constants";
import { Anchor, Boxs, Card, Img, Span, Text, View } from "@/elements";
import { Images } from "@/public";
import { PostProps } from "@/types";
import React from "react";

const Post_Card = (props: PostProps) => {

    // Destructuring properties from the props
    const postData = props.data || [];
    const postCategory = props.category || [];


    // Rendering the post cards based on the provided data
  return (
    <>
      {postData?.map((item) => (
        <Card className="post-card-container" key={item?.id}>
        <Boxs className="post-card-img">
          <Text className="post-card-category">
              <Span>{item?.category}</Span>
          </Text>
          <Img src={item?.img ?? Images.Post1} alt="" />
        </Boxs>

        <Boxs className="post-card-content">
            {/* post category */}
          <View className="post-cat">
            {postCategory?.map((cat, i) => (
              <Span
                key={i}
                className={`${item?.category === cat?.name ? "active" : "inherit"}`}
              >
                {cat?.name}
              </Span>
            ))}
          </View>
          <Text className="post-card-title">
            {item?.title}
          </Text>
          <Text className="post-card-desc">
           {item?.description}
          </Text>

            {/* post analytics */}
          <View className="post-analytics">
            <Text><Icons.ClockIcon />  {item?.createdAt}</Text>
            <Text><Icons.ChartIcon /> {item?.count ?? "0"} comments</Text>
          </View>

          <Anchor as={paths.home} className="post-card-more"> Learn More <Icons.ArrowRight /> </Anchor>
        </Boxs>
      </Card>
      ))}
    </>
  );
};

export default Post_Card;
