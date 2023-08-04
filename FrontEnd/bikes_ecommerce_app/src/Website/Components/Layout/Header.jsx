import { Box } from "@mui/material";
import React from "react";
import NavbarWebsite from "../Navbar";
import { Link } from "react-router-dom";
import Logo from "../../../Images/New Logo Design.png";
const Header = () => {
  return (
    <>
      <Box
        // borderBottom={1}
        position={"fixed"}
        top={0}
        right={0}
        left={0}
        zIndex={12000}
        boxShadow={"0 0 8px rgba(0,0,0,0.5)"}
        sx={{
          backgroundColor: "#c2c2c2a1",
          justifyContent: { lg: "flex-start", xs: "space-between" },
        }}
        display={"flex"}
        alignItems={"center"}
      >
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Box
            // fontFamily={"Raleway"}
            textTransform={"uppercase"}
            color={"white"}
            position={"relative"}
            // paddingX={1}
            // fontSize={"20px"}
          >
            <Box
              fontFamily={"Raleway"}
              component={"img"}
              src={Logo}
              width={"200px"}
              height={"100px"}
            ></Box>
            <Box
              position={"absolute"}
              bottom={10}
              left={"6%"}
              fontFamily={"Raleway"}
            >
              Awais Moto Sports
            </Box>
          </Box>
        </Link>
        <NavbarWebsite />
      </Box>
    </>
  );
};

export default Header;
