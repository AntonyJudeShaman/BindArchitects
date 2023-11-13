"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import Tilt from "react-parallax-tilt";
import { MainNavItem } from "types";
import { Icons } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import "@/styles/fonts.css";

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
    <div className="flex max-w-full bg md:gap-10">
      <div className="ml-auto">
        
      <Link
        href="/"
        className="hidden  items-center bg space-x-2 md:flex"
        aria-label="BIND"
      >
        <span
          aria-label="BIND"
          className="hidden logo-font text-4xl font-display font-bold sm:inline-block"
        >
          <p className="logo-font font-display" aria-label="BIND">
            BIND
          </p>
        </span>
      </Link>
        <button
          className="flex justify-between bg items-center space-x-2 md:hidden"
          onClick={toggleMobileMenu}
          aria-label="open menu"
        >
          {showMobileMenu ? (
            <Icons.close />
          ) : (
            <div className="burger">
              <input type="checkbox" id="burger" />
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          <span className="font-bold"></span>
        </button>
      </div>

      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
