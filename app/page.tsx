import Link from "next/link";
import { marketingConfig } from "config/marketing";
import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import IndexPage from "@/components/home-page";
import Aboutus from "@/components/about-us";
import { Metadata } from "next";
import { Projects } from "@/components/projects";
import Client from "@/components/client";
import Questions from "@/components/still-questions";
import Image from "next/image";
import logo from "@/components/logo.png";
import Head from "next/head";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Studio Bind Architects",
  description:
    "Discover the Leading Architects in Chennai - Unveiling Unparalleled Design Excellence. Explore the portfolio of top-tier architects and architectural firms in Chennai, renowned for crafting innovative, sustainable, and aesthetically captivating designs. Elevate your architectural visions with our exceptional expertise and dedication to transforming spaces. Whether you're seeking modern house designs, sustainable architecture, or creative commercial spaces, our top architects in Chennai are here to exceed your expectations. Explore our portfolio for residential and commercial architects, and witness the fusion of functionality and aesthetic appeal. Elevate your architectural dreams with the best architects in Chennai, dedicated to delivering excellence in every project.",
};

export default function HomeLayout() {
  return (
    <>
      <Head>
        <title>Studio Bind Architects - Best Architects in Chennai</title>
        <link rel="canonical" href="https://www.bindhomes.com/" />
        <meta
          property="og:description"
          content="Discover the portfolio of Studio Bind Architects' projects in Chennai. Explore a showcase of innovative and inspiring residential and commercial spaces. From conceptualization to realization, immerse yourself in the artistry and functionality of our architectural designs. Elevate your vision of modern living with Chennai's leading architectural firm, Studio Bind Architects."
        />

        <meta
          name="description"
          content="Discover Chennai's Leading Architects - Unleashing Design Excellence. Explore top-tier portfolios renowned for innovative, sustainable, and captivating designs. Elevate your visions with our expertise in transforming spaces. Whether modern homes, sustainable architecture, or creative commercial spaces, our top Chennai architects exceed expectations. Explore our residential and commercial portfolios, witnessing the fusion of functionality and aesthetic appeal. Elevate your architectural dreams with Chennai's best, dedicated to excellence in every project."
        />

        <meta
          property="og:title"
          content="Studio Bind Architects - Best Architects in Chennai"
        />
      </Head>
      <div className="flex min-h-screen flex-col ">
        <header className="md:ml-4 ml-4 mt-3 bg-background">
          <div className="flex h-20 justify-between md:justify-between  py-6">
            <MainNav items={marketingConfig.mainNav} />
            <nav className="justify-between inline-block">
              {marketingConfig &&
                marketingConfig.mainNav.map((item, index) => (
                  <Link
                    key={index}
                    aria-label={item.title}
                    href={item.disabled ? "#" : item.href}
                    className={cn(
                      "group flex hover:bg-slate-900 hover:text-orange-400  text-right items-center overflow-hidden dmsans hidden mr-4 text-zinc-300 md:inline-block rounded-md p-2 text-sm font-medium ",
                      item.disabled && "cursor-not-allowed opacity-60"
                    )}
                  >
                    <span className="text-md">{item.title}</span>
                  </Link>
                ))}
              <div className="flex mr-5 items-center space-x-2 bg-black md:hidden">
                <p className="logo-font text-4xl font-bold">BIND</p>
              </div>
            </nav>
          </div>
        </header>

        <IndexPage />
        <Projects />
        <Client />
        <Aboutus />
        <Questions />
        <SiteFooter />
      </div>
    </>
  );
}
