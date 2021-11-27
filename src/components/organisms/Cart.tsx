import * as React from "react";
import { formatProductPrice } from "../../utils/formatProductPrice";
import { SoldOutBadge } from "../atoms/SoldOutBadge";
import Card from "../organisms/Card";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";
import { useCartState } from "../../hooks/useCartState";
import { List } from "../../layout/List";
import { useCartDispatch } from "../../hooks/useCartDispatch";

export const Cart = ({ btnRef, isOpen, onClose }) => {
  const getTotalPrice = (
    price: number,
    qty: number,
    shppingPrice: number
  ): number => {
    return price * qty + shppingPrice;
  };

  const cartState = useCartState();
  const cartDispatch = useCartDispatch();

  const handleDeleteBtn = (clickedId) => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: { cartId: clickedId },
    });
  };
  // const cartTotalPrice =  cartState?.cart?.reduce(
  //   (acc, { quantity, price }) => acc + quantity * price,
  //   0
  // );
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>장바구니</DrawerHeader>
        {/* <Text> 총 주문금액 : {cartTotalPrice}</Text> */}
        <DrawerBody>
          <List
            items={cartState.cart}
            renderEmpty={<Text fontSize="6xl"> 상품이 없습니다.</Text>}
            renderItem={(item) => (
              <Card
                enabledDelete={true}
                handleDeleteBtn={handleDeleteBtn}
                id={item.cartId}
                imageUrl={item?.productDetail?.imageUrl}
                imageAlt={item?.productDetail?.name}
                title={item?.productDetail?.name}
                badge={item?.productDetail?.soldout ? <SoldOutBadge /> : null}
                detail={item?.productDetail?.brand?.name}
              >
                {Object.entries(item.productDetail.options).map((option, i) => (
                  <Box key={i}>
                    <Text>
                      {option[0]}:{option[1]}
                    </Text>
                  </Box>
                ))}
                <Text>상품가격 : {item?.productDetail?.totalPrice}</Text>
                <Text>총 수량 : {item?.qty}</Text>
                <Text>
                  배송비:
                  {formatProductPrice(item?.productDetail?.shippingPrice)}
                </Text>
                <Text>
                  Total Price :{" "}
                  {formatProductPrice(
                    getTotalPrice(
                      item?.productDetail?.totalPrice,
                      item?.qty,
                      item?.productDetail?.shippingPrice
                    )
                  )}
                </Text>
              </Card>
            )}
          ></List>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
