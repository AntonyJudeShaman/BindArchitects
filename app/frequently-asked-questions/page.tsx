import React from "react";
import { FAQAccordion } from "@/components/faq";
import { MainNav } from "@/components/main-nav";
import Nav from "@/components/nav";
import { marketingConfig } from "config/marketing";
import Questions from "@/components/still-questions";
import logo from "@/components/logo.png";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Head from "next/head";
import "@/styles/fonts.css";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "FAQ - Find answers to your questions | Bind Architects - Chennai",
  description:
    "Find answers to common queries about our architectural services and expertise. Explore our FAQ section to get insights into Studio Bind's offerings, processes, and more. Explore Studio Bind Architects' FAQ page for insightful answers to common questions about our architectural services in Chennai. From project inquiries to design inspirations, find expert guidance on residential and commercial spaces. Elevate your understanding of the architectural process with Chennai's leading firm. Have a question? Find the answer here at Studio Bind Architects.",
};

function page() {
  return (
    <>
      <Head>
        <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P29J8CQM');
          `}
        </script>
        <link
          rel="canonical"
          href="https://bindhomes.com/frequently-asked-questions/"
        />
        <meta
          property="og:description"
          content="Find answers to common queries about our architectural services and expertise. Explore our FAQ section to get insights into Studio Bind's offerings, processes, and more. Explore Studio Bind Architects' FAQ page for insightful answers to common questions about our architectural services in Chennai. From project inquiries to design inspirations, find expert guidance on residential and commercial spaces. Elevate your understanding of the architectural process with Chennai's leading firm. Have a question? Find the answer here at Studio Bind Architects."
        />

        <meta
          name="description"
          content="Find answers to common queries about our architectural services and expertise. Explore our FAQ section to get insights into Studio Bind's offerings, processes, and more. Explore Studio Bind Architects' FAQ page for insightful answers to common questions about our architectural services in Chennai. From project inquiries to design inspirations, find expert guidance on residential and commercial spaces. Elevate your understanding of the architectural process with Chennai's leading firm. Have a question? Find the answer here at Studio Bind Architects."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d"
        />
        <meta
          property="og:title"
          content="FAQ - Studio Bind Architects - Best Architects in Chennai"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://bindhomes.com/frequently-asked-questions/"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="FAQ - Best Architects in Chennai | Top Architectural Firm"
        />
        <meta
          name="twitter:description"
          content="Welcome to Studio Bind, your premier architectural firm in Chennai. Transforming visions into stunning reality. Explore our innovative and sustainable architectural solutions, crafted by experienced architects and interior designers. From modern house designs to creative commercial spaces, our diverse portfolio showcases excellence in home, shop, and showroom design. Discover architectural dreams brought to life at Studio Bind, where every detail matters, and your unique vision takes center stage."
        />
      </Head>
      <div className="flex flex-row mr-5 items-center justify-between space-x-2 mt-4 bg">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P29J8CQM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <p
          className="logo-font select-none md:hidden ml-5 md:ml-0 flex-1 text-4xl"
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
                    "group relative flex flex-col text-right items-center overflow-hidden dmsans hidden mr-4 text-zinc-300 md:inline-block rounded-md p-2 text-sm font-medium",
                    item.disabled && "cursor-not-allowed opacity-60",
                    "relative overflow-hidden after:relative after:flex after:items-center after:content-'' after:w-0 after:h-px after:bg-orange-400 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full",
                    "after:mt-2" // Add margin-top to create space between line and text
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
