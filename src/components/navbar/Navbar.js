import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";

import React from "react";
import { Link } from "react-router-dom";

const pages = ["Maaş Hesaplama", "Asgari Ücret", "Kıdem ve İhbar"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            tax-meter
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/maas-hesaplama">
              <Button sx={{ my: 2, color: "black", display: "block" }}>
                Maaş Hesaplama
              </Button>
            </Link>
            <Link to="/asgari-ucret">
              <Button sx={{ my: 2, color: "black", display: "block" }}>
                Asgari Ücret
              </Button>
            </Link>
            <Link to="/kidem-ihbar">
              <Button sx={{ my: 2, color: "black", display: "block" }}>
                Kıdem ve İhbar
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Link to="/iletisim">
              <Button sx={{ my: 2, color: "black", display: "block" }}>
                İletişim
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
