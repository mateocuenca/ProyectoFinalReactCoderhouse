import React, { useState } from "react";

import { Button } from "@chakra-ui/react";
import { addDoc, doc, updateDoc } from "firebase/firestore";
import db from "../../../db/firebase-config";
import { useNavigate } from "react-router-dom";

const BuyBtn = ({
  product,
  getCartProducts,
  cartProducts,
  cartCollectionRef,
}) => {
  const navigate = useNavigate();
  const productExistsInCart = cartProducts.find(
    (cartProduct) => cartProduct.title === product.title
  );

  const buyBtn = async () => {
    getCartProducts();
    if (!productExistsInCart) {
      await addDoc(cartCollectionRef, { ...product, quantity: 1 });
    }
    navigate("/cart");
  };
  return (
    <Button variant="solid" colorScheme="teal" onClick={() => buyBtn()}>
      Buy now
    </Button>
  );
};

export default BuyBtn;
