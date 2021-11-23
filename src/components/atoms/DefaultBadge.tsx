import * as React from "react";
import { Badge } from "@chakra-ui/layout";

export type DefaultBadgeProps = {
  children?: React.ReactNode;
  color?: string;
  variation?: string;
};

export const DefaultBadge = ({
  variation,
  color,
  children,
  ...rest
}: DefaultBadgeProps) => (
  <Badge colorScheme={color} variant={variation} {...rest}>
    {children}
  </Badge>
);
