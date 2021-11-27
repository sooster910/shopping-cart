import { Button, ButtonProps } from "@chakra-ui/react";
import * as React from "react";

export interface DefaultButtonProps extends ButtonProps {
  children: React.ReactNode;
  variation?: string;
  onClick?: (e) => void;
}

export const DefalutButton = ({ children, ...props }: DefaultButtonProps) => {
  return (
    <Button data-testid="default-btn" variant={props.variation} {...props}>
      {children}
    </Button>
  );
};
