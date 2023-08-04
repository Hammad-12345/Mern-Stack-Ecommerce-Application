import { Box, Button } from "@mui/material";
import React from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderAdmin = ({ stateupdatingfunction, stateobject }) => {
  const [openmenustate, updateopenmenu] = useState(true);
  const OpenNavbarsmallscreen = () => {
    if (stateobject) {
      stateupdatingfunction(false);
      updateopenmenu(true);
    } else {
      stateupdatingfunction(true);
      updateopenmenu(false);
    }
  };
  return (
    <>
      <Box
        position={"fixed"}
        right={0}
        top={0}
        // left={0}
        zIndex={12000}
        paddingY={3.39}
        paddingX={5}
        display={"flex"}
        justifyContent={"space-between"}
        sx={{
          boxShadow: "0 0 1px rgba(0,0,0,0.6)",
          backgroundColor: "white",

          left: openmenustate ? { md: "72px", xs: "0px" } : "72px",
        }}
      >
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <MenuIcon
            sx={{
              display: { md: "none", xs: "block" },
            }}
            onClick={OpenNavbarsmallscreen}
          />
          <Link to={"/DashboardAdmin"}>
            <Button
              sx={{
                paddingX: "15px",
                color: "#3699ff",
                textTransform: "capitalize",
                backgroundColor: "rgba(77,89,149,.06)",
                fontWeight: "500",
                fontFamily: "Poppins",
                fontSize: "13px",
                display: { sm: "inline-block", xs: "none" },
              }}
            >
              Dashboard
            </Button>
          </Link>
        </Box>

        <Box display={"flex"} alignItems={"center"} sx={{ cursor: "pointer" }}>
          <ExitToAppIcon
            sx={{
              width: "50px",
              height: "25px",
              borderRadius: "50%",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default HeaderAdmin;
