import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import CustomTheme from "./themes/custom";
import { Box, CssBaseline } from "@mui/material";
import Footer from "./components/common/footer/page";
import Header from "./components/common/header/page";

//snackbar
// import { SnackbarProvider } from "notistack";
import { Suspense } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "pet-site",
  description: "Dog Crossbreed Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider theme={CustomTheme}>
          {/* <SnackbarProvider maxSnack={3}> */}
            <Suspense fallback={<div>Loading...</div>}>
              <Box component="div" className="container">
                <CssBaseline />
                <Header />
                {children}
              </Box>
              <Footer />
            </Suspense>
          {/* </SnackbarProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
