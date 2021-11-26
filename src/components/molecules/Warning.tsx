import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/alert";
import * as React from "react";

export type WarningProps = {
  status?: "warning" | "info" | "success" | "error";
  title?: string;
  description?: string;
};

export const Warning = ({
  title,
  status = "warning",
  description,
}: WarningProps) => {
  return (
    <Alert status={status}>
      <AlertIcon />
      {title && <AlertTitle mr={2}>{title}</AlertTitle>}
      {description && <AlertDescription>{description}</AlertDescription>}
    </Alert>
  );
};
