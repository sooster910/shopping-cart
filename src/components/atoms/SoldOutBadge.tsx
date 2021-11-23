import * as React from "react";
import { DefaultBadgeProps } from "./DefaultBadge";
import { DefaultBadge } from "./DefaultBadge";
export interface SoldOutBadge extends DefaultBadgeProps {
  fontSize?: string;
}

export const SoldOutBadge = ({
  children,
  color,
  variation,
  ...props
}: SoldOutBadge) => (
  <DefaultBadge color={color || "red"} variation={variation || "solid"}>
    {"soldout" || children}
  </DefaultBadge>
);
