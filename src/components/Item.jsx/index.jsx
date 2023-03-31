import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Text,
  CardFooter,
  Divider,
  Heading,
  Image,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { addDoc, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import db from "../../../db/firebase-config";
import AddToCartBtn from "../AddToCartBtn";
import BuyBtn from "../BuyBtn";

const Item = ({
  product,
  getCartProducts,
  cartProducts,
  cartCollectionRef,
}) => {
  return (
    <Card h="35rem">
      <NavLink to={`/item/${product.id}`}>
        <CardBody>
          <Image
            src={product.image}
            alt={product.title}
            borderRadius="lg"
            height="20rem"
            width="auto"
            m="auto"
            objectFit="cover"
          ></Image>
          <VStack mt="8" spacing="3">
            <Heading size="sm" m="auto" noOfLines={1}>
              {product.title}
            </Heading>
            <Text color="teal" fontSize="2xl" fontWeight="bold">
              {`$${product.price}`}
            </Text>
          </VStack>
        </CardBody>
      </NavLink>
      <Divider color="teal.200" />
      <CardFooter>
        <ButtonGroup spacing="2" margin="auto">
          <NavLink to="/cart">
            <BuyBtn
              product={product}
              getCartProducts={getCartProducts}
              cartProducts={cartProducts}
              cartCollectionRef={cartCollectionRef}
            />
          </NavLink>
          <AddToCartBtn
            product={product}
            getCartProducts={getCartProducts}
            cartProducts={cartProducts}
            cartCollectionRef={cartCollectionRef}
          />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Item;
