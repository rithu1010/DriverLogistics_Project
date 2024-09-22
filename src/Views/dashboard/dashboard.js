import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Avatar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import styles from "./style";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { useTheme } from "@mui/material/styles";
import logo from "../../assets/images/favicon.jpeg";
import OrderManagement from "../orderManagement/index";

function ResponsiveAppBar() {
  const theme = useTheme();
  const style = styles(theme);
  const pages = ["Home", "About", "Blog"];
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((page) => (
          <ListItem
            button
            component={Link}
            to={`/${page.toLowerCase()}`}
            key={page}
          >
            <ListItemText primary={page} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar sx={style.Appbar}>
        <Box sx={style.mainContainerBox}>
          <Toolbar disableGutters>
            <img
              src={logo}
              alt="logo"
              style={{ height: "35px", width: "35px" }}
            />
            <Box sx={style.boxcolor}>qompass</Box>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 10 }}
            ></Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                color="black"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 0, mr: 0 }}>
              <Box sx={style.mailBox}>
                <Box sx={style.mailBox}>
                  <Box sx={style.mailBackgroundBox}>
                    <AddIcCallIcon sx={style.MailIcon} />
                  </Box>
                  <Box sx={style.maintext}>917736172777</Box>
                </Box>
                <Box sx={style.mailBox}>
                  <Box sx={style.mailBackgroundBox}>
                    <MailOutlineIcon sx={style.MailIcon} />
                  </Box>
                  <Box sx={style.maintext}>itsupport@Driverligistics.in</Box>
                </Box>
                <Box>
                  <Avatar
                    sx={{
                      backgroundColor: "#3933e7",
                      color: "#3933e7",
                      cursor: "pointer",
                      height: "26px",
                      width: "26px",
                      marginTop: "2px",
                    }}
                  >
                    g
                  </Avatar>
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
      <Box sx={style.ordermanageBox}>
        <Box sx={style.ordermanageText}>Order Management System</Box>
        <Box sx={style.ordermanageText}>Welcome Guest</Box>
      </Box>
      <Divider sx={style.Divider} />
      <OrderManagement />
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </>
  );
}

export default ResponsiveAppBar;
