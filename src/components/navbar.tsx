"use client";

import Link from "next/link";
import NavLinks from "./nav-links";
import MobileMenu from "./mobile-menu";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 100) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }

      if (currentScroll < lastScrollY) {
        setShow(true);
      } else if (currentScroll > lastScrollY) {
        setShow(false);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed z-20 w-full transition-all delay-200 ${isScrolledDown ? "bg-[#1a1a1a] py-7" : "py-16"} ${show ? "top-0" : "-top-full"}`}
    >
      <nav className="container flex items-center justify-between">
        <Link href="/">
          <img className="h-[21px] sm:h-[40px]" src="/logo.png" alt="logo" />
        </Link>
        <div className="flex gap-6 text-xs font-semibold uppercase tracking-wider text-white xl:hidden">
          <NavLinks bg="white" />
        </div>
        <div className="hidden xl:block">
          <MobileMenu pyControl={isScrolledDown} />
        </div>
      </nav>
    </header>
  );
}
