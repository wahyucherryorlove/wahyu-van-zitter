"use client";

import { Karla, Poppins } from "next/font/google";
import "../styles/globals.css";

import { useEffect, useState } from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";

import { Footer } from "@components/Footer";
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
  const router = usePathname();

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
  }, []);

  return (
    <html lang="en">
      <head>
        {/* <meta charset="UTF-8" /> */}
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>
          {router === "/"
            ? "Wahyudi Umar - Personal Portfolio"
            : router === "/about"
              ? "About Me"
              : router === "services"
                ? "Services"
                : router === "/blog"
                  ? "Blogger me"
                  : router === "/contact" && "Contact me"}
        </title>

        <link rel="shortcut icon" href="/logo.jpg" type="image/x-icon" />
      </head>

      <body className={`${karla.className} ${poppins.className} bg-[#222222]`}>
        <Navbar scrollY={scrollY} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
