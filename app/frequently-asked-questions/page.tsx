import React from "react";
import { FAQAccordion } from "@/components/faq";
import { MainNav } from "@/components/main-nav";
import Nav from "@/components/nav";
import { marketingConfig } from "config/marketing";
import { SiteFooter } from "@/components/site-footer";
import Questions from "@/components/still-questions";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions by customers",
}

function page() {
  return (
    <>
    <title>FAQ | Studio Bind</title>
    <div
      className="min-h-screen animate-fade-in py-8"
    >
      <div className="md:ml-20 ml-10">
        <MainNav items={marketingConfig.mainNav} />
      </div>
      <Nav />
      <p className="text-5xl font-heading font-semibold sub-gradient mb-5 mt-10 text-center display-animation">
        Frequently asked questions
      </p>
      <FAQAccordion />
      <Questions />
      <SiteFooter />
    </div>
    </>
  );
}

export default page;
