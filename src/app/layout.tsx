"use client";

import type { Metadata } from "next";
import { Karla, Poppins } from "next/font/google";
import "../styles/globals.css";

import { useEffect, useState } from "react";

import { Navbar } from "@components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const karla = Karla({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrollY, setScrollY] = useState(0);
  const isBrowser = () => typeof window !== "undefined";

  useEffect(() => {
    if (!isBrowser()) return;
    window.scrollTo({ top: scrollY });

    function handleScroll() {
      setScrollY(window.scrollY);
    }
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <html lang="en">
      <body
        className={`${karla.className} ${poppins.className} bg-[#222222] mb-[200rem]`}
      >
        <Navbar scrollY={scrollY} />
        {children}
      </body>
    </html>
  );
}
