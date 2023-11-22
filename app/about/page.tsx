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
import ContactScroll from "@/components/contactscroll";
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
        <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P29J8CQM');
          `}
        </script>
        <script type="application/ld+json">
          {`
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Studio Bind",
  "legalName": "Bind Architects Pvt. Ltd.",
  "url": "https://bindhomes.com",
  "logo": "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
  "description": "Studio Bind is a premier architectural firm in Chennai, dedicated to transforming visions into stunning reality. Our diverse portfolio showcases excellence in home, shop, and showroom design.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10, Anjugam Street, Meenakshi Amman Nagar, Alwarthirunagar",
    "addressLocality": "Chennai",
    "postalCode": "600087",
    "addressCountry": "India"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 8072701454",
    "contactType": "customer service",
    "availableLanguage": ["Tamil", "English"],
    "email": "bindarchitects@gmail.com"
  },
  "sameAs": [
    "https://www.instagram.com/studio_bind/"
    // Add other social media profiles as needed
  ]`}
        </script>

        <title>
          About Us - Studio Bind Architects - Best Architects in Chennai
        </title>
        <link rel="canonical" href="https://bindhomes.com/about/" />
        <meta
          property="og:description"
          content="Discover unparalleled architectural excellence in Chennai with Studio Bind Architects, a visionary firm shaping spaces that transcend expectations. Our innovative designs seamlessly blend aesthetics and functionality, redefining the cityscape. From residential marvels to commercial landmarks, we specialize in crafting bespoke solutions that stand the test of time. Explore the intersection of art and engineering with Chennai's leading architecture firm. Elevate your vision with Studio Bind Architects"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d"
        />
        <meta
          name="description"
          content="Discover unparalleled architectural excellence in Chennai with Studio Bind Architects, a visionary firm shaping spaces that transcend expectations. Our innovative designs seamlessly blend aesthetics and functionality, redefining the cityscape. From residential marvels to commercial landmarks, we specialize in crafting bespoke solutions that stand the test of time. Explore the intersection of art and engineering with Chennai's leading architecture firm. Elevate your vision with Studio Bind Architects"
        />
        <meta
          property="og:title"
          content="About Us - Studio Bind Architects - Best Architects in Chennai"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bindhomes.com/about/" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="About - Best Architects in Chennai | Top Architectural Firm"
        />
        <meta
          name="twitter:description"
          content="Welcome to Studio Bind, your premier architectural firm in Chennai. Transforming visions into stunning reality. Explore our innovative and sustainable architectural solutions, crafted by experienced architects and interior designers. From modern house designs to creative commercial spaces, our diverse portfolio showcases excellence in home, shop, and showroom design. Discover architectural dreams brought to life at Studio Bind, where every detail matters, and your unique vision takes center stage."
        />
      </Head>

      <div className="flex flex-row mr-5 items-center justify-between space-x-2 mt-4 bg">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P29J8CQM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>{" "}
        <p
          className="logo-font select-none md:hidden ml-5 md:ml-0 flex-1 text-4xl"
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
