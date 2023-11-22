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
        <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P29J8CQM');
          `}
        </script>
        <title>Contact - Need an Architect? Contact us now!</title>
        <link rel="canonical" href="https://bindhomes.com/contact/" />
        <meta
          property="og:description"
          content="Connect with Studio Bind Architects, Chennai's premier architectural firm. Specializing in bespoke solutions for residential and commercial projects, our team blends aesthetics and functionality to redefine the cityscape. Elevate your vision — contact Chennai's leading architecture firm today."
        />
        <meta
          name="description"
          content="Connect with Studio Bind Architects, Chennai's premier architectural firm. Specializing in bespoke solutions for residential and commercial projects, our team blends aesthetics and functionality to redefine the cityscape. Elevate your vision — contact Chennai's leading architecture firm today."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bindhomes.com/contact/" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Contact - Best Architects in Chennai | Top Architectural Firm"
        />
        <meta
          name="twitter:description"
          content="Welcome to Studio Bind, your premier architectural firm in Chennai. Transforming visions into stunning reality. Explore our innovative and sustainable architectural solutions, crafted by experienced architects and interior designers. From modern house designs to creative commercial spaces, our diverse portfolio showcases excellence in home, shop, and showroom design. Discover architectural dreams brought to life at Studio Bind, where every detail matters, and your unique vision takes center stage."
        />
        <meta
          property="og:title"
          content="Contact Us - Studio Bind Architects - Best Architects in Chennai"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Studio Bind Architects" />
        <meta
          name="keywords"
          content="best architects in chennai,, top architects, residential architecture, apartment design, villa design, restaurant architecture, interior design architects near me, cheap price architects, famous architects, interior designs, Architect in chennai, Interior designer in chennai, Top architects in chennai, Best architects in chennai, Home design in chennai, Shop design in chennai, Showroom designer in chennai, Residential architects, Commercial architects, best architects in chennai, top architects, residential architecture, apartment design, villa design, restaurant architecture, interior design, Modern home designs, Affordable home architects, Office interior designers, Trendy home plans, Innovative building designers, Local architects, Building design experts, Chennai architecture firms, Creative interior designs, Budget-friendly house architects, Local shop makeover, Renowned showroom renovators, Skilled construction designers, Contemporary building styles, Architecture and design services, Experienced architectural consultants"
        />
      </Head>
      <div className="flex flex-row mr-5 items-center justify-between space-x-2 mt-4 ">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P29J8CQM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>{" "}
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
      <div className="md:ml-32 md:mr-32 -mb-4">
        {" "}
        <ContactHead />
        <Contactform className="md:mt-20 mt-10" />
        <Contact />
        <SiteFooter />
      </div>
    </div>
  );
}

export default page;
