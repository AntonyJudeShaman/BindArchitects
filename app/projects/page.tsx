import React, { Suspense } from "react";
import { Metadata } from "next";
import { MainNav } from "@/components/main-nav";
import { HomePage, marketingConfig } from "config/marketing";
import Link from "next/link";
import FreeQuote from "@/components/free-quote";
import { cn } from "@/lib/utils";
import Card from "@/components/StickyCard";
import logo from "@/components/logo.png";
import Image from "next/image";
import Head from "next/head";
import "@/styles/fonts.css";
import SiteFooter from "@/components/site-footer";
import Card3 from "@/components/StickyCard3";

const metadata: Metadata = {
  title: "Explore our projects - Bind Architects - Best Architects in Chennai.",
  description:
    "Discover the portfolio of Studio Bind Architects' projects in Chennai. Explore a showcase of innovative and inspiring residential and commercial spaces. From conceptualization to realization, immerse yourself in the artistry and functionality of our architectural designs. Elevate your vision of modern living with Chennai's leading architectural firm, Studio Bind Architects.",
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
    <>
      <Head>
        <title>
          Projects - Studio Bind Architects - Best Architects in Chennai
        </title>
        <link rel="canonical" href="https://www.bindhomes.com/about" />
        <meta
          property="og:description"
          content="Discover the portfolio of Studio Bind Architects' projects in Chennai. Explore a showcase of innovative and inspiring residential and commercial spaces. From conceptualization to realization, immerse yourself in the artistry and functionality of our architectural designs. Elevate your vision of modern living with Chennai's leading architectural firm, Studio Bind Architects."
        />

        <meta
          name="description"
          content="Explore Studio Bind Architects' portfolio of projects in Chennai, showcasing innovation in residential and commercial spaces. From initial concepts to stunning realizations, immerse yourself in the artistry and functionality of our architectural designs. Elevate your understanding of modern living with Chennai's premier architectural firm, Studio Bind Architects."
        />

        <meta
          property="og:title"
          content="Projects - Studio Bind Architects - Best Architects in Chennai"
        />
      </Head>
      <div className="flex flex-row mr-5 items-center justify-between space-x-2 mt-4 bg">
        <p
          className="logo-font md:hidden ml-5 md:ml-0 flex-1 text-4xl"
          aria-label="BIND"
        >
          BIND
        </p>
        <div className="flex-1 md:hidden justify-end float-right">
          <MainNav items={marketingConfig.mainNav} />
        </div>
      </div>
      <Suspense
        data-speed="1.5"
        fallback={<div style={fallbackStyle}>Loading Please wait...</div>}
      >
        <link rel="canonical" href="https://www.bindhomes.com/projects" />
        <div className="min-h-screen  max-w-screen mt-4 bg" data-theme="">
          <div className="md:ml-0 ml-5 flex justify-between">
            <div className="hidden md:ml-24 md:block">
              {" "}
              <MainNav items={marketingConfig.mainNav} />
            </div>
            <nav className="justify-between md:-mr-16">
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
          <div className=" md:-ml-0 md:-mr-32 max-w-screen  ">
            <div className="  ">
              <div className="">
                <div className="p-8 md:p-4 justify-center  text-wrapper  flex flex-col gap-4"></div>

                <div className="md:m-0  mx-auto">
                  <Card />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default ProjectsHome;
