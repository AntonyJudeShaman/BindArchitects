import Link from "next/link";
import { motion } from "framer-motion";
import { marketingConfig } from "config/marketing";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import IndexPage from "@/components/home-page";
import Nav from "@/components/nav";
import Aboutus from "@/components/about-us";
import Particles from "@/components/particles";
import { Metadata } from "next";
import { Projects } from "@/components/projects";
import Client from "@/components/client";
import Questions from "@/components/still-questions";
import Card  from "@/components/StickyCard";


interface MarketingLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Home | Studio Bind",
  description: "Home page of best architects in chennai",
};

export default function HomeLayout() {

  
  return (
    <>
      <div className="flex min-h-screen flex-col ">
        <header className="md:ml-4 ml-4 z-40 bg-background">
          <div className="flex h-20 justify-between md:justify-between  py-6">
            <MainNav items={marketingConfig.mainNav} />
            <nav className="justify-between inline-block">
               
              {marketingConfig &&
                marketingConfig.mainNav.map((item, index) => (
                  <Link
                  key={index}
                  aria-label="navbar items"
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "group flex flex-  text-right items-center overflow-hidden my-font hidden mr-4 title-gradient md:inline-block rounded-md p-2 text-sm font-medium hover:underline",
                    item.disabled && "cursor-not-allowed opacity-60"
                  )}
                >
                  <span className="text-md">
                    {item.title}
                  </span>
                </Link>
                
                ))}
                <Link
                href="/login"
                aria-label="login"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    className:
                      "border border-green-300 mr-4 -mt-3 md:hidden w-30 bg-gradient-to-bl from-pink-500 to-purple-600 hover:to-pink-500 hover:from-purple-600  ",
                    size: "lg",
                  }),
                  "px-4"
                )}
              >
                Login
              </Link>
            </nav>
            
          </div>
          
        </header>

        <IndexPage />
        <Projects />
        <Client />
        <Questions/>
        <SiteFooter />
      </div>
    </>
  );
}
