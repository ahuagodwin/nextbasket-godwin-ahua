"use client";

import { PostCard } from "@/common";
import { datas } from "@/data";
import { Boxs, Section, Span, Text, View } from "@/elements";
import React from "react";


const Post = () => {

  return (
    <View className="post-container">
      <Section className="post-caption-text">
        <Span className="caption">Practice Advice</Span>
        <Text className="title">
        Featured Posts
        </Text>
      </Section>

      <Boxs className="post-container-wrapper">
        <PostCard data={datas.postData} category={datas.postCategory} />
      </Boxs>

    </View>
  );
};

export default Post;
