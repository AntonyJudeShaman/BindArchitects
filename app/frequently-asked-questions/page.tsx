import React from "react";
import { FAQAccordion } from "@/components/faq";
import { MainNav } from "@/components/main-nav";
import Nav from "@/components/nav";
import { marketingConfig } from "config/marketing";
import { SiteFooter } from "@/components/site-footer";
import Questions from "@/components/still-questions";
import logo from "@/components/logo.png"
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FAQ | Studio Bind",
  description: "Frequently asked questions by clients.",
}

function page() {
  return (
    <>
    <title>FAQ | Studio Bind</title>
    <div
      className="min-h-screen animate-fade-in py-4 mt-4"
    >
      <div className="md:ml-5 ml-5 flex  justify-between">
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
      <p className="md:text-5xl text-4xl font-heading font-semibold sub-gradient mb-5 mt-10 text-center display-animation">
        Frequently asked questions
      </p>
      <FAQAccordion />
      <Questions />
      <SiteFooter />
    </div>
    </>
  );
}

export default page;
