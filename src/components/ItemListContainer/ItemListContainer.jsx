import { Grid, GridItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Item from "../Item.jsx";
import LoadingSpinner from "../LoadingSpinner/index.jsx";

const ItemListContainer = ({
  products,
  loading,
  getCartProducts,
  cartProducts,
  cartCollectionRef,
}) => {
  let { category } = useParams();

  category = category?.replaceAll("-", " ");

  const productsByCategory = category
    ? products.filter((product) => category === product.category)
    : products;

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Grid
      templateColumns={{
        base: "1",
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={6}
      px={{ base: "50px", sm: "70px", md: "120px", lg: "50px", xl: "150px" }}
      py={{ base: "130px", sm: "150px", md: "140px", lg: "140px", xl: "150px" }}
    >
      {productsByCategory.map((product) => (
        <GridItem
          w="100%"
          bg="teal.50"
          borderRadius="lg"
          p="2"
          key={product.id}
        >
          <Item
            key={product.id}
            product={product}
            getCartProducts={getCartProducts}
            cartProducts={cartProducts}
            cartCollectionRef={cartCollectionRef}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ItemListContainer;
