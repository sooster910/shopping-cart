import * as React from "react";
import { Box, Container, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
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
import { isDeepEqual } from "../utils/common";

const ProductDetail = (props) => {
  const { id }: any = useParams();
  const cartState = useCartState();
  const cartDispatch = useCartDispatch();

  const { isLoading, isError, data, status } = useQuery(["product", id], () =>
    fetchProductsByPrefix(id)
  );
  const [optionWarning, setOptionWarning] = React.useState([]);

  const [item, setItem] = React.useReducer(
    (item, newDetails) => ({
      ...item,
      ...newDetails,
    }),
    {}
  );
  React.useEffect(() => {
    const optionsKeys = data?.options?.map(
      (option) => option.optionCategoryName
    );
    const options = optionsKeys?.reduce((a, v) => ({ ...a, [v]: "" }), {});
    console.log("useEffect optins", options);
    const initialItem = {
      options,
      prefix: data?.prefix,
      imageUrl: data?.mainImage,
      name: data?.name,
      totalPrice: data?.ssomeePrice,
      shippingPrice: data?.shippingPrice,
      soldout: data?.soldOut,
    };
    setItem(initialItem);
  }, [data]);

  const handleSelectChange = (e) => {
    const dataset = e.target.options[e.target.selectedIndex].dataset;
    const newOptions = { ...item.options };
    newOptions[e.target.name] = dataset.option;

    const newPrice = Number(item?.totalPrice) + Number(e.target.value);
    setItem({
      totalPrice: newPrice,
      options: newOptions,
    });
  };

  const validateAddingToCart = (options) => {
    console.log("addingto cart", options);
    const emptyOptions = [];
    for (const key in options) {
      if (options[key] === "" || options[key] == undefined) {
        emptyOptions.push(key);
      }
    }
    return emptyOptions;
  };

  const handleAddToCart = (clickedItem) => {
    //option 유효성  검사
    const missingOptions = validateAddingToCart(item.options);
    setOptionWarning([...missingOptions]);
    if (missingOptions.length) return;
    if (!cartState?.cart?.length) {
      return cartDispatch({
        type: "ADD_TO_CART",
        payload: { productDetail: item, qty: 1 },
      });
    }

    // 같은 상품 prefix, 옵션이 같은 상품이 있는지 확인 -> ADD_TO
    const twinItem = cartState.cart.filter((cartItem) => {
      return isDeepEqual(cartItem.productDetail, item);
    });

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
  return (
    <>
      {isLoading && <DefalutSpinner />}
      {isError && <div> Error fetching data</div>}
      {status === "success" && (
        <>
          <Flex mt={"8rem"}>
            <Container maxW="xl" centerContent>
              <Box padding="4" maxW="3xl" borderWidth="1px" borderRadius="lg">
                <Image src={data?.mainImage} alt={data?.name} />
              </Box>
            </Container>
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
                {optionWarning?.map((warning, idx) => (
                  <Warning
                    key={idx}
                    status={"warning"}
                    description={`${warning} 을 추가해주세요.`}
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
