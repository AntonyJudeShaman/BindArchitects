import React from "react";
import { FAQAccordion } from "@/components/faq";
import { MainNav } from "@/components/main-nav";
import Nav from "@/components/nav";
import { marketingConfig } from "config/marketing";
import Questions from "@/components/still-questions";
import logo from "@/components/logo.png";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Head from "next/head";
import "@/styles/fonts.css";
import SiteFooter from "@/components/site-footer";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://bindarchitects.com/faq"),
  title: "FAQ - Find answers to your questions | Bind Architects - Chennai",
  description:
    "Unravel design mysteries and illuminate your dream project with Studio Bind Architects' insightful FAQs.",
    keywords: [
      "best architects in chennai",
      "architecture",
      "architects",
      "architects near me",
      "cheap price architects",
      "famous architects",
      "interior designs",
      "Architect in chennai",
      "Interior designer in chennai",
      "Top architects in chennai",
      "Best architects in chennai",
      "Home design in chennai",
      "Shop design in chennai",
      "Showroom designer in chennai",
      "Affordable residential architects",
      "Modern house designs",
      "Experienced home planners",
      "Budget-friendly interior designers",
      "Local architects for homes",
      "Creative space planners",
      "Chennai's top-rated home architects",
      "Innovative interior decor solutions",
      "Custom home design services",
      "Commercial space designers",
      "Chennai interior specialists",
      "Best local architects",
      "Residential and commercial design experts",
      "Quality home blueprints",
      "Unique showroom designs",
      "Top-notch home and shop designers",
      "Chennai architectural excellence",
      "Tailored design for shops and homes",
      "Reliable home and business designers",
    ],
  };

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WPHeader",
      url: "https://bindarchitects.com/faq/",
      headline: "Frequently Asked Questions - Studio Bind",
      description:
        "Find answers to common questions about Studio Bind and our services.",
    },
    {
      "@type": "WPFooter",
      url: "https://bindarchitects.com/faq/",
      headline: "Frequently Asked Questions - Studio Bind",
      description:
        "Find answers to common questions about Studio Bind and our services.",
      copyrightYear: "2023",
    },
    {
      "@type": "Organization",
      "@id": "https://bindarchitects.com/#schema-publishing-organization",
      url: "https://bindarchitects.com",
      name: "Studio Bind Architects",
    },
    {
      "@type": "WebSite",
      "@id": "https://bindarchitects.com/#schema-website",
      url: "https://bindarchitects.com",
      name: "Studio Bind Architects",
      encoding: "UTF-8",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://bindarchitects.com/projects/{search_term_string}/",
        "query-input": "required name=search_term_string",
      },
      image: {
        "@type": "ImageObject",
        "@id": "https://bindarchitects.com/#schema-site-logo",
        url: "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
        height: 153,
        width: 300,
        caption: "design lab for engineering and architecture bind logo",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://bindarchitects.com/faq?page&pagename=faq/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://bindarchitects.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "FAQ",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://bindarchitects.com/about/#schema-author",
      name: "Studio Bind Architects",
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://bindarchitects.com/faq/#schema-webpage",
      isPartOf: "https://bindarchitects.com/#schema-website",
      mainEntity: {
        "@type": "WebPage",
        "@id":
          "https://bindarchitects.com/faq/#schema-webpage-main-entity",
        url: "https://bindarchitects.com/faq/",
        headline: "Frequently Asked Questions - Studio Bind",
        description:
          "Find answers to common questions about Studio Bind and our services.",
      },
      hasPart: [
        {
          "@type": "SiteNavigationElement",
          "@id":
            "https://bindarchitects.com/faq/#schema-nav-element-529",
          name: "Home",
          url: "https://bindarchitects.com/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id":
            "https://bindarchitects.com/faq/#schema-nav-element-528",
          name: "",
          url: "https://bindarchitects.com/about/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id":
            "https://bindarchitects.com/faq/#schema-nav-element-527",
          name: "",
          url: "https://bindarchitects.com/projects/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id":
            "https://bindarchitects.com/faq/#schema-nav-element-525",
          name: "",
          url: "https://bindarchitects.com/faq/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/#schema-nav-element-2394",
          name: '<img src="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/facebook.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4" title="facebook bind" width="32px">',
          url: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.bindarchitects.com%2Ffaq%3FquestionId%3Dbbe7072b-402e-4a9a-9fe1-cbf90f0c831e&appDefId=14c92d28-031e-7910-c9a8-a670011e062d",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/#schema-nav-element-2395",
          name: '<img src="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/youtube.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4" target="_blank" title="youtube bind" width="32px">',
          url: "https://www.youtube.com/channel/UCTI09wWkEJeNy7wXwD4zSCQ",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/#schema-nav-element-2396",
          name: '<img src="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/instagram.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4" target="_blank" title="instagram bind" width="32px">',
          url: "https://www.instagram.com/studio_bind/",
        },
      ],
      url: "https://bindarchitects.com/faq/",
      author: {
        "@id": "https://bindarchitects.com/about/#schema-author",
      },
      publisher: {
        "@id": "https://bindarchitects.com/#schema-publishing-organization",
      },
      dateModified: "2023-11-22T11:30:56",
      datePublished: "2023-10-29T05:29:19",
      headline: "Frequently Asked Questions - Studio Bind",
      description:
        "Find answers to common questions about Studio Bind and our services.",
      name: "FAQ",
      image: {
        "@type": "ImageObject",
        "@id":
          "https://bindarchitects.com/faq/#schema-article-image",
        url: "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
        height: 153,
        width: 300,
        caption: "design lab for engineering and architecture bind logo",
      },
      thumbnailUrl:
        "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
    },
  ],
};

function page() {
  return (
    <div>
      <Script
        id="structured-data"
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <Head>
        <link
          rel="canonical"
          href="https://bindarchitects.com/faq/"
        />
        <meta
          property="og:description"
          content="Unravel design mysteries and illuminate your dream project with Studio Bind Architects' insightful FAQs."
        />

        <meta
          name="description"
          content="Unravel design mysteries and illuminate your dream project with Studio Bind Architects' insightful FAQs."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d"
        />
        <meta
          property="og:title"
          content="FAQ - Studio Bind Architects - Best Architects in Chennai"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://bindarchitects.com/faq/"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="FAQ - Studio Bind Architects"
        />
        <meta
          name="twitter:description"
          content="Unravel design mysteries and illuminate your dream project with Studio Bind Architects' insightful FAQs."
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
        </noscript>
        <p
          className="logo-font select-none pl-3 md:hidden ml-5 md:ml-0 flex-1 text-4xl"
          aria-label="BIND"
        >
          BIND
        </p>
        <div className="flex-1 md:hidden justify-end float-right">
          <MainNav items={marketingConfig.mainNav} />
        </div>
      </div>
      <div className="min-h-screen mt-4">
        <div className="md:ml-0 ml-5 flex  justify-between">
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
        <p className="md:text-5xl text-4xl p-4 dmsans mb-5 mt-10 text-center ">
          Frequently asked questions
        </p>
        <FAQAccordion />
        <Questions />
        <SiteFooter />
      </div>
    </div>
  );
}

export default page;
