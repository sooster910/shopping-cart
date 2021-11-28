import { Box, Container, Text } from "@chakra-ui/layout";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { DefalutSpinner } from "../components/atoms/DefaultSpinner";
import { Flex } from "@chakra-ui/react";
import { SoldOutBadge } from "../components/atoms/SoldOutBadge";
import { AddToCart } from "../components/molecules/AddToCart";
import { useCartState } from "../hooks/useCartState";
import { useCartDispatch } from "../hooks/useCartDispatch";
import { OptionForms } from "../components/organisms/OptionForms";
import { formatProductPrice } from "../utils/formatProductPrice";
import { Warning } from "../components/molecules/Warning";
import { fetchProductsByPrefix } from "../api/productAPI";
import { useItem } from "../hooks/useItem";
import { isDeepEqual, validateOptions } from "../utils/common";
import { ProductImage } from "../components/organisms/ProductImage";

const ProductDetail = () => {
  const { id }: any = useParams();
  const cartState = useCartState();
  const cartDispatch = useCartDispatch();
  const { isLoading, isError, data, status } = useQuery(["product", id], () =>
    fetchProductsByPrefix(id)
  );

  const submitToCart = () => {
    if (!cartState?.cart?.length) {
      return cartDispatch({
        type: "ADD_TO_CART",
        payload: { productDetail: item, qty: 1 },
      });
    }

    // 같은 상품 prefix, 옵션이 같은 상품이 있는지 확인 -> ADD_TO
    const twinItem = cartState.cart.filter((cartItem) =>
      isDeepEqual(cartItem.productDetail, item)
    );

    if (twinItem.length) {
      return cartDispatch({
        type: "UPDATE_CART_QTY",
        payload: { cartId: twinItem[0]?.cartId, qty: 1 },
      });
    } else {
      return cartDispatch({
        type: "ADD_TO_CART",
        payload: { productDetail: item, qty: 1 },
      });
    }
  };

  const { item, handleSelectChange, handleAddToCart, errors } = useItem(
    data,
    submitToCart,
    validateOptions
  );

  return (
    <>
      {isLoading && <DefalutSpinner />}
      {isError && <div> Error fetching data</div>}
      {status === "success" && (
        <>
          <Flex mt={"8rem"}>
            <ProductImage mainImage={data.mainImage} productName={data.name} />{" "}
            <Container maxW="xl" centerContent>
              <Box display="flex" alignItems="baseline" mb="2">
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {data?.brand?.name} / {data?.shop?.name}
                </Box>
              </Box>

              <Box
                padding="4"
                borderWidth="1px"
                borderRadius="lg"
                maxW="3xl"
                width="100%"
              >
                {data.soldOut ? <SoldOutBadge /> : null}

                <Box display="flex" alignItems="baseline" mb="2">
                  <Text fontSize="2xl"> {data.name}</Text>
                </Box>

                {data.options.length > 0 && (
                  <OptionForms
                    options={data.options}
                    handleSelectChange={handleSelectChange}
                  />
                )}
                <Box>
                  <Text as="del" fontSize="xl" mt="4" color="gray.500">
                    Original Price : {formatProductPrice(data.originalPrice)}
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="l" mt="1" color="gray.500">
                    Somee Price : {formatProductPrice(data.ssomeePrice)}
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="l" mt="1" color="gray.500">
                    Shipping Price : {formatProductPrice(data.shippingPrice)}
                  </Text>
                </Box>
                <Box
                  mt="5"
                  fontWeight="semibold"
                  as="h3"
                  fontSize="20px"
                  lineHeight="tight"
                  isTruncated
                >
                  {formatProductPrice(item.totalPrice)}
                </Box>

                <AddToCart
                  prefix={data.prefix}
                  handleAddToCart={handleAddToCart}
                  text={"장바구니 추가"}
                  disabled={data.soldOut}
                />
              </Box>
              <Box>
                {errors?.map((error, idx) => (
                  <Warning
                    key={idx}
                    status={"warning"}
                    description={`${error} 을 추가해주세요.`}
                  />
                ))}
              </Box>
            </Container>
          </Flex>

          <Container mt={10}>
            <div dangerouslySetInnerHTML={{ __html: data?.description }} />
          </Container>
        </>
      )}
    </>
  );
};

export default ProductDetail;
