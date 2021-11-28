import { Box, Container } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

type ProductImageProps = {
  mainImage: string;
  productName: string;
};

export const ProductImage = ({ mainImage, productName }: ProductImageProps) => {
  const formatStrAlt = productName.toLowerCase().split(" ").join("-");

  return (
    <Container maxW="xl" centerContent>
      <Box padding="4" maxW="3xl" borderWidth="1px" borderRadius="lg">
        <Image src={mainImage} alt={formatStrAlt} />
      </Box>
    </Container>
  );
};
