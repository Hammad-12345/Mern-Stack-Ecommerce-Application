import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReorderIcon from "@mui/icons-material/Reorder";
import SearchIcon from "@mui/icons-material/Search";
import Form from "./Form";
import Modalcom from "./Modal";
import CloseIcon from "@mui/icons-material/Close";

const NavbarWebsite = () => {
  const [opensearchbar, updateopenseacrhbar] = useState(false);
  const [openBlogsearchbar, updateopenBlogseacrhbar] = useState(false);
  const [openBikesForSalesearchbar, updateopenBikesForSaleseacrhbar] =
    useState(false);
  const [ModalOpenSearchbar, UpdateModalOpenSearch] = useState(false);
  const [findurl] = useState(
    document.URL === "http://localhost:3000/ShopAll" ||
      document.URL === "http://localhost:3000/Blogs" ||
      document.URL === "http://localhost:3000/BikesSales"
  );
  const [OpenMenubarsmallscreen, updatemenubarsmallscreen] = useState(false);

  const openseacrhbars = () => {
    UpdateModalOpenSearch(true);
    if (document.URL === "http://localhost:3000/ShopAll") {
      updateopenseacrhbar(true);
    } else if (document.URL === "http://localhost:3000/Blogs") {
      updateopenBlogseacrhbar(true);
    } else {
      updateopenBikesForSaleseacrhbar(true);
    }
  };
  const SmallScreenNavbar = () => {
    if (OpenMenubarsmallscreen) updatemenubarsmallscreen(false);
    else {
      updatemenubarsmallscreen(true);
    }
  };
  return (
    <>
      {ModalOpenSearchbar && (
        <>
          <Modalcom
            Form={
              <Form
                opensearchbar={opensearchbar}
                openBlogsearchbar={openBlogsearchbar}
                openBikesForSalesearchbar={openBikesForSalesearchbar}
              />
            }
            stateobject={ModalOpenSearchbar}
            UpdateModalOpenSearch={UpdateModalOpenSearch}
          />
        </>
      )}

      <Box flex={1} sx={{ display: { md: "flex", xs: "none" } }}>
        <Box
          flex={1}
          gap={3}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
          paddingX={2}
        >
          <Link to={"/ShopAll"} style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "White",
                fontFamily: "Raleway",
                textTransform: "uppercase",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Shop All
            </Typography>
          </Link>
          <Link to={"/Blogs"} style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "White",
                fontFamily: "Raleway",
                textTransform: "uppercase",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Blog
            </Typography>
          </Link>
          <Link to={"/BikesSales"} style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "White",
                fontFamily: "Raleway",
                textTransform: "uppercase",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {" "}
              Bikes For Sales{" "}
            </Typography>
          </Link>
          <Link to={"/Vlogs"} style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "White",
                fontFamily: "Raleway",
                textTransform: "uppercase",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {" "}
              Vlogs{" "}
            </Typography>
          </Link>
          <Button
            sx={{
              color: "white",
              borderColor: "#bdbbbb78",
              fontFamily: "Raleway",
              fontWeight: "600",
              ":hover": {
                borderColor: "#c1bebe73",
              },
            }}
          >
            Login
          </Button>
          {findurl && (
            <>
              <SearchIcon
                onClick={openseacrhbars}
                sx={{ color: "white", cursor: "pointer" }}
              />
            </>
          )}
          <Button
            variant="contained"
            sx={{
              color: "black",
              fontFamily: "Raleway",
              paddingX: 5,
              backgroundColor: "white",
              fontWeight: "300",
              position: "relative",
              zIndex: 1,
              transition: "transform 0.3s linear ",

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
              },
              " :hover::before": {
                transform: "scaleX(1)",
                borderRadius: "3px",
              },
            }}
            startIcon={<ShoppingCartIcon />}
          >
            Cart (0)
          </Button>
        </Box>
      </Box>
      <Button
        variant="outlined"
        onClick={SmallScreenNavbar}
        sx={{
          color: "white",
          paddingX: 3,
          borderColor: "#bdbbbb78",
          display: { md: "none", xs: "inline-block" },
          ":hover": {
            borderColor: "#c1bebe73",
          },
        }}
      >
        <ReorderIcon />
      </Button>
      {OpenMenubarsmallscreen && (
        <>
          <Box
            position={"absolute"}
            top={0}
            right={0}
            paddingY={2}
            width={230}
            sx={{
              backgroundColor: { sm: "#7d7d7d75", xs: "#13131391" },
              flexDirection: "column",
              display: { md: "none", xs: "flex" },
            }}
          >
            <CloseIcon
              sx={{
                alignSelf: "flex-end",
                color: "white",
                width: 20,
                height: 20,
                borderRadius: "50%",
                marginRight: 1,
                marginTop: 1,
              }}
              onClick={SmallScreenNavbar}
            />
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,

                paddingY: 2,
              }}
            >
              <Link to={"/ShopAll"} style={{ textDecoration: "none" }}>
                <ListItem
                  sx={{ p: 0, borderBottom: 1, borderBottomColor: "#ffffff66" }}
                >
                  <ListItemButton
                    sx={{
                      " div span": {
                        fontFamily: "Poppins",
                        color: "#fff",
                        textTransform: "uppercase",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "14px",
                      },
                    }}
                  >
                    <ListItemText primary="Shop All" />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to={"/Blogs"} style={{ textDecoration: "none" }}>
                <ListItem
                  sx={{ p: 0, borderBottom: 1, borderBottomColor: "#ffffff66" }}
                >
                  <ListItemButton
                    sx={{
                      " div span": {
                        fontFamily: "Poppins",
                        color: "#fff",
                        textTransform: "uppercase",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "14px",
                      },
                    }}
                  >
                    <ListItemText primary="Blogs" />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to={"/BikesSales"} style={{ textDecoration: "none" }}>
                <ListItem
                  sx={{ p: 0, borderBottom: 1, borderBottomColor: "#ffffff66" }}
                >
                  <ListItemButton
                    sx={{
                      " div span": {
                        fontFamily: "Poppins",
                        color: "#fff",
                        textTransform: "uppercase",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "14px",
                      },
                    }}
                  >
                    <ListItemText primary="Bikes For Sales" />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to={"/Vlogs"} style={{ textDecoration: "none" }}>
                <ListItem
                  sx={{ p: 0, borderBottom: 1, borderBottomColor: "#ffffff66" }}
                >
                  <ListItemButton
                    sx={{
                      " div span": {
                        fontFamily: "Poppins",
                        color: "#fff",
                        textTransform: "uppercase",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "14px",
                      },
                    }}
                  >
                    <ListItemText primary="Vlogs" />
                  </ListItemButton>
                </ListItem>
              </Link>
              {findurl && (
                <>
                  <Box
                    sx={{
                      paddingY: "8px",
                      borderBottom: 1,
                      borderBottomColor: "#ffffff66",
                    }}
                  >
                    <SearchIcon
                      onClick={openseacrhbars}
                      sx={{
                        color: "white",
                        cursor: "pointer",

                        width: "100%",
                      }}
                    />
                  </Box>
                </>
              )}

              <Button
                sx={{
                  color: "white",
                  paddingX: 2,
                  borderBottom: 1,
                  borderBottomColor: "#ffffff66",
                  borderRadius: 0,
                  paddingBottom: 1.5,
                  fontFamily: "Poppins",
                  fontWeight: 200,
                }}
                endIcon={<ShoppingCartIcon />}
              >
                Cart
              </Button>
              <Button
                sx={{
                  color: "white",
                  paddingX: 2,
                  borderBottom: 1,
                  borderBottomColor: "#ffffff66",
                  borderRadius: 0,
                  paddingBottom: 1.5,
                  fontFamily: "Poppins",
                  fontWeight: 200,
                }}
              >
                Login
              </Button>
            </List>
          </Box>
        </>
      )}
    </>
  );
};

export default NavbarWebsite;
