import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ products }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id == id);

  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={product.image}
        alt={product.title}
      />

      <CardContent sx={{ height: 200 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "pre-line",
            height: "60px", // adjust the width to your desired size
          }}
        >
          {product.title}
        </Typography>
        <Typography variant="h5" color="textPrimary" component="p">
          {product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemDetailContainer;
