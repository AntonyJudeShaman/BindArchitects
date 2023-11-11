import * as React from "react"
import Link from "next/link"
import Tilt from "react-parallax-tilt"
import { MainNavItem } from "types"
import { cn } from "@/lib/utils"
import { useLockBody } from "hooks/use-lock-body"
import "@/styles/fonts.css"

interface MobileNavProps {
  items: MainNavItem[]
  children?: React.ReactNode
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody()

  return (
    <div
      className={cn(
        "slide-in-from-bottom-100 max-w-full bg-black fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
        <span className="hidden logo-font text-4xl display-animation2 font-bold sm:inline-block">
          <Tilt className="logo-font">
            <p className="logo-font">BIND</p>
          </Tilt>
        </span>
      </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              aria-label="navbar items"
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
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
  )
}
