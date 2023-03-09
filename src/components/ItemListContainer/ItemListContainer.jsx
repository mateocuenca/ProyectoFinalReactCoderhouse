import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import Item from "../Item.jsx";

const ItemListContainer = ({ products }) => {
  const { category } = useParams();
  const productsByCategory = category
    ? products.filter((product) => category === product.category)
    : products;

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 5 }}
      columnSpacing={{ xs: 4, sm: 8, md: 12 }}
    >
      {productsByCategory.map((product) => (
        <Grid item xs={12} key={product.id}>
          <Item key={product.id} product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemListContainer;
