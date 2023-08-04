import { Box, Typography } from "@mui/material";
import React from "react";

const SalesProductsAdmin = () => {
  return (
    <Box
      p={2}
      boxShadow="0 0 5px rgba(0,0,0,0.6)"
      sx={{ backgroundColor: "#fff", borderRadius: "0.19rem" }}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Poppins",
          fontWeight: "500",
          color: "#181c32",
          fontSize: "17px",
        }}
      >
        Sales Products
      </Typography>
      <Box></Box>
    </Box>
  );
};

export default SalesProductsAdmin;
