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
  metadataBase: new URL("https://bindarchitects.com/about"),
  title: "About Us - Bind Architects | Best Architects in Chennai",
  description:
    "Ready to elevate your vision? Witness the magic we weave with brick and mortar. Contact us today and let's create a space that reflects your unique story.",
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
      url: "https://bindarchitects.com/about/",
      headline: "About Us - Bind Architects | Best Architects in Chennai",
      description:
        "Ready to elevate your vision? Witness the magic we weave with brick and mortar. Contact us today and let's create a space that reflects your unique story.",
    },
    {
      "@type": "WPFooter",
      url: "https://bindarchitects.com/about/",
      headline: "About Us - Bind Architects | Best Architects in Chennai",
      description:
        "Ready to elevate your vision? Witness the magic we weave with brick and mortar. Contact us today and let's create a space that reflects your unique story.",
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
      "@id": "https://bindarchitects.com/about?page&pagename=about/#breadcrumb",
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
          name: "About",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://bindarchitects.com/about/#schema-author",
      name: "Studio Bind Architects",
    },
    {
      "@type": "AboutPage",
      "@id": "https://bindarchitects.com/about/#schema-webpage",
      isPartOf: "https://bindarchitects.com/#schema-website",
      hasPart: [
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/about/#schema-nav-element-529",
          name: "Home",
          url: "https://bindarchitects.com/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/about/#schema-nav-element-528",
          name: "",
          url: "https://bindarchitects.com/about/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/about/#schema-nav-element-527",
          name: "",
          url: "https://bindarchitects.com/projects/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/about/#schema-nav-element-525",
          name: "",
          url: "https://bindarchitects.com/contact/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/#schema-nav-element-2394",
          name: '<img src="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/facebook.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4" title="facebook bind"width="32px">',
          url: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.bindarchitects.com%2Ffaq%3FquestionId%3Dbbe7072b-402e-4a9a-9fe1-cbf90f0c831e&appDefId=14c92d28-031e-7910-c9a8-a670011e062d",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/#schema-nav-element-2395",
          name: '<img src="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/youtube.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4" target="_blank" title="youtube bind"width="32px">',
          url: "https://www.youtube.com/channel/UCTI09wWkEJeNy7wXwD4zSCQ",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/#schema-nav-element-2396",
          name: '<img src="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/instagram.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4" target="_blank" title="instagram bind" width="32px">',
          url: "https://www.instagram.com/studio_bind/",
        },
      ],
      url: "https://bindarchitects.com/about/",
      author: {
        "@id": "https://bindarchitects.com/about/#schema-author",
      },
      publisher: {
        "@id": "https://bindarchitects.com/#schema-publishing-organization",
      },
      dateModified: "2023-11-22T11:13:10",
      datePublished: "2023-04-10T06:04:33",
      headline: "About Us - Bind Architects | Best Architects in Chennai",
      description:
        "Ready to elevate your vision? Witness the magic we weave with brick and mortar. Contact us today and let's create a space that reflects your unique story.",
      name: "About",
      image: {
        "@type": "ImageObject",
        "@id": "https://bindarchitects.com/about/#schema-article-image",
        url: "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
        height: 153,
        width: 300,
        caption: "design lab for engineering and architecture bind logo",
      },
      thumbnailUrl:
        "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
    },
    {
      "@type": "VideoObject",
      name: "Studio Bind Architects and Interior Designers in Chennai",
      url: "https://www.youtube.com/watch?v=ANK2MXhP3P8",
      thumbnail: {
        "@type": "ImageObject",
        url: "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
        width: 480,
        height: 360,
      },
      thumbnailUrl:
        "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
      embedUrl:
        "https://www.youtube.com/embed/Ks--4Wvf6W0?si=GvFq-qe3mhqRFkVP?feature=oembed",
    },
  ],
};

function About() {
  return (
    <div>
      <Head>
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />

        <title>
          About Us - Studio Bind Architects - Best Architects in Chennai
        </title>
        <link rel="canonical" href="https://bindarchitects.com/about/" />
        <meta
          property="og:description"
          content="Ready to elevate your vision? Witness the magic we weave with brick and mortar. Contact us today and let's create a space that reflects your unique story."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d"
        />
        <meta
          name="description"
          content="Ready to elevate your vision? Witness the magic we weave with brick and mortar. Contact us today and let's create a space that reflects your unique story."
        />
        <meta
          property="og:title"
          content="About Us - Studio Bind Architects - Best Architects in Chennai"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bindarchitects.com/about/" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="About - Best Architects in Chennai | Top Architectural Firm"
        />
        <meta
          name="twitter:description"
          content="Ready to elevate your vision? Witness the magic we weave with brick and mortar. Contact us today and let's create a space that reflects your unique story."
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
          className="logo-font select-none pl-2 md:hidden ml-5 md:ml-0 flex-1 text-4xl"
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
