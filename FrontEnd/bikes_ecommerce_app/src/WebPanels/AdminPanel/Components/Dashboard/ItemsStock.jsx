import { Box, Typography } from "@mui/material";
import React from "react";

const ItemsStockAdmin = () => {
  return (
    <Box
      minHeight={"150px"}
      flex={"230px"}
      sx={{
        backgroundColor: "rgb(22, 27, 162)",
        color: "white",
        borderRadius: "0.42rem",
        boxShadow: "0 0 35px rgba(9,6,8,6.6)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        p: 4,
        rowGap: { sm: 0, xs: 1 },
      }}
    >
      <Typography sx={{ fontFamily: "Poppins", fontSize: "20px" }}>
        Stock (Items)
      </Typography>
      <Typography sx={{ fontFamily: "Poppins" }}>72 (items)</Typography>
    </Box>
  );
};

export default ItemsStockAdmin;
