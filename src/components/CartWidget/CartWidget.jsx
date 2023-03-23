import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Text } from "@chakra-ui/react";

const CartWidget = ({ cartCount }) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <ShoppingCartIcon fontSize="large" />
      <div
        style={{
          position: "absolute",
          top: "-15px",
          right: "-20px",
          backgroundColor: "red",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text color="white">{cartCount}</Text>
      </div>
    </div>
  );
};

export default CartWidget;
