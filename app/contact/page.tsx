import React from "react";
import { MainNav } from "@/components/main-nav";
import Nav from "@/components/nav";
import { marketingConfig } from "config/marketing";
import { SiteFooter } from "@/components/site-footer";
import { Contactform } from "@/components/contact-form";
import Head from "next/head";
import { Metadata } from "next";
import Link from "next/link";
import logo from "@/components/logo.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ContactHead from "@/components/contact-head";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us - Studio Bind Architects",
  description:
    "Get in touch with Studio Bind for architectural inquiries, collaboration opportunities, or any questions you may have. Reach out to us through our contact form, and we'll be delighted to assist you.",
};

function page() {
  return (
    <div className="min-h-screen max-w-screen py-4 animate-fade-in">
      <title>Contact Us - Studio Bind Architects</title>

      <link rel="canonical" href="https://www.bindhomes.com/contact" />
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
                  "group flex hover:text-orange-400 flex-col text-right items-center overflow-hidden dmsans hidden mr-4 text-zinc-300 md:inline-block rounded-md p-2 text-sm font-medium ",
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
      </div>
      <ContactHead />
      <Contactform className="" />
      <Contact />
      <SiteFooter className="mt-5" />
    </div>
  );
}

export default page;
