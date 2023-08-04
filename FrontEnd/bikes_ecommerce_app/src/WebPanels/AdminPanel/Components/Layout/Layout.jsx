import React, { useState } from "react";
import HeaderAdmin from "./Header";
import { Stack, Box } from "@mui/material";
import SidebarAdmin from "./Sidebar";
import { Link } from "react-router-dom";

const Layout = ({ DashboardData }) => {
  const [OpenMenuLowScreen, updatemenuopenlowscreen] = useState(false);
  return (
    <>
      <Stack flexDirection={"row"} position={"relative"}>
        <Box
          height={"100vh"}
          p={1}
          paddingY={"65px"}
          position={"sticky"}
          top={0}
          zIndex={13000}
          sx={{
            boxShadow: "0 0 8px rgba(0,0,0,0.6)",
            display: { md: "flex", xs: "none" },
            overflowY: { lg: "inherit", xs: "scroll" },
          }}
          display={"flex"}
          flexDirection={"column"}
          rowGap={4}
        >
          <Link to={"/DashboardAdmin"} style={{ alignSelf: "center" }}>
            <Box
              component={"img"}
              src="https://preview.keenthemes.com/metronic8/demo6/assets/media/logos/demo6.svg"
              width={"40px"}
            ></Box>
          </Link>
          <SidebarAdmin />
        </Box>

        <Box
          flex={1}
          position={"relative"}
          sx={{ minHeight: { md: "auto", xs: "100vh" } }}
          backgroundColor={"#d3d3d3d4"}
        >
          <Box minHeight={"90px"}>
            <HeaderAdmin
              stateupdatingfunction={updatemenuopenlowscreen}
              stateobject={OpenMenuLowScreen}
            />
          </Box>
          {OpenMenuLowScreen && (
            <>
              <Box
                height={"100vh"}
                p={1}
                paddingY={"65px"}
                position={"fixed"}
                top={0}
                zIndex={13000}
                sx={{
                  boxShadow: "0 0 8px rgba(0,0,0,0.6)",
                  backgroundColor: "white",
                  overflowY: "scroll",
                  display: { xs: "flex", lg: "none" },
                }}
                flexDirection={"column"}
                rowGap={4}
              >
                <Link to={"/DashboardAdmin"} style={{ alignSelf: "center" }}>
                  <Box
                    component={"img"}
                    src="https://preview.keenthemes.com/metronic8/demo6/assets/media/logos/demo6.svg"
                    width={"40px"}
                  ></Box>
                </Link>
                <SidebarAdmin />
              </Box>
            </>
          )}

          <Box height={"150px"} sx={{ backgroundColor: "#2c294b" }}></Box>
          <Box display={"flex"} justifyContent={"center"}>
            {DashboardData}
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Layout;
