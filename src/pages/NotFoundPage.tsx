import { Heading } from "@chakra-ui/react";
import * as React from "react";

interface NotFoundProps {}

const NotFound: React.FunctionComponent<NotFoundProps> = (
  props
): React.ReactElement => {
  return (
    <>
      <Heading>NOT FOUND PAGE 404</Heading>
    </>
  );
};

export default NotFound;
