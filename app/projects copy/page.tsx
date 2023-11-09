import React, { Suspense } from "react";
import { Metadata } from "next";
import { MainNav } from "@/components/main-nav";
import { HomePage, marketingConfig } from "config/marketing";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import FreeQuote from "@/components/free-quote";
import { cn } from "@/lib/utils";
import Card from "@/components/StickyCard";
import logo from "@/components/logo.png";
import Image from "next/image";

const metadata: Metadata = {
  title: "Projects at Studio Bind. Best Architects in Chennai.",
  description:
    "Explore Our Portfolio of Exceptional Architectural. Dive into a curated collection of our architectural endeavors, showcasing innovation, creativity, and timeless design excellence.",
};

export interface Project {
  projectId: string;
  projectName: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  image7: string;
  image8: string;
  image9: string;
  image10: string;
  testimonial: string;
  testimonialPic: string;
}

const fallbackStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "black",
};

function ProjectsHome() {

  return (
    <Suspense
          data-speed="1.5"
          fallback={<div style={fallbackStyle}>Loading Please wait...</div>}
        >
    <div
      className="min-h-screen animate-fade-in py-2 mt-5"
      data-theme=""
    >
      <title>Projects | Studio Bind</title>

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
                  "group flex hover:text-orange-400 flex-col text-right items-center overflow-hidden dmsans hidden mr-4 text-zinc-300 md:inline-block rounded-md p-2 text-sm font-medium ",
                  item.disabled && "cursor-not-allowed opacity-60"
                )}
              >
                <span className="">{item.title}</span>
              </Link>
            ))}
          <div className="flex max-w-[10rem] justify-end mr-5 space-x-2 bg-black md:hidden">
            <Image height={90} width={90} alt="logo" src={logo} />
          </div>
        </nav>
      </div>

      <Card />

      <br />
      <br />
      <FreeQuote />
      <SiteFooter />
    </div>
    </Suspense>
  );
}

export default ProjectsHome;
