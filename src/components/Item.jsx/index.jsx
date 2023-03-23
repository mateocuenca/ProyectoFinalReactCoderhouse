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

const Item = ({
  product,
  getCartProducts,
  cartProducts,
  cartCollectionRef,
}) => {
  const [addToCartBtnText, setAddToCartBtnText] = useState("Add to cart");
  const productExistsInCart = cartProducts.find(
    (cartProduct) => cartProduct.title === product.title
  );
  const toast = useToast();

  const addToCart = async (product) => {
    getCartProducts();
    if (productExistsInCart) {
      const productInCartRef = doc(db, "cart", productExistsInCart.id);
      await updateDoc(productInCartRef, {
        quantity: productExistsInCart.quantity + 1,
      });

      toast({
        title: `${productExistsInCart.quantity + 1} unit(s) of ${
          productExistsInCart.title
        } in cart`,
        status: "success",
        isClosable: true,
      });
    } else {
      await addDoc(cartCollectionRef, { ...product, quantity: 1 });
      toast({
        title: `${product.title} added to cart`,
        status: "success",
        isClosable: true,
      });
    }
  };

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
          <Button variant="solid" colorScheme="teal">
            Buy now
          </Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            onClick={() => addToCart(product)}
          >
            {productExistsInCart
              ? `Add to cart (${productExistsInCart.quantity})`
              : addToCartBtnText}
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Item;
