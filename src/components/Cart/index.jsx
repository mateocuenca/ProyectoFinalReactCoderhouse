import { Box, Flex, Heading, HStack, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import CartItem from "../CartItem";
import CartOrderSummary from "../CartOrderSummary";
import LoadingSpinner from "../LoadingSpinner";

const Cart = ({
  getCartProducts,
  cartProducts,
  cartCollectionRef,
  loading,
  ordersCollectionRef,
}) => {
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <Box
      maxW={{ base: "3xl", lg: "7xl" }}
      mx="auto"
      px={{ base: "6", sm: "8", md: "10", lg: "12" }}
      py={{ base: "40", md: "40", lg: "40" }}
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        align={{ lg: "flex-start" }}
        spacing={{ base: "8", md: "16" }}
      >
        <Stack spacing={{ base: "8", md: "10" }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold" m="auto">
            {`Shopping Cart`}
          </Heading>

          <Stack spacing="6">
            {cartProducts.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                getCartProducts={getCartProducts}
                cartProducts={cartProducts}
                cartCollectionRef={cartCollectionRef}
              />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary
            cartProducts={cartProducts}
            ordersCollectionRef={ordersCollectionRef}
          />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <NavLink to="/">Continue shopping</NavLink>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Cart;
