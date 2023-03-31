import { Button, Heading, Stack, useToast } from "@chakra-ui/react";
import { addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import db from "../../../db/firebase-config";

const AddToCartBtn = ({
  product,
  getCartProducts,
  cartProducts,
  cartCollectionRef,
}) => {
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

  const sustractFromCart = async (product) => {
    getCartProducts();
    if (productExistsInCart) {
      const productInCartRef = doc(db, "cart", productExistsInCart.id);
      const newQuantity = productExistsInCart.quantity - 1;

      if (newQuantity === 0) {
        // Delete the document from the cart collection
        await deleteDoc(productInCartRef);
        toast({
          title: `${product.title} removed from cart`,
          status: "error",
          isClosable: true,
        });
      } else {
        // Update the document's quantity field
        await updateDoc(productInCartRef, { quantity: newQuantity });
        toast({
          title: `${newQuantity} unit(s) of ${productExistsInCart.title} in cart`,
          status: "error",
          isClosable: true,
        });
      }
    }
  };

  if (!productExistsInCart || productExistsInCart.quantity === 0) {
    return (
      <Button
        variant="ghost"
        colorScheme="teal"
        onClick={() => addToCart(product)}
      >
        Add to cart
      </Button>
    );
  } else
    return (
      <Stack spacing={3} direction="row" align="center">
        <Button
          variant="ghost"
          colorScheme="teal"
          onClick={() => addToCart(product)}
        >
          +
        </Button>
        <Heading size="sm">
          {productExistsInCart ? productExistsInCart.quantity : 0}
        </Heading>
        <Button
          variant="ghost"
          colorScheme="teal"
          onClick={() => sustractFromCart(product)}
        >
          -
        </Button>
      </Stack>
    );
};

export default AddToCartBtn;
