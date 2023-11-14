import React from "react";
import { MainNav } from "@/components/main-nav";
import Nav from "@/components/nav";
import { marketingConfig } from "config/marketing";
import { Contactform } from "@/components/contact-form";
import Head from "next/head";
import { Metadata } from "next";
import Link from "next/link";
import "@/styles/fonts.css";
import { cn } from "@/lib/utils";
import ContactHead from "@/components/contact-head";
import Contact from "@/components/contact";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Contact - Need an Architect? Contact us now!",
  description:
    "Connect with Studio Bind Architects, Chennai's premier architectural firm. Specializing in bespoke solutions for residential and commercial projects, our team blends aesthetics and functionality to redefine the cityscape. Elevate your vision — contact Chennai's leading architecture firm today.",
};

function page() {
  return (
    <div className="min-h-screen max-w-screen py-4 md:-ml-32 md:-mr-32 bg-black">
      <Head>
        <title>Contact - Need an Architect? Contact us now!</title>
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
      <div className="flex flex-row mr-5 items-center justify-between space-x-2 mt-4 bg">
        <p
          className="logo-font md:hidden ml-5 md:ml-0 flex-1 text-4xl font-bold"
          aria-label="BIND"
        >
          BIND
        </p>
        <div className="flex-1 md:hidden justify-end float-right">
          <MainNav items={marketingConfig.mainNav} />
        </div>
      </div>
      <div className="ml-5 md:mr-32 md:ml-32 flex justify-between">
        <div className="hidden md:block">
          {" "}
          <MainNav items={marketingConfig.mainNav} />
        </div>

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
        </nav>
      </div>
     <div className="md:ml-32 md:mr-32 -mb-4">
        {" "}
        <ContactHead />
        <Contactform className="md:mt-20 mt-10" />
        <Contact />
        <SiteFooter  />
      </div>
    </div>
  );
}

export default page;
