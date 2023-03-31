import {
  Button,
  ButtonGroup,
  Card,
  CardFooter,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import db from "../../../db/firebase-config";
import AddToCartBtn from "../AddToCartBtn";
import BuyBtn from "../BuyBtn";
import LoadingSpinner from "../LoadingSpinner";

const ItemDetailContainer = ({
  getCartProducts,
  cartProducts,
  cartCollectionRef,
}) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const getProduct = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProduct(docSnap.data());
    }
    setLoading(false);
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  //if product does not exist
  if (Object.keys(product).length === 0) {
    return (
      <Center my="20rem" color="teal">
        <Heading>Product not found</Heading>
      </Center>
    );
  }

  return (
    <Card
      direction={{ base: "column", md: "row" }}
      overflow="hidden"
      px={{ base: "2rem", sm: "3rem", md: "6rem", xl: "6rem" }}
      py={{ base: "6rem", sm: "8rem", md: "9rem", xl: "9rem" }}
    >
      <Image
        src={product.image}
        maxWidth={{ base: "100%", sm: "70%", md: "300px", xl: "400px" }}
        objectFit="cover"
        margin="auto"
        alt={product.title}
      />
      <Stack direction="column" spacing="10px" py={20} px={5}>
        <Heading size="md" textAlign="center">
          {product.title}
        </Heading>
        <Text py="5" px="5">
          {product.description}
        </Text>
        <Text
          color="teal"
          fontSize="2xl"
          fontWeight="bold"
          textAlign="center"
          py={1}
        >
          {`$${product.price}`}
        </Text>
        <CardFooter>
          <ButtonGroup spacing="2" m="auto">
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
      </Stack>
    </Card>
  );
};

export default ItemDetailContainer;
