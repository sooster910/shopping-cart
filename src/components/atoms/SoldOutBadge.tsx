import * as React from "react";
import { DefaultBadgeProps } from "./DefaultBadge";
import { DefaultBadge } from "./DefaultBadge";
export interface SoldOutBadgeProps extends DefaultBadgeProps {
  fontSize?: string;
}

export const SoldOutBadge = ({
  children,
  color,
  variation,
  ...props
}: SoldOutBadgeProps) => (
  <DefaultBadge color={color || "red"} variation={variation || "solid"}>
    {"soldout" || children}
  </DefaultBadge>
);
