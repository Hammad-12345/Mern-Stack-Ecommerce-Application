import {
  Box,
  Button,
  // List,
  // ListItem,
  // ListItemButton,
  // ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Logo from "../../../Images/New Logo Design.png";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const [categoryfooter] = useState([
    {
      MenuItem: "ShopAll",
      navigatelink: "ShopAll",
    },
    {
      MenuItem: "Blogs",
      navigatelink: "Blogs",
    },
    {
      MenuItem: "BikesForSales",
      navigatelink: "BikesSales",
    },
    {
      MenuItem: "Vlogs",
      navigatelink: "Vlogs",
    },
    {
      MenuItem: "HelpCenter",
      navigatelink: "HelpCenter",
    },
    {
      MenuItem: "PrivacyPolicy",
      navigatelink: "PrivacyPolicy",
    },
  ]);

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        paddingX={5}
        paddingY={3}
        marginTop={2}
        sx={{ backgroundColor: "#292929" }}
      >
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          // gap={2}
          alignItems={"center"}
          borderBottom={1}
          paddingY={4}
          borderColor={"rgb(145, 145, 145)"}
          sx={{ gap: { md: "10px", xs: "35px" } }}
        >
          <Box
            sx={{
              flex: { md: "250px", lg: "200px", xs: "100%" },
              fontSize: "32px",
              fontFamily: "Poppins",
              // border: 1,
            }}
          >
            <Box sx={{ color: "rgb(255, 255, 255)" }}>Get in Touch</Box>
            <Box sx={{ color: "rgb(255, 255, 255)" }}>(92) 315-5707151</Box>
          </Box>
          <Box
            sx={{
              flex: { md: "165px", lg: "200px", xs: "100%" },
              // border: 1
            }}
          >
            <TextField
              label={"Email"}
              type={"email"}
              fullWidth
              sx={{
                "div fieldset": {
                  border: "none",
                  borderBottom: "1px solid rgb(145, 145, 145)",
                  borderRadius: 0,
                },
                "div:hover fieldset": {
                  borderColor: "rgb(145, 145, 145) !important",
                },
                label: {
                  fontFamily: "Poppins",
                  fontSize: "24px",
                  color: "#444",
                  fontStyle: "italic",
                },
              }}
            ></TextField>
          </Box>
          <Box
            sx={{
              flex: { md: "165px", lg: "200px", xs: "100%" },
              // border: 1
            }}
          >
            <TextField
              label={"Message"}
              type={"text"}
              multiline
              fullWidth
              sx={{
                "div fieldset": {
                  border: "none",
                  borderBottom: "1px solid rgb(145, 145, 145)",
                  borderRadius: 0,
                },
                "div:hover fieldset": {
                  borderColor: "rgb(145, 145, 145) !important",
                },
                label: {
                  fontFamily: "Poppins",
                  fontSize: "24px",
                  color: "#444",
                  fontStyle: "italic",
                },
              }}
            ></TextField>
          </Box>
          <Box
            sx={{
              flex: { md: "170px", lg: "200px", xs: "100%" },
              // border: 1
            }}
            display={"flex"}
            justifyContent={"center"}
          >
            <Button
              variant="contained"
              sx={{
                color: "black",
                backgroundColor: "#fff",
                fontFamily: "Raleway",
                fontWeight: "500",
                alignSelf: { sm: "flex-start", xs: "center" },
                paddingX: 6,
                paddingY: 2,
                position: "relative",
                zIndex: 1,
                transition: "transform 0.3s linear ",
                borderRadius: 0,

                " :hover": {
                  backgroundColor: "#fff",
                  color: "#fff",
                },
                " ::before": {
                  content: '""',
                  backgroundColor: "black",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  zIndex: -1,
                  transform: "scaleX(0)",
                  transition: "transform 0.3s ",
                  transitionTimingFunction: "cubic-bezier(0.5,1.6,0.4,0.7)r",
                  transformOrigin: "0 0",
                  borderRadius: 0,
                },
                " :hover::before": {
                  transform: "scaleX(1)",
                },
              }}
            >
              Send Now
            </Button>
          </Box>
        </Box>

        <Box
          display={"flex"}
          flexWrap={"wrap"}
          gap={4}
          paddingY={4}
          borderBottom={1}
          borderColor={"rgb(145, 145, 145)"}
        >
          <Box
            sx={{
              flex: { lg: "200px", md: "100px", xs: "100%" },
              justifyContent: { md: "flex-start", xs: "center" },
            }}
            display={"flex"}
          >
            <Box
              component={"img"}
              src={Logo}
              sx={{ width: { lg: "250px", xs: "200px" } }}
            ></Box>
          </Box>

          <Box
            sx={{
              flex: { md: "200px", xs: "100%" },
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                fontFamily: "Poppins",
                color: "rgb(255,255,255)",
                fontSize: "28px",
              }}
            >
              About us
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={2}>
              <Typography
                sx={{ fontFamily: "Poppins", color: "rgb(255,255,255)" }}
              >
                Welcome to our online bikes ecommerce accessories store! We
                offer a wide selection of high-quality bike accessories at
                competitive prices. Our team of cycling enthusiasts is here to
                provide expert advice and ensure your satisfaction. Shop with us
                for a secure and fast shipping experience. Happy cycling!
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              flex: "200px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                fontFamily: "Poppins",
                color: "rgb(255,255,255)",
                fontSize: "28px",
              }}
            >
              Our Contacts
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={2}>
              <Typography
                sx={{ fontFamily: "Poppins", color: "rgb(255,255,255)" }}
              >
                Flat # 28,Block # 04 Officers Colony Aiou Islamabad H/8
              </Typography>
              <Typography
                sx={{ fontFamily: "Poppins", color: "rgb(255,255,255)" }}
              >
                hafizmuhammadhammad50@gmail.com
              </Typography>
              <Typography
                sx={{ fontFamily: "Poppins", color: "rgb(255,255,255)" }}
              >
                (92) 315-5707151
              </Typography>
              <Typography></Typography>
            </Box>
            <Box display={"flex"} gap={2}>
              <FacebookIcon
                sx={{ color: "rgb(255,255,255)", backgroundColor: "#292929" }}
              />
              <InstagramIcon sx={{ color: "rgb(255,255,255)" }} />
              <YouTubeIcon sx={{ color: "rgb(255,255,255)" }} />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { md: "20px", xs: "26px" },
          }}
        >
          <Box
            sx={{
              flex: { md: "200px", xs: "100%" },
              textAlign: { md: "start", xs: "center" },
            }}
            component={"p"}
            fontFamily={"Poppins"}
            color={"white"}
          >
            Copyright © 2023 Awais Moto Sports. All Rights Reserved.
          </Box>

          <Box
            sx={{
              flex: { md: "200px", xs: "100%" },
              display: "flex",
              flexWrap: "wrap",
              justifyContent: { md: "flex-start", xs: "center" },
              gap: { lg: "24px", md: "14px", xs: "32px" },
            }}
          >
            {categoryfooter.map((Element) => (
              <>
                <Link
                  to={`/${Element.navigatelink}`}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      color: "White",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                    }}
                  >
                    {Element.MenuItem}
                  </Typography>
                </Link>
              </>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
