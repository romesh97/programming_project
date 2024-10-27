"use client";
import { createTheme } from "@mui/material/styles";

// color design tokens export
const CustomTheme = createTheme({
    palette: {
        //black
        primary: {
            main: "#181818",
        },
        //orange
        secondary: {
            main: "#F0801A",
        },
        warning: {
            main: "#6C0303",
        },
    },
    typography: {

        fontSize: 12,

        h1: {

            fontSize: 40,
        },
        h2: {

            fontSize: 32,
        },
        h3: {

            fontSize: 24,
        },
        h4: {

            fontSize: 20,
        },
        h5: {

            fontSize: 16,
        },
        h6: {

            fontSize: 14,
        },
    },
});

export default CustomTheme;
