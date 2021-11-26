import { Spinner } from "@chakra-ui/spinner";
import * as React from "react";

export type DefalutSpinnerProps = {
  color?: string;
  size?: string;
  thickness?: string;
  label?: string;
};

export const DefalutSpinner = ({
  size = "xl",
  color = "black.500",
  thickness = "8px",
  label = "loading...",
  ...props
}: DefalutSpinnerProps) => (
  <Spinner
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    textAlign={"center"}
    label={label}
    size={size}
    color={color}
    thickness={thickness}
    {...props}
  />
);
