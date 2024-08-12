import Navbar from "@/components/Navbar";
import "./globals.css";
import React from "react";
import { Inter, Roboto, Inconsolata } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Js Application",
  description: "A small practice project for Next JS",
  keywords: "Next Js React JS etc. ",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className=" max-w-3xl mx-auto py-10">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
