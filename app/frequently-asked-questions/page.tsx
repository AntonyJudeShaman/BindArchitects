import React from "react";
import { FAQAccordion } from "@/components/faq";
import { MainNav } from "@/components/main-nav";
import Nav from "@/components/nav";
import { marketingConfig } from "config/marketing";
import { SiteFooter } from "@/components/site-footer";
import Questions from "@/components/still-questions";
import logo from "@/components/logo.png";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Head from "next/head";
import "@/styles/fonts.css";

export const metadata: Metadata = {
  title: "FAQ - Find answers to your questions | Bind Architects - Chennai",
  description:
    "Find answers to common queries about our architectural services and expertise. Explore our FAQ section to get insights into Studio Bind's offerings, processes, and more. Explore Studio Bind Architects' FAQ page for insightful answers to common questions about our architectural services in Chennai. From project inquiries to design inspirations, find expert guidance on residential and commercial spaces. Elevate your understanding of the architectural process with Chennai's leading firm. Have a question? Find the answer here at Studio Bind Architects.",
};

function page() {
  return (
    <>
      <Head>
        <title>FAQ - Studio Bind Architects - Best Architects in Chennai</title>
        <link
          rel="canonical"
          href="https://www.bindhomes.com/frequently-asked-questions"
        />
        <meta
          property="og:description"
          content="Explore Studio Bind Architects' FAQ page for insightful answers to common questions about our architectural services in Chennai. From project inquiries to design inspirations, find expert guidance on residential and commercial spaces. Elevate your understanding of the architectural process with Chennai's leading firm. Have a question? Find the answer here at Studio Bind Architects."
        />

        <meta
          name="description"
          content="Explore Studio Bind Architects' FAQ page for insightful answers to common questions about our architectural services in Chennai. From project inquiries to design inspirations, find expert guidance on residential and commercial spaces. Elevate your understanding of the architectural process with Chennai's leading firm. Have a question? Find the answer here at Studio Bind Architects."
        />

        <meta
          property="og:title"
          content="FAQ - Studio Bind Architects - Best Architects in Chennai"
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
      <div className="min-h-screen mt-4">
        <div className="md:ml-0 ml-5 flex  justify-between">
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
                    "group flex hover:bg-slate-900 hover:text-orange-400 flex-col text-right items-center overflow-hidden dmsans hidden mr-4 text-zinc-300 md:inline-block rounded-md p-2 text-sm font-medium",
                    item.disabled && "cursor-not-allowed opacity-60"
                  )}
                >
                  <span className="">{item.title}</span>
                </Link>
              ))}
          </nav>
        </div>
        <p className="md:text-5xl text-4xl p-4 dmsans mb-5 mt-10 text-center ">
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
