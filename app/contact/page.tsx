import React from "react";
import { MainNav } from "@/components/main-nav";
import Nav from "@/components/nav";
import { marketingConfig } from "config/marketing";
import { SiteFooter } from "@/components/site-footer";
import { Contactform } from "@/components/contact-form";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact us using the contact form",
}

function page() {
  return (
    <div
        className="min-h-screen  py-8 animate-fade-in"
      >
      
        <div className="md:ml-20 ml-10">
          <MainNav items={marketingConfig.mainNav} />
        </div>
        <Nav />
        <p className="text-5xl font-heading font-semibold sub-gradient mb-8 mt-10 text-center display-animation">
          Contact Us
        </p>
        <Contactform className="" />
        <SiteFooter className="mt-5"/>
    </div>
  );
}

export default page;
