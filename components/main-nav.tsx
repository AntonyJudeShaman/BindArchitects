"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import Tilt from "react-parallax-tilt";
import { MainNavItem } from "types";
import { Icons } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import "@/styles/fonts.css"

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="flex gap-6 max-w-full md:gap-10 bg-black">
      <Link
        href="/"
        className="hidden bg-black items-center space-x-2 md:flex"
        aria-label="logo"
      >
        <span className="hidden logo-font text-4xl  font-bold sm:inline-block">
          <Tilt className="logo-font">
            <p className="logo-font">BIND</p>
          </Tilt>
        </span>
      </Link>

      <button
        className="flex items-center space-x-2 bg-black md:hidden"
        onClick={toggleMobileMenu}
        aria-label="open menu"
      >
        {showMobileMenu ? (
          <Icons.close />
        ) : (
          <div className="burger" >
          <input type="checkbox" id="burger" />
          <span></span>
          <span></span>
          <span></span>
        </div>
        )}
        <span className="font-bold"></span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
