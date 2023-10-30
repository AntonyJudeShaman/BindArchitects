"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import Tilt from "react-parallax-tilt";
import { MainNavItem } from "types";
import { Icons } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import { HomePage } from "config/marketing";
import { cn } from "@/lib/utils";
import logo from "./logo.png"
import Image from "next/image";

interface MainNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
}

export function ProjectNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center  space-x-2 md:flex">
        <span className="hidden logo-font text-4xl display-animation2 font-bold sm:inline-block sm:justify-center text-center">
          <Tilt className="logo-font" aria-label="Logo"><Image height={70} width={70} alt="logo" src={logo} /></Tilt>
        </span>
      </Link>
      <nav className="flex space-x-4 hidden md:block">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.disabled ? "#" : item.href}
            aria-label="Navbar items"
            className={cn(
              "flex-row items-center rounded-md p-2 text-sm text-foreground font-medium hover:text-zinc-300",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={toggleMobileMenu}
      >
        {showMobileMenu ? (
          <Icons.close />
        ) : (
          <p className="logo-font text-4xl display-animation2 font-bold sm:inline-block">
            BIND
          </p>
        )}
        <span className="font-bold"></span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
