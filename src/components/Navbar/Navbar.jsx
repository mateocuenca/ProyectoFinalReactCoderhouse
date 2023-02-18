import React from "react";
import { AppBar, Toolbar, IconButton, Stack, Button } from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../../assets/logo_regalosraros.svg";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <img src={Logo} alt="Regalos Raros Icon" />
        </IconButton>

        <Stack
          direction="row"
          spacing={2}
          sx={{ flexGrow: -1, color: "#023020" }}
        >
          <Button color="inherit">Hombres</Button>
          <Button color="inherit">Mujeres</Button>
          <Button color="inherit">Niños</Button>
          <Button color="inherit">Ofertas</Button>
        </Stack>

        <Button color="inherit" sx={{ marginLeft: "1em", color: "#023020" }}>
          {<CartWidget cartItems={4} />}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
