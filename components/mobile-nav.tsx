import * as React from "react";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { MainNavItem } from "types";
import { cn } from "@/lib/utils";
import { useLockBody } from "hooks/use-lock-body";
import "@/styles/fonts.css";

interface MobileNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody();

  return (
    <div
      className={cn(
        "slide-in-from-right transition-tranformation duration-350  max-w-full  min-h-screen fixed inset-0 top-16 z-50 grid grid-flow-row auto-rows-max overflow-auto shadow-md animate-in md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 h-screen bg p-4 text-popover-foreground shadow-md">
       
        <nav className="justify-center flex flex-col ">
          <p className="p-2">Menu</p>
          {items.map((item, index) => (
            <Link
              key={index}
              aria-label="navbar items"
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-end text-5xl mb-5 rounded-md p-2 dmsans hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
}
