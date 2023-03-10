import { useEffect, useState } from "react";
import {
  AppBar,
  IconButton,
  Stack,
  Button,
  Box,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/logo_regalosraros.svg";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import clsx from "clsx";

const Navbar = () => {
  const [showStack, setShowStack] = useState(false);

  // useMediaQuery to get screen size
  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "md")
  );

  const isScreenMdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));

  useEffect(() => setShowStack(false), [isScreenMdUp]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      sx={{
        bgcolor: "white",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        height: "64px",
        boxSizing: "border-box",
        position: "static",
      }}
    >
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            "&:hover": {
              bgcolor: "transparent",
            },
          }}
          disableRipple
        >
          <MenuIcon
            className={styles.menuIcon}
            sx={{
              color: "#070707",
              height: "100%",
              display: { xs: "flex", md: "none" },
            }}
            fontSize="large"
          />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <NavLink
            to="/category/men's clothing"
            className={(navData) =>
              navData.isActive ? styles.navLinkActive : styles.navLink
            }
          >
            <MenuItem
              onClick={handleClose}
              sx={{
                "&:hover": {
                  bgcolor: "transparent",
                },
                fontWeight: "inherit",
              }}
            >
              Men
            </MenuItem>
          </NavLink>
          <NavLink
            to="/category/women's clothing"
            className={(navData) =>
              navData.isActive ? styles.navLinkActive : styles.navLink
            }
          >
            <MenuItem
              onClick={handleClose}
              sx={{
                "&:hover": {
                  bgcolor: "transparent",
                },
                fontWeight: "inherit",
              }}
            >
              Women
            </MenuItem>
          </NavLink>
          <NavLink
            to="/category/jewelery"
            className={(navData) =>
              navData.isActive ? styles.navLinkActive : styles.navLink
            }
          >
            <MenuItem
              onClick={handleClose}
              sx={{
                "&:hover": {
                  bgcolor: "transparent",
                },
                fontWeight: "inherit",
              }}
            >
              Jewerly
            </MenuItem>
          </NavLink>
          <NavLink
            to="/category/electronics"
            className={(navData) =>
              navData.isActive ? styles.navLinkActive : styles.navLink
            }
          >
            <MenuItem
              onClick={handleClose}
              sx={{
                "&:hover": {
                  bgcolor: "transparent",
                },
                fontWeight: "inherit",
              }}
            >
              Electronics
            </MenuItem>
          </NavLink>
        </Menu>
      </Box>

      <NavLink to="/" className={clsx(styles.navLink, styles.navLinkLogo)}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{
            "&:hover": {
              bgcolor: "transparent",
            },
          }}
        >
          <img src={Logo} alt="Regalos Raros Icon" />
        </IconButton>
      </NavLink>

      {((isSmallScreen && showStack) || !isSmallScreen) && (
        <Stack
          direction={{ xs: "row" }}
          spacing={3}
          sx={{
            color: "#070707",
            height: "100%",
          }}
        >
          <NavLink
            to="/category/men's clothing"
            className={(navData) =>
              navData.isActive ? styles.navLinkActive : styles.navLink
            }
          >
            <Button
              color="inherit"
              sx={{
                fontWeight: "inherit",
                height: "100%",
                "&:hover": {
                  bgcolor: "transparent",
                },
              }}
              disableRipple
            >
              Men
            </Button>
          </NavLink>
          <NavLink
            to="/category/women's clothing"
            className={(navData) =>
              navData.isActive ? styles.navLinkActive : styles.navLink
            }
          >
            <Button
              color="inherit"
              sx={{
                fontWeight: "inherit",
                height: "100%",
                "&:hover": {
                  bgcolor: "transparent",
                },
              }}
              disableRipple
            >
              Women
            </Button>
          </NavLink>
          <NavLink
            to="/category/jewelery"
            className={(navData) =>
              navData.isActive ? styles.navLinkActive : styles.navLink
            }
          >
            <Button
              color="inherit"
              sx={{
                fontWeight: "inherit",
                height: "100%",
                "&:hover": {
                  bgcolor: "transparent",
                },
              }}
              disableRipple
            >
              Jewerly
            </Button>
          </NavLink>
          <NavLink
            to="/category/electronics"
            className={(navData) =>
              navData.isActive ? styles.navLinkActive : styles.navLink
            }
          >
            <Button
              color="inherit"
              sx={{
                fontWeight: "inherit",
                height: "100%",
                "&:hover": {
                  bgcolor: "transparent",
                },
              }}
              disableRipple
            >
              Electronics
            </Button>
          </NavLink>
        </Stack>
      )}
      <Button color="inherit" sx={{ color: "#023020" }}>
        {<CartWidget cartItems={4} />}
      </Button>
    </AppBar>
  );
};

export default Navbar;
