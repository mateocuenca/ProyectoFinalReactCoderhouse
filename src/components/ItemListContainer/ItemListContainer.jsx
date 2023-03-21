import { Grid, GridItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Item from "../Item.jsx";

const ItemListContainer = ({ products }) => {
  const { category } = useParams();
  const productsByCategory = category
    ? products.filter((product) => category === product.category)
    : products;

  return (
    <Grid
      templateColumns={{
        base: "1",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={6}
      p={{ base: "10px", md: "25px", lg: "50px" }}
    >
      {productsByCategory.map((product) => (
        <GridItem
          w="100%"
          bg="teal.50"
          borderRadius="lg"
          p="2"
          key={product.id}
        >
          <Item key={product.id} product={product} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ItemListContainer;
