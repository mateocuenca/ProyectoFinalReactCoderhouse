import "./App.css";
import NavbarChakra from "./components/NavbarChakra/index.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <NavbarChakra />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer products={products} />}
        ></Route>
        <Route
          path="/category/:category"
          element={<ItemListContainer products={products} />}
        ></Route>
        <Route
          path="/item/:id"
          element={<ItemDetailContainer products={products} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
