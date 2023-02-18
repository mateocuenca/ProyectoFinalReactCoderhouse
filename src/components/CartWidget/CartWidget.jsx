import React from "react";
import { Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = ({ cartItems }) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <ShoppingCartIcon />
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
        <Typography variant="body1" component="span" sx={{ color: "white" }}>
          {cartItems}
        </Typography>
      </div>
    </div>
  );
};

export default CartWidget;
