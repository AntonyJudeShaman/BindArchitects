import React from "react";
import { MainNav } from "@/components/main-nav";
import Nav from "@/components/nav";
import { marketingConfig } from "config/marketing";
import { SiteFooter } from "@/components/site-footer";
import { Contactform } from "@/components/contact-form";
import Head from "next/head";
import { Metadata } from "next";
import Link from "next/link";
import logo from "@/components/logo.png"
import Image from "next/image";
import { cn } from "@/lib/utils";
import ContactHead from "@/components/contact-head"

export const metadata: Metadata = {
  title: "Contact | Studio Bind",
  description: "Contact us using the contact form",
}

function page() {
  return (
    <div
        className="min-h-screen max-w-full py-4 animate-fade-in"
      >
      
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
        </nav>
        <div className="flex max-w-[10rem] justify-end mr-5 space-x-2 bg-black md:hidden">
                <Image height={90} width={90} alt="logo" src={logo} />
              </div>
      </div>
        <ContactHead/>
        <Contactform className="" />
        <SiteFooter className="mt-5"/>
    </div>
  );
}

export default page;
