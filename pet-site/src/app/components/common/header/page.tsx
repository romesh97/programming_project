"use client";
import React, { useState } from "react";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  Box,
  Divider,
  CircularProgress,
  IconButton,
  Menu,
  MenuItem,
  Fade,
  Avatar,
  Stack,
} from "@mui/material";
import { usePathname } from "next/navigation";

interface Link {
  id: number;
  title: string;
  url: string;
  isLogged?: boolean;
}

const links: Link[] = [
  { id: 1, title: "Home", url: "/", isLogged: false },
  { id: 2, title: "Pets", url: "/all-pets", isLogged: false },
  { id: 3, title: "About", url: "/about", isLogged: false },
  { id: 4, title: "Profile", url: "/profile", isLogged: false },
];

const TopNavbar: React.FC = () => {
  // const [isLoaded, setIsLoaded] = useState<boolean>(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [name, setName] = useState<string>("");
  const open = Boolean(anchorEl);
  const pathname = usePathname();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // if (!isLoaded) {
  //   return (
  //     <Box
  //       sx={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "100dvh",
  //       }}
  //     >
  //       <CircularProgress color="secondary" />
  //     </Box>
  //   );
  // }

  return (
    <AppBar position="sticky" sx={{ background: "white" }}>
      <Toolbar>
        <Box
          sx={{ display: "flex", alignItems: "center", flexGrow: 1, gap: 1 }}
        >
          <Typography
            variant="h4"
            component="div"
            sx={{ fontWeight: "bold", ml: 1 }}
          >
            {links.find((link) => link.url === pathname)?.title}
          </Typography>
        </Box>

        <Box component="div" sx={{ display: "flex", flexDirection: "row" }}>
          {links.map((link) => (
            <Box
              key={link.id}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Link key={link.id} href={link.url} passHref>
                <Button
                  color="inherit"
                  sx={{
                    textTransform: "none",
                    color: pathname === link.url ? "#F0801A" : "#5B5B5B",
                    fontWeight: pathname === link.url ? "bold" : "normal",
                    backgroundColor:
                      pathname === link.url ? "#F2F3F3" : "inherit",
                  }}
                >
                  {link.title}
                </Button>
              </Link>
              <Divider
                orientation="vertical"
                sx={{ backgroundColor: "#EEFAF4", height: "20px" }}
              />
            </Box>
          ))}
        </Box>

        <Link href="/auth/signup" passHref>
          <Button
            color="inherit"
            sx={{ textTransform: "none", color: "#000000", fontWeight: 600 }}
          >
            Signup
          </Button>
        </Link>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ pl: 2 }}
        >
          <Avatar sx={{ width: 30, height: 30 }} sizes="small">
            {name.charAt(0)}
          </Avatar>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <KeyboardArrowDownIcon sx={{ color: "black" }} />
          </IconButton>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            sx={{
              ".MuiPopover-paper": {
                border: "1px solid rgba(255, 255, 255, 0.4)",
                px: 2,
              },
            }}
          >
            <Stack direction="row" alignItems="center">
              <Avatar sx={{ width: 30, height: 30 }} sizes="small">
                {name.charAt(0)}
              </Avatar>
              <MenuItem sx={{ fontWeight: "bold" }}>{name}</MenuItem>
            </Stack>
            <Divider
              orientation="horizontal"
              sx={{ backgroundColor: "#EEFAF4", mt: 1, mb: 1 }}
            />
            <Stack direction="row" alignItems="center">
              <LogoutIcon />
              <MenuItem sx={{ color: "#646464" }}>Log Out</MenuItem>
            </Stack>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
