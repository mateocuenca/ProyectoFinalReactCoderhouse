import "./App.css";
import NavbarChakra from "./components/NavbarChakra/index.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import db from "../db/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartCount, setCartCount] = useState();
  const [loading, setLoading] = useState(true);

  const productsCollectionRef = collection(db, "products");
  const cartCollectionRef = collection(db, "cart");

  const getProducts = async () => {
    const productsCollection = await getDocs(productsCollectionRef);
    setProducts(
      productsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    setLoading(false);
  };

  const getCartProducts = async () => {
    const cartCollection = await getDocs(cartCollectionRef);
    setCartProducts(
      cartCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  useEffect(() => {
    getCartProducts();
    getProducts();
  }, []);

  useEffect(() => {
    setCartCount(
      cartProducts
        .map((cartProduct) => cartProduct.quantity)
        .reduce((a, b) => a + b, 0)
    );
  }, [cartProducts]);

  return (
    <>
      <NavbarChakra cartCount={cartCount} />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer
              products={products}
              loading={loading}
              getCartProducts={getCartProducts}
              cartProducts={cartProducts}
              cartCollectionRef={cartCollectionRef}
            />
          }
        ></Route>
        <Route
          path="/category/:category"
          element={
            <ItemListContainer
              products={products}
              loading={loading}
              getCartProducts={getCartProducts}
              cartProducts={cartProducts}
              cartCollectionRef={cartCollectionRef}
            />
          }
        ></Route>
        <Route
          path="/item/:id"
          element={
            <ItemDetailContainer
              getCartProducts={getCartProducts}
              cartProducts={cartProducts}
              cartCollectionRef={cartCollectionRef}
            />
          }
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
