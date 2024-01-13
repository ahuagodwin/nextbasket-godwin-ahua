import { Products } from "@/components";
import { Icons } from "@/constants";
import { Button, Container, CustomInput, Padding } from "@/elements";
import React from "react";

const page = () => {
  return (
    <div>

     <Padding>
        <Container>
            <Products />
        </Container>
     </Padding>
    </div>
  );
};

export default page;
