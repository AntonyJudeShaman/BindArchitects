"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import Tilt from "react-parallax-tilt";
import { MainNavItem } from "types";
import logo from "./logo.png";
import Image from "next/image";
import { marketingConfig } from "config/marketing";
import { MainNav } from "./main-nav";
import { cn } from "@/lib/utils";

export default function Nav() {
 
  return (
    <div className="flex gap-6 max-w-full md:gap-10 bg-black">
      <div className="md:ml-5 ml-5 flex mt-4 justify-between">
        <MainNav items={marketingConfig.mainNav} />
        <nav className="justify-between">
          {marketingConfig &&
            marketingConfig.mainNav.map((item, index) => (
              <Link
                key={index}
                aria-label="navbar items"
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "group flex hover:text-orange-400 flex-col text-right items-center overflow-hidden dmsans hidden mr-4 text-zinc-300 md:inline-block rounded-md p-2 text-sm font-medium hover:underline",
                  item.disabled && "cursor-not-allowed opacity-60"
                )}
              >
                <span className="">{item.title}</span>
              </Link>
            ))}

          <div className="flex max-w-[10rem] justify-end mr-5 space-x-2 bg-black md:hidden">
            <Image height={90} width={90} alt="logo" src={logo} />
          </div>
        </nav>
      </div>{" "}
    </div>
  );
}
