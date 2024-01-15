"use client"

import { CTA, Features, HeroBanner, Posts, Products, Testimonial } from "@/components";
import { Container, Padding } from "@/elements";
import React from "react";

const page = () => {
  return (
    <>
      <Padding>
        <Container>
          <HeroBanner />
          <Products />
          <Features />
          <Posts />
          <Testimonial />
        </Container>
      </Padding>
      <CTA />
    </>
  );
};

export default page;
