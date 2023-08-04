import { Box } from "@mui/material";
import React from "react";
import ItemsStockAdmin from "./ItemsStock";
import OrdersAdmin from "./Orders";
import AmountAdmin from "./Amount";
import LatestProductAdmin from "./LatestProduct";
import SalesProductsAdmin from "./SalesProducts";

const DashboardDatacomp = () => {
  return (
    <>
      <Box
        sx={{ fontFamily: "Poppins", width: { md: "90%", xs: "100%" } }}
        display={"flex"}
        flexDirection={"column"}
        gap={5}
        top={"-100px"}
        position={"relative"}
      >
        <Box
          sx={{
            width: { md: "90%", xs: "100%" },
            p: { md: "0px", xs: "15px" },
          }}
          alignSelf={"center"}
          display={"flex"}
          justifyContent={"space-evenly"}
          flexWrap={"wrap"}
          gap={3}
        >
          <ItemsStockAdmin />
          <OrdersAdmin />
          <AmountAdmin />
        </Box>

        <Box
          display={"flex"}
          gap={3}
          flexDirection={"column"}
          flexWrap={"wrap"}
          sx={{ p: { md: 0, xs: 2 } }}
        >
          <LatestProductAdmin />
          <SalesProductsAdmin />
        </Box>
      </Box>
    </>
  );
};

export default DashboardDatacomp;
