import * as React from "react";
import { Image } from "@chakra-ui/react";
import { Badge, Box } from "@chakra-ui/layout";

type CardProps = {
  imageUrl?: string;
  imageAlt?: string;
  title?: string;
  badge?: React.ReactNode;
  tag?: React.ReactNode;
  detail?: React.ReactNode;
  children?: React.ReactNode;
};
export const Card = ({
  imageUrl,
  imageAlt,
  title,
  badge,
  tag,
  detail,
  children,
}: CardProps) => {
  return (
    <>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        {imageUrl && <Image src={imageUrl} alt={imageAlt} />}

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {badge ? badge : null}
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {tag ? tag : null}
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {title ? title : null}
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {detail ? detail : null}
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Card;
