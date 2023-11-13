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
import AboutSection from "@/components/about-section";
import Services from "@/components/services";
import { ArrowRight } from "lucide-react";
import Awards from "@/components/awards";
import logo from "@/components/logo.png";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import Head from "next/head";
import ContactScroll from "@/components/contactscroll"

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
      <div className="md:ml-0 w-full ml-5 mt-8 flex  justify-between">
        <MainNav items={marketingConfig.mainNav} />
        <nav className="justify-between bg-transparent">
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
