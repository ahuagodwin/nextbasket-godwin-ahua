"use client";

import { Button, CustomInput, View } from "@/elements";
import React from "react";

const Subscribe_Input = () => {
  return (
    <View className="footer-subscribe">
      <CustomInput placeholder="Email Address" styleSize="medium" stylestype="default" />
      <Button
        title="Subscribe"
        htmlType="submit"
        stylestype="secondary"
        size="small-x"
      />
    </View>
  );
};

export default Subscribe_Input;
