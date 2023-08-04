import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InventoryIcon from "@mui/icons-material/Inventory";
import CategoryIcon from "@mui/icons-material/Category";
import BikeScooterIcon from "@mui/icons-material/BikeScooter";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
export default function NavbarAdmin() {
  const [menubarobject, updateobjectmenubar] = React.useState({
    dashboard: false,
    Category: false,
    Product: false,
    Blog: false,
    BikesForSales: false,
    ProductOrder: false,
  });

  const HoverEffects = (property) => {
    updateobjectmenubar({ ...menubarobject, [property]: true });
  };
  const HoverEffectOut = (property) => {
    updateobjectmenubar({ ...menubarobject, [property]: false });
  };

  return (
    <List sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <Link to={"/DashboardAdmin"}>
        <ListItemButton
          sx={{
            paddingX: "0px",
            paddingY: "20px",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.03)",
            borderRadius: "22px",
          }}
          onMouseOver={() => HoverEffects("dashboard")}
          onMouseOut={() => HoverEffectOut("dashboard")}
        >
          <ListItemIcon sx={{ justifyContent: "center", color: "#c8c8c8" }}>
            <GridViewRoundedIcon />
            {menubarobject.dashboard && (
              <>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    position: "absolute",
                    left: "0px",
                    bottom: "0px",
                    zIndex: 11000,
                    color: "#6e6e6e",
                    width: "120px",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "13px",
                  }}
                >
                  Dashboard
                </Typography>
              </>
            )}
          </ListItemIcon>
        </ListItemButton>
      </Link>
      <Link to={"/Category"}>
        <ListItemButton
          sx={{
            paddingX: "0px",
            paddingY: "20px",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.03)",
            borderRadius: "22px",
          }}
          onMouseOver={() => HoverEffects("Category")}
          onMouseOut={() => HoverEffectOut("Category")}
        >
          <ListItemIcon sx={{ justifyContent: "center", color: "#c8c8c8" }}>
            <CategoryIcon />
            {menubarobject.Category && (
              <>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    position: "absolute",
                    left: "0px",
                    bottom: "0px",
                    zIndex: 11000,
                    color: "#6e6e6e",
                    width: "120px",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "13px",
                  }}
                >
                  Category
                </Typography>
              </>
            )}
          </ListItemIcon>
        </ListItemButton>
      </Link>
      <Link to={"/Product"}>
        <ListItemButton
          sx={{
            paddingX: "0px",
            paddingY: "20px",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.03)",
            borderRadius: "22px",
          }}
          onMouseOver={() => HoverEffects("Product")}
          onMouseOut={() => HoverEffectOut("Product")}
        >
          <ListItemIcon sx={{ justifyContent: "center", color: "#c8c8c8" }}>
            <InventoryIcon />
            {menubarobject.Product && (
              <>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    position: "absolute",
                    left: "0px",
                    bottom: "0px",
                    zIndex: 11000,
                    color: "#6e6e6e",
                    width: "120px",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "13px",
                  }}
                >
                  Product
                </Typography>
              </>
            )}
          </ListItemIcon>
        </ListItemButton>
      </Link>
      <Link to={"/Blog"}>
        <ListItemButton
          sx={{
            paddingX: "0px",
            paddingY: "20px",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.03)",
            borderRadius: "22px",
          }}
          onMouseOver={() => HoverEffects("Blog")}
          onMouseOut={() => HoverEffectOut("Blog")}
        >
          <ListItemIcon sx={{ justifyContent: "center", color: "#c8c8c8" }}>
            <i class="fa-solid fa-blog"></i>
            {menubarobject.Blog && (
              <>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    position: "absolute",
                    left: "0px",
                    bottom: "0px",
                    zIndex: 11000,
                    color: "#6e6e6e",
                    width: "120px",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "13px",
                  }}
                >
                  Blog
                </Typography>
              </>
            )}
          </ListItemIcon>
        </ListItemButton>
      </Link>
      <Link to={"/BikesForSales"}>
        <ListItemButton
          sx={{
            paddingX: "0px",
            paddingY: "20px",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.03)",
            borderRadius: "22px",
          }}
          onMouseOver={() => HoverEffects("BikesForSales")}
          onMouseOut={() => HoverEffectOut("BikesForSales")}
        >
          <ListItemIcon sx={{ justifyContent: "center", color: "#c8c8c8" }}>
            <BikeScooterIcon />
            {menubarobject.BikesForSales && (
              <>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    position: "absolute",
                    left: "0px",
                    bottom: "0px",
                    zIndex: 11000,
                    color: "#6e6e6e",
                    width: "120px",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "13px",
                  }}
                >
                  Bikes
                </Typography>
              </>
            )}
          </ListItemIcon>
        </ListItemButton>
      </Link>
      <Link to={"/ProductOrderAdmin"}>
        <ListItemButton
          sx={{
            paddingX: "0px",
            paddingY: "20px",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.03)",
            borderRadius: "22px",
          }}
          onMouseOver={() => HoverEffects("ProductOrder")}
          onMouseOut={() => HoverEffectOut("ProductOrder")}
        >
          <ListItemIcon sx={{ justifyContent: "center", color: "#c8c8c8" }}>
            <i class="fa-brands fa-first-order"></i>
            {menubarobject.ProductOrder && (
              <>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    position: "absolute",
                    left: "0px",
                    bottom: "0px",
                    zIndex: 11000,
                    color: "#6e6e6e",
                    width: "120px",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "13px",
                  }}
                >
                  Orders
                </Typography>
              </>
            )}
          </ListItemIcon>
        </ListItemButton>
      </Link>
    </List>
  );
}
