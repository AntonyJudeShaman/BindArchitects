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
        <header className="container z-40 bg-background">
          <div className="flex h-20 items-center justify-between py-6">
            <MainNav items={marketingConfig.mainNav} />
            <nav className="justify-between">
               
              {marketingConfig &&
                marketingConfig.mainNav.map((item, index) => (
                  <Link
                  key={index}
                  aria-label="navbar items"
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "group flex flex-col text-right items-center overflow-hidden my-font hidden mr-4 title-gradient md:inline-block rounded-md p-2 text-sm font-medium hover:underline",
                    item.disabled && "cursor-not-allowed opacity-60"
                  )}
                >
                  <span className="">
                    {item.title}
                  </span>
                </Link>
                
                ))}
                
            </nav>
            {/* <Link
                href="/login"
                aria-label="login"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    className:
                      "border border-green-300 w-30 bg-gradient-to-bl from-pink-500 to-purple-600 hover:to-pink-500 hover:from-purple-600  ",
                    size: "lg",
                  }),
                  "px-4"
                )}
              >
                Login
              </Link> */}
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
