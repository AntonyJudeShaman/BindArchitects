import React from "react";
import { MainNav } from "@/components/main-nav";
import Nav from "@/components/nav";
import { marketingConfig } from "config/marketing";
import { SiteFooter } from "@/components/site-footer";
import { Contactform } from "@/components/contact-form";
import Head from "next/head";
import { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact | Studio Bind",
  description: "Contact us using the contact form",
}

function page() {
  return (
    <div
        className="min-h-screen  py-4 animate-fade-in"
      >
      
        <div className=" md:ml-5 ml-5 mt-4 flex  md:justify-between">
          <MainNav items={marketingConfig.mainNav} />
          <nav className="justify-between">
          {marketingConfig &&
            marketingConfig.mainNav.map((item, index) => (
              <Link
                key={index}
                aria-label="navbar items"
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "group flex flex-col text-right items-center overflow-hidden dmsans hidden mr-4 text-zinc-300 md:inline-block rounded-md p-2 text-sm font-medium hover:underline",
                  item.disabled && "cursor-not-allowed opacity-60"
                )}
              >
                <span className="">{item.title}</span>
              </Link>
            ))}
        </nav>
        </div>
        <p className="md:text-5xl text-4xl font-heading font-semibold sub-gradient mb-8 mt-10 text-center display-animation">
          Contact Us
        </p>
        <Contactform className="" />
        <SiteFooter className="mt-5"/>
    </div>
  );
}

export default page;
