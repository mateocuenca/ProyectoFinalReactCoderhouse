import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f44336",
    },
    secondary: {
      main: "#3f51b5",
    },
  },
});

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
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
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
      </div>
    </ThemeProvider>
  );
}

export default App;
