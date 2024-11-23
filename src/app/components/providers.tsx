// src/components/Providers.tsx
"use client";

import { Suspense } from "react";
import { Inter } from "next/font/google";
import CustomTheme from "../themes/custom";
import { Box, CssBaseline } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";

// Components
import TopNavbar from "./common/header/page";
import Footer from "./common/footer/page";

// Snackbar
import { SnackbarProvider } from "notistack";
import { AuthProvider } from "../context/authContext";

type ProvidersProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <body className={inter.className}>
      <ThemeProvider theme={CustomTheme}>
        <SnackbarProvider maxSnack={3}>
          <AuthProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <Box component="div" className="container">
                <CssBaseline />
                <TopNavbar />
                {children}
              </Box>
              <Footer />
            </Suspense>
          </AuthProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </body>
  );
};

export default Providers;
