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
import Script from "next/script";

const metadata: Metadata = {
  title: "Explore our projects - Studio Bind Architects",
  description:
    "Discover the portfolio of Studio Bind Architects' projects in Chennai. Explore a showcase of innovative and inspiring residential and commercial spaces. From conceptualization to realization, immerse yourself in the artistry and functionality of our architectural designs. Elevate your vision of modern living with Chennai's leading architectural firm, Studio Bind Architects.",
};

const fallbackStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "black",
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WPHeader",
      url: "https://bindarchitects.com/projects/",
      headline: "Explore our projects - Studio Bind Architects",
      description:
        "List of our various kinds of architecture designs. Share us your idea, we will design the rest to bring it to life.",
    },
    {
      "@type": "WPFooter",
      url: "https://bindarchitects.com/projects/",
      headline: "Explore our projects - Studio Bind Architects",
      description:
        "List of our various kinds of architecture designs. Share us your idea, we will design the rest to bring it to life.",
      copyrightYear: "2023",
    },
    {
      "@type": "Organization",
      "@id": "https://bindarchitects.com/#schema-publishing-organization",
      url: "https://bindarchitects.com",
      name: "DLEA",
    },
    {
      "@type": "WebSite",
      "@id": "https://bindarchitects.com/#schema-website",
      url: "https://bindarchitects.com",
      name: "DLEA",
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
        caption: "Design Lab for Engineering and Architecture Bind Logo",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://bindarchitects.com/projects?page&pagename=projects/#breadcrumb",
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
          name: "Projects",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://bindarchitects.com/about/#schema-author",
      name: "dleain",
    },
    {
      "@type": "WebPage",
      "@id": "https://bindarchitects.com/projects/#schema-webpage",
      isPartOf: {
        "@id": "https://bindarchitects.com/#schema-website",
      },
      publisher: {
        "@id": "https://bindarchitects.com/#schema-publishing-organization",
      },
      url: "https://bindarchitects.com/projects/",
      hasPart: [
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/projects/#schema-nav-element-529",
          name: "Home",
          url: "https://bindarchitects.com/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/projects/#schema-nav-element-528",
          name: "",
          url: "https://bindarchitects.com/about/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/projects/#schema-nav-element-527",
          name: "",
          url: "https://bindarchitects.com/projects/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/projects/#schema-nav-element-525",
          name: "",
          url: "https://bindarchitects.com/contact/",
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
      dateModified: "2023-11-22T08:16:04",
      datePublished: "2023-10-25T14:33:12",
      headline: "Explore our projects - Studio Bind Architects",
      description:
        "List of our various kinds of architecture designs. Share us your idea, we will design the rest to bring it to life.",
      name: "Projects",
      image: {
        "@type": "ImageObject",
        "@id": "https://bindarchitects.com/projects/#schema-article-image",
        url: "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
        height: 153,
        width: 300,
        caption: "Design Lab for Engineering and Architecture Bind Logo",
      },
      thumbnailUrl:
        "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
    },
  ],
};

function ProjectsHome() {
  return (
    <><Script
    id="structured-data"
    key="structured-data"
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
  />
      <Head>
        
        <title>
          Projects - Studio Bind Architects - Best Architects in Chennai
        </title>
        <link rel="canonical" href="https://bindarchitects.com/projects/" />
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
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://bindarchitects.com/projects/"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Projects - Best Architects in Chennai | Top Architectural Firm"
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
      <Suspense
        data-speed="1.5"
        fallback={<div style={fallbackStyle}>Loading Please wait...</div>}
      >
        <link rel="canonical" href="https://www.bindarchitects.com/projects" />
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
