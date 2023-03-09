import { useEffect, useState } from "react";
import {
  AppBar,
  IconButton,
  Stack,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/logo_regalosraros.svg";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import clsx from "clsx";

const Navbar = () => {
  const [showStack, setShowStack] = useState(false);

  const toggleStack = () => {
    setShowStack(!showStack);
  };

  // useMediaQuery to get screen size
  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "md")
  );

  const isScreenMdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));

  useEffect(() => setShowStack(false), [isScreenMdUp]);

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
          sx={{
            "&:hover": {
              bgcolor: "transparent",
            },
          }}
          disableRipple
          onClick={toggleStack}
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
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{
            color: "#070707",
            position: { xs: "absolute", md: "static" },
            top: { xs: "64px", md: "auto" },
            left: { xs: "9px", md: "auto" },
            right: { xs: "20px", md: "auto" },
            height: { xs: "auto", md: "100%" },
            width: { xs: "calc(100% - 540px)", md: "auto" },
            paddingLeft: { xs: 10, md: 0 },
            paddingTop: { xs: 5, md: 0 },

            backgroundColor: "white",
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
