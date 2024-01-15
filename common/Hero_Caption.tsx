"use client";

import { Anchor, Boxs, Span, Text } from "@/elements";
import { HeroProps } from "@/types";
import React from "react";

const HeroCaption = (props: HeroProps) => {
  return (
    <Boxs className={props.variant}>
      <Span>{props.quantity ?? "5 Items"}</Span>
      <Text>{props.title ?? "Furniture"}</Text>
      <Anchor as={props.as}>{props.text ?? "Read More"}</Anchor>
    </Boxs>
  );
};

export default HeroCaption;
