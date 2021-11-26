import * as React from "react";
import { Button, IconButton, Image } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { DeleteIcon, DragHandleIcon } from "@chakra-ui/icons";
import { DeleteBtn } from "../molecules/DeleteBtn";

type CardProps = {
  id?: string;
  imageUrl?: string;
  imageAlt?: string;
  title?: string;
  badge?: React.ReactNode;
  tag?: React.ReactNode;
  detail?: React.ReactNode;
  children?: React.ReactNode;
  enabledDelete?: boolean;
  handleDeleteBtn?: (e) => void;
};
export const Card = ({
  id,
  imageUrl,
  imageAlt,
  title,
  badge,
  tag,
  detail,
  children,
  enabledDelete = false,
  handleDeleteBtn,
}: CardProps) => {
  return (
    <>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        mb={3}
      >
        {enabledDelete && (
          <DeleteBtn handleDeleteBtn={() => handleDeleteBtn(id)} />
        )}
        <Link to={id ? `/product/${id}` : "#"}>
          {imageUrl && <Image src={imageUrl} alt={imageAlt} />}
        </Link>
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
          </Box>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Card;
