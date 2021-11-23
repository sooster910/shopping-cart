import { Button } from "@chakra-ui/react";
import * as React from "react";

export type DefaultButtonProps = {
  children: React.ReactNode;
  color?: string;
  variation?: string;
};

export const DefalutButton = ({ children, ...props }: DefaultButtonProps) => {
  return (
    <Button colorScheme={props.color} variant={props.variation} {...props}>
      {children}
    </Button>
  );
};
