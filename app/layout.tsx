import type { Metadata } from "next";
import { Open_Sans,Raleway } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import Navbar from "./components/Navbar";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aniruddha Kajave",
  description:
    "Full stack developer with expertise in front-end and back-end development, experience in working with cross-functional teams.",
  openGraph: {
    title: "Aniruddha Kajave",
    description:
      "Full stack developer with expertise in front-end and back-end development, experience in working with cross-functional teams.",
    images: "",
    url: "",
    siteName: "Aniruddha Kajave",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider defaultColorScheme="dark">
          <Navbar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
