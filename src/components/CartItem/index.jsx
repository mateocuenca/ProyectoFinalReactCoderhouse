import {
  Button,
  CloseButton,
  Flex,
  Text,
  ScaleFade,
  useDisclosure,
} from "@chakra-ui/react";
import { deleteDoc, doc } from "firebase/firestore";
import db from "../../../db/firebase-config";
import AddToCartBtn from "../AddToCartBtn";
import CartProductMeta from "../CartProductMeta";

const CartItem = ({
  product,
  getCartProducts,
  cartProducts,
  cartCollectionRef,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const onClickDelete = async () => {
    const productInCartRef = doc(db, "cart", product.id);
    await deleteDoc(productInCartRef);
    getCartProducts();
    onToggle();
  };

  return (
    <ScaleFade initialScale={0.9} in={!isOpen}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
      >
        <CartProductMeta
          name={product.name}
          description={product.description}
          image={product.image}
        />
        {/* Desktop */}
        <Flex
          width="full"
          justify="flex-end"
          display={{ base: "none", md: "flex" }}
        >
          <AddToCartBtn
            product={product}
            getCartProducts={getCartProducts}
            cartProducts={cartProducts}
            cartCollectionRef={cartCollectionRef}
          />
          <Text
            color="teal"
            fontSize="2xl"
            fontWeight="bold"
            textAlign="center"
            py={1}
            px={3}
          >
            {`$${product.price}`}
          </Text>
          <CloseButton
            aria-label={`Delete ${product.name} from cart`}
            onClick={onClickDelete}
          />
        </Flex>
        {/* Mobile */}
        <Flex
          mt="4"
          align="center"
          width="full"
          justify="space-between"
          display={{ base: "flex", md: "none" }}
        >
          <Button fontSize="sm" textDecor="underline" onClick={onClickDelete}>
            Delete
          </Button>
          <AddToCartBtn
            product={product}
            getCartProducts={getCartProducts}
            cartProducts={cartProducts}
            cartCollectionRef={cartCollectionRef}
          />
          <Text
            color="teal"
            fontSize="2xl"
            fontWeight="bold"
            textAlign="center"
            py={1}
          >
            {`$${product.price}`}
          </Text>
        </Flex>
      </Flex>
    </ScaleFade>
  );
};

export default CartItem;
