import { Box, Typography } from "@mui/material";
import React from "react";

const AmountAdmin = () => {
  return (
    <Box
      flex={"230px"}
      minHeight={"150px"}
      sx={{
        backgroundColor: "rgb(253, 92, 23)",
        color: "#fff",
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
        Amount(Totals)
      </Typography>
      <Typography sx={{ fontFamily: "Poppins" }}>122,765 (Amount)</Typography>
    </Box>
  );
};

export default AmountAdmin;
