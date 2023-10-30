import React from "react";
import { FAQAccordion } from "@/components/faq";
import { MainNav } from "@/components/main-nav";
import Nav from "@/components/nav";
import { marketingConfig } from "config/marketing";
import { SiteFooter } from "@/components/site-footer";
import Questions from "@/components/still-questions";
import { Metadata } from "next";
import Aboutus from "@/components/about-us";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About studio bind architects",
}

function About() {
  return (
    <>
    <title>About | Studio Bind</title>
    <div
      className="min-h-screen animate-fade-in py-8  md:max-w-[78rem] max-w-[28rem] "
    >
      <div className="md:ml-20 ml-10 flex  justify-between">
        <MainNav items={marketingConfig.mainNav} />
        <nav className="justify-between">
               
              {marketingConfig &&
                marketingConfig.mainNav.map((item, index) => (
                  <Link
                  key={index}
                  aria-label="navbar items"
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "group flex flex-col text-right items-center overflow-hidden my-font hidden mr-4 title-gradient md:inline-block rounded-md p-2 text-sm font-medium hover:underline",
                    item.disabled && "cursor-not-allowed opacity-60"
                  )}
                >
                  <span className="">
                    {item.title}
                  </span>
                </Link>
                
                ))}
                
            </nav>
      </div>
      <Aboutus/>
      <Questions />
      <SiteFooter />
    </div>
    </>
  );
}

export default About;
