import React from "react";
import { Grid, Typography } from "@mui/material";

const ItemListContainer = ({ greeting }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Typography variant="h4" component="div" sx={{ color: "#023020" }}>
          {greeting}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ItemListContainer;
