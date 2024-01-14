"use client";

import { Section, Span, Text } from "@/elements";
import { HeadingProps } from "@/types";
import React from "react";

const Heading = (props: HeadingProps) => {
  return (
    <Section className={`feature-content ${props.className}`}>
      <Text>{props.titleSmall}</Text>
      <Text>{props.title}</Text>
      <Span>{props.desc} </Span>
    </Section>
  );
};

export default Heading;
