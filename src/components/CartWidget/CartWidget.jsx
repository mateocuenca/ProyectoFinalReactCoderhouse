import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Text } from "@chakra-ui/react";

const CartWidget = ({ cartItems }) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <ShoppingCartIcon fontSize="large" />
      <div
        style={{
          position: "absolute",
          top: "-10px",
          right: "-10px",
          backgroundColor: "red",
          borderRadius: "50%",
          width: "20px",
          height: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text color="white">{cartItems}</Text>
      </div>
    </div>
  );
};

export default CartWidget;
