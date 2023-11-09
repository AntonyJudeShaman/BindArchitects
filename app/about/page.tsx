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
import logo from "@/components/logo.png"
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us - Studio Bind Architects",
  description: "Discover the vision and expertise of Studio Bind Architects in crafting innovative and sustainable designs. Learn more about our team and commitment to architectural excellence.",
};

function About() {
  return (
    <div>
      
      <title>About Us - Studio Bind Architects</title>
      <div className="md:ml-5 ml-5 mt-8 flex  justify-between">
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
          </nav>
          <div className="flex max-w-[10rem] justify-end mr-5 space-x-2 bg-black md:hidden">
            <Image height={90} width={90} alt="logo" src={logo} />
          </div>
        </div>
          <AboutSection />
          <Awards/>
          <Services/>
        <Questions />
          <SiteFooter />
          
    </div>
  );
}

export default About;
