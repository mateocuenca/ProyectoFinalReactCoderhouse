import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Checkout from "../Checkout";

const CartOrderSummary = ({ cartProducts, ordersCollectionRef }) => {
  const subtotal = cartProducts.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <Flex justify="space-between" fontSize="sm">
          <Text fontWeight="medium">Subtotal</Text>
          {subtotal}
        </Flex>

        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {subtotal}
          </Text>
        </Flex>
      </Stack>
      <Checkout
        ordersCollectionRef={ordersCollectionRef}
        cartProducts={cartProducts}
        subtotal={subtotal}
      />
    </Stack>
  );
};

export default CartOrderSummary;
