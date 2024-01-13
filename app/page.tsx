import { Features, HeroBanner, Products } from "@/components";
import { Container, Padding } from "@/elements";
import React from "react";

const page = () => {
  return (
    <div>

     <Padding>
        <Container>
            <HeroBanner />
            <Features />
            <Products />
        </Container>
     </Padding>
    </div>
  );
};

export default page;
