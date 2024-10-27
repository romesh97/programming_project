"use client";
import React, {  useState } from "react";
import Link from "next/link";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";

import {
    Typography,
    AppBar,
    Toolbar,
    Button,
    Box,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    Fade,
    Avatar,
    Stack,
} from "@mui/material";


interface Link {
    id: number;
    title: string;
    url: string;
}

const links: Link[] = [
    {
        id: 1,
        title: "Home",
        // url: "/dashboard",
        url: "/",
    },
    {
        id: 2,
        title: "About",
        url: "/about",
    },
    {
        id: 3,
        title: "All Dogs",
        url: "/dashboard",
    },
    {
        id: 4,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 5,
        title: "Contributions",
        url: "/contributions",
    },
];

const TopNavbar: React.FC = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const openNav = Boolean(anchorElNav);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClickNav = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleCloseNav = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" sx={{ background: "white" }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link href="/" passHref></Link>
                </Typography>

                <Box component="div">
                    {links.map((link) => (
                        <Link key={link.id} href={link.url} passHref>
                            <Button
                                color="inherit"
                                sx={{ textTransform: "none", color: "#5B5B5B" }}
                            >
                                {link.title}
                            </Button>
                        </Link>
                    ))}
                </Box>
                <Divider
                    orientation="vertical"
                    sx={{ backgroundColor: "#EEFAF4", height: "20px" }}
                />

                <Link href="/auth/login" passHref>
                    <Button
                        color="inherit"
                        sx={{ textTransform: "none", color: "#000000", fontWeight: 600 }}
                    >
                        Login
                    </Button>
                </Link>

                <Link
                    href="/profile/postAds"
                    passHref
                >
                    <Button
                        sx={{
                            textTransform: "none",
                            backgroundColor: "#F0801A !important",
                            color: "#FFF",
                            borderRadius: "15px",
                            height: "38px",
                            width: "110px",
                            mx: 2,
                        }}
                    >
                        "Register"
                    </Button>
                </Link>

                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="flex-end"
                >
                    <Avatar sx={{ width: 30, height: 30 }} sizes="small">
                        R
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
                            top: "0.7em",
                            left: "-2.1em",
                            ".MuiPopover-paper": {
                                border: "1px solid rgba(255, 255, 255, 0.4);",
                                padding: "14px",
                            },
                        }}
                    >
                        <Stack direction="row" alignItems="center">
                            <Avatar sx={{ width: 30, height: 30 }} sizes="small">
                                Marasinghe
                            </Avatar>

                            <MenuItem sx={{ fontWeight: "bold" }}>
                                Marasinghe
                            </MenuItem>
                        </Stack>
                        <Divider
                            orientation="horizontal"
                            sx={{ backgroundColor: "#EEFAF4", mt: 2, mb: 1 }}
                        />
                        <Stack direction="row" alignItems="center">
                            <ContentPasteIcon />
                            <MenuItem sx={{ color: "#646464" }}>My Ads</MenuItem>
                        </Stack>
                        <Stack direction="row" alignItems="center">
                            <EditIcon />
                            <MenuItem sx={{ color: "#646464" }}>Edit Profile</MenuItem>
                        </Stack>
                        <Divider
                            orientation="horizontal"
                            sx={{ backgroundColor: "#EEFAF4", mt: 4, mb: 2 }}
                        />
                        <Stack direction="row" alignItems="center">
                            <LogoutIcon />
                            <MenuItem sx={{ color: "#646464" }} >
                                Log Out
                            </MenuItem>
                        </Stack>
                    </Menu>
                </Box>

            </Toolbar>
        </AppBar>
    );
};

export default TopNavbar;
