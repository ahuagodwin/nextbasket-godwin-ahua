import { HeroCaption } from "@/common";
import { paths } from "@/constants";
import {
  Boxs,
  Card,
  Img,
  Section,
  View,
} from "@/elements";
import { Images } from "@/public";
import React from "react";

const Hero = () => {
  return (
    <Boxs className="hero-container">
      <View className="hero-content">

        {/* left feature products */}
        <Section className="hero-content-left">
          <HeroCaption variant="title-medium" as={paths.home} />
          <Img src={Images.Hero1} alt="" fill={false} />
        </Section>

        {/* right feature products */}
        <Section className="hero-content-right">
          <View className="right-large">
            <HeroCaption variant="title-small" as={paths.home} />
            <Img src={Images.Hero2} alt="" />
          </View>
          <Boxs className="right-small">
            <Card>
              <HeroCaption variant="title-small" as={paths.home} />
              <Img src={Images.Hero3} alt="" />
            </Card>
            <Card>
              <HeroCaption variant="title-small" as={paths.home} />
              <Img src={Images.Hero4} alt="" />
            </Card>
          </Boxs>
        </Section>

      </View>
    </Boxs>
  );
};

export default Hero;
