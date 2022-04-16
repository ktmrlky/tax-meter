import {
  AppBar,
  Box,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
  Menu,
  Container,
  ToggleButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const pages = ["MAAŞ HESAPLAMA", "ASGARİ ÜCRET", "KIDEM VE İHBAR"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const url = useLocation();
  const [selected, setSelected] = useState(url.pathname);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" elevation={0} sx={{ py: 1 }}>
      <Container sx={{ mt: 1 }}>
        <Toolbar disableGutters>
          <Link to="/" onClick={() => setSelected("/")}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                marginRight: 5,
                color: "black",
              }}
            >
              LOGO
            </Typography>
          </Link>
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
                display: { xs: "block", md: "none", color: "black" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={`/${page
                    .toLowerCase()
                    .replace(/ /g, "-")
                    .normalize("NFD")
                    .replace(/\p{Diacritic}/gu, "")}`}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              color: "black",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: 5,
            }}
          >
            <Link to="/maas-hesaplama" className="navLink">
              <ToggleButton
                value="maas-hesaplama"
                style={{ backgroundColor: "transparent" }}
                selected={selected === "/maas-hesaplama"}
                onChange={() => setSelected("/maas-hesaplama")}
              >
                MAAŞ HESAPLAMA
              </ToggleButton>
            </Link>
            <Link to="/asgari-ucret" className="navLink">
              <ToggleButton
                value="asgari-ucret"
                style={{ backgroundColor: "transparent" }}
                selected={selected === "/asgari-ucret"}
                onChange={() => setSelected("/asgari-ucret")}
              >
                ASGARİ ÜCRET
              </ToggleButton>
            </Link>
            <Link to="/kidem-ve-ihbar" className="navLink">
              <ToggleButton
                value="kidem-ve-ihbar"
                style={{ backgroundColor: "transparent" }}
                selected={selected === "/kidem-ihbar"}
                onChange={() => setSelected("/kidem-ihbar")}
              >
                KIDEM VE İHBAR
              </ToggleButton>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Link to="/iletisim" className="navLink">
              <ToggleButton
                value="iletisim"
                style={{ backgroundColor: "transparent" }}
                selected={selected === "/iletisim"}
                onChange={() => setSelected("/iletisim")}
              >
                İLETİŞİM
              </ToggleButton>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
