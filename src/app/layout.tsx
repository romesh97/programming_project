import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import Providers from "./components/providers";

//snackbar
// import { SnackbarProvider } from "notistack";

// export const metadata: Metadata = {
//   title: "pet-site",
//   description: "Dog Crossbreed Platform",

// };

export const metadata: Metadata = {
  title: "Pet Crossbreed Platform",
  description: "Pet Meetup Platform",
  icons: {
    // icon: "/shield-dog-solid.svg",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/shield-dog-solid.svg" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
