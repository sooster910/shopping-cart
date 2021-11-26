import * as React from "react";
import { Text, TextProps } from "@chakra-ui/react";

interface IDefaultTextProps extends TextProps {
  children: React.ReactNode;
  text: string;
}

export const DefaultText = ({ text, ...rest }: IDefaultTextProps) => (
  <Text>{text}</Text>
);
