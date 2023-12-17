"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-[#222222] flex justify-center h-24">
      <div className="flex justify-between w-4/5 h-full items-center">
        <h2 className="text-orange-400 font-semibold text-xl">WAHYUDI UMAR</h2>

        <ul className="flex gap-x-8 text-base font-bold">
          <li>
            <Link
              href="/"
              className={
                pathname === "/" ? "text-orange-400" : "text-neutral-50"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={
                pathname === "/about" ? "text-orange-400" : "text-neutral-50"
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={
                pathname === "/services" ? "text-orange-400" : "text-neutral-50"
              }
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={
                pathname === "/blog" ? "text-orange-400" : "text-neutral-50"
              }
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={
                pathname === "/contact" ? "text-orange-400" : "text-neutral-50"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
