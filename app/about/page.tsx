import React from "react";
import { FAQAccordion } from "@/components/faq";
import { MainNav } from "@/components/main-nav";
import Nav from "@/components/nav";
import { marketingConfig } from "config/marketing";
import Questions from "@/components/still-questions";
import { Metadata } from "next";
import Aboutus from "@/components/about-us";
import { cn } from "@/lib/utils";
import Link from "next/link";
import AboutSection from "@/components/about-section";
import Services from "@/components/services";
import { ArrowRight } from "lucide-react";
import Awards from "@/components/awards";
import logo from "@/components/logo.png";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import Head from "next/head";
import ContactScroll from "@/components/contactscroll"
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About Us - Bind Architects | Best Architects in Chennai",
  description:
    "Discover unparalleled architectural excellence in Chennai with Studio Bind Architects, a visionary firm shaping spaces that transcend expectations. Our innovative designs seamlessly blend aesthetics and functionality, redefining the cityscape. From residential marvels to commercial landmarks, we specialize in crafting bespoke solutions that stand the test of time. Explore the intersection of art and engineering with Chennai's leading architecture firm. Elevate your vision with Studio Bind Architects",
};

function About() {
  return (
    <div>
      <Head>
        <title>
          About Us - Studio Bind Architects - Best Architects in Chennai
        </title>
        <link rel="canonical" href="https://www.bindhomes.com/about" />
        <meta
          property="og:description"
          content="Discover unparalleled architectural excellence in Chennai with Studio Bind Architects, a visionary firm shaping spaces that transcend expectations. Our innovative designs seamlessly blend aesthetics and functionality, redefining the cityscape. From residential marvels to commercial landmarks, we specialize in crafting bespoke solutions that stand the test of time. Explore the intersection of art and engineering with Chennai's leading architecture firm. Elevate your vision with Studio Bind Architects"
        />
        <meta
          name="description"
          content="Discover unparalleled architectural excellence in Chennai with Studio Bind Architects, a visionary firm shaping spaces that transcend expectations. Our innovative designs seamlessly blend aesthetics and functionality, redefining the cityscape. From residential marvels to commercial landmarks, we specialize in crafting bespoke solutions that stand the test of time. Explore the intersection of art and engineering with Chennai's leading architecture firm. Elevate your vision with Studio Bind Architects"
        />
        <meta
          property="og:title"
          content="About Us - Studio Bind Architects - Best Architects in Chennai"
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
      <div className="md:ml-0 ml-5 flex mt-4 justify-between">
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
      <AboutSection />
      <Awards />
      <Services />
      <Questions />
      {/* <ContactScroll/> */}
      <SiteFooter />
    </div>
  );
}

export default About;
