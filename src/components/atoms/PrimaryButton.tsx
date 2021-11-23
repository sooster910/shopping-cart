import * as React from "react";
import { DefalutButton } from "./DefaultButton";
import { DefaultButtonProps } from "./DefaultButton";

export const PrimaryButton = ({ children, ...props }: DefaultButtonProps) => (
  <DefalutButton
    color={props.color || "teal"}
    variation={props.variation || "solid"}
  >
    {children}
  </DefalutButton>
);
