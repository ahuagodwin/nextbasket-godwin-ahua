import { Boxs, Section, Text, View } from "@/elements";
import { ModalProps } from "@/types";
import React from "react";

const PopUp_Modal = (props: ModalProps) => {
  return (
    <>
      {props.open && (
        <View className="modal" onClick={props.close}>
          <Boxs className="modal-body" onClick={(e) => e.stopPropagation()}>
            <Section className="modal-close">
              <Text onClick={props.close}>X</Text>
            </Section>
            <Boxs className="modal-title">{props.title}</Boxs>
            <View className="modal-content">{props.children}</View>
          </Boxs>
        </View>
      )}
    </>
  );
};

export default PopUp_Modal;
