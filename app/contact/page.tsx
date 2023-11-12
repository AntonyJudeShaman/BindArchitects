import React from "react";
import { MainNav } from "@/components/main-nav";
import Nav from "@/components/nav";
import { marketingConfig } from "config/marketing";
import { SiteFooter } from "@/components/site-footer";
import { Contactform } from "@/components/contact-form";
import Head from "next/head";
import { Metadata } from "next";
import Link from "next/link";
import "@/styles/fonts.css";
import { cn } from "@/lib/utils";
import ContactHead from "@/components/contact-head";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us - Studio Bind Architects",
  description:
    "Connect with Studio Bind Architects, Chennai's premier architectural firm. Specializing in bespoke solutions for residential and commercial projects, our team blends aesthetics and functionality to redefine the cityscape. Elevate your vision — contact Chennai's leading architecture firm today.",
};

function page() {
  return (
    <div className="min-h-screen max-w-screen py-4">
      <Head>
        <title>
          Contact Us - Studio Bind Architects - Best Architects in Chennai
        </title>
        <link rel="canonical" href="https://www.bindhomes.com/contact" />
        <meta
          property="og:description"
          content="Connect with Studio Bind Architects, Chennai's premier architectural firm. Specializing in bespoke solutions for residential and commercial projects, our team blends aesthetics and functionality to redefine the cityscape. Elevate your vision — contact Chennai's leading architecture firm today."
        />
        <meta
          name="description"
          content="Connect with Studio Bind Architects, Chennai's premier architectural firm. Specializing in bespoke solutions for residential and commercial projects, our team blends aesthetics and functionality to redefine the cityscape. Elevate your vision — contact Chennai's leading architecture firm today."
        />

        <meta
          property="og:title"
          content="Contact Us - Studio Bind Architects - Best Architects in Chennai"
        />
      </Head>
      <div className="md:ml-0 ml-5 flex mt-4 justify-between">
        <MainNav items={marketingConfig.mainNav} />
        <nav className="justify-between">
          {marketingConfig &&
            marketingConfig.mainNav.map((item, index) => (
              <Link
                key={index}
                aria-label={item.title}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "group flex hover:bg-slate-900 hover:text-orange-400 flex-col text-right items-center overflow-hidden dmsans hidden mr-4 text-zinc-300 md:inline-block rounded-md p-2 text-sm font-medium ",
                  item.disabled && "cursor-not-allowed opacity-60"
                )}
              >
                <span className="">{item.title}</span>
              </Link>
            ))}

          <div className="flex mr-5 items-center space-x-2 bg-black md:hidden">
            <p className="logo-font text-4xl font-bold" aria-label="BIND">
              BIND
            </p>
          </div>
        </nav>
      </div>
      <ContactHead />
      <Contactform className="" />
      <Contact />
      <SiteFooter className="mt-5 md:-ml-8" />
    </div>
  );
}

export default page;
