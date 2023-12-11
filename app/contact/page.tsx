import React from "react";
import { MainNav } from "@/components/main-nav";
import Nav from "@/components/nav";
import { marketingConfig } from "config/marketing";
import { Contactform } from "@/components/contact-form";
import Head from "next/head";
import { Metadata } from "next";
import Link from "next/link";
import "@/styles/fonts.css";
import { cn } from "@/lib/utils";
import ContactHead from "@/components/contact-head";
import Contact from "@/components/contact";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Need help? Contact us now! - Studio Bind",
  description:
    "Connect with Studio Bind Architects, Chennai's premier architectural firm. Specializing in bespoke solutions for residential and commercial projects, our team blends aesthetics and functionality to redefine the cityscape. Elevate your vision — contact Chennai's leading architecture firm today.",
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WPHeader",
      url: "https://bindarchitects.com/contact/",
      headline: "Need help? Contact us now! - Studio Bind",
      description:
        "GET IN TOUCH WITH US We are Super Friendly Registered Office No. 10, Anjugam St, Meenakshi Amman Nagar, Alwartirunagar, Valasaravakkam, Chennai, Tamil Nadu 600087 ...",
    },
    {
      "@type": "WPFooter",
      url: "https://bindarchitects.com/contact/",
      headline: "Need help? Contact us now! - Studio Bind",
      description:
        "GET IN TOUCH WITH US We are Super Friendly Registered Office No. 10, Anjugam St, Meenakshi Amman Nagar, Alwartirunagar, Valasaravakkam, Chennai, Tamil Nadu 600087 ...",
      copyrightYear: "2023",
    },
    {
      "@type": "Organization",
      "@id": "https://bindarchitects.com/#schema-publishing-organization",
      url: "https://bindarchitects.com",
      name: "Studio Bind",
    },
    {
      "@type": "WebSite",
      "@id": "https://bindarchitects.com/#schema-website",
      url: "https://bindarchitects.com",
      name: "Studio Bind",
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
      "@id": "https://bindarchitects.com/contact?page&pagename=contact/#breadcrumb",
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
          name: "Contact",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://bindarchitects.com/about/#schema-author",
      name: "Studio Bind",
    },
    {
      "@type": "ContactPage",
      "@id": "https://bindarchitects.com/contact/#schema-webpage",
      isPartOf: "https://bindarchitects.com/#schema-website",
      hasPart: [
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/contact/#schema-nav-element-529",
          name: "Home",
          url: "https://bindarchitects.com/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/contact/#schema-nav-element-528",
          name: "",
          url: "https://bindarchitects.com/about/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/contact/#schema-nav-element-527",
          name: "",
          url: "https://bindarchitects.com/projects/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/contact/#schema-nav-element-525",
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
      url: "https://bindarchitects.com/contact/",
      author: {
        "@id": "https://bindarchitects.com/about/#schema-author",
      },
      publisher: {
        "@id": "https://bindarchitects.com/#schema-publishing-organization",
      },
      dateModified: "2023-11-22T11:30:56",
      datePublished: "2023-10-29T05:29:19",
      headline: "Need help? Contact us now! - Studio Bind",
      description:
        "GET IN TOUCH WITH US We are Super Friendly Registered Office No. 10, Anjugam St, Meenakshi Amman Nagar, Alwartirunagar, Valasaravakkam, Chennai, Tamil Nadu 600087 ...",
      name: "Contact",
      image: {
        "@type": "ImageObject",
        "@id": "https://bindarchitects.com/contact/#schema-article-image",
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
    <div className="min-h-screen max-w-screen py-4 md:-ml-32 md:-mr-32 bg-black">
      <Head>
      <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
        {/* <script type="application/ld+json">
          {`
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WPHeader",
      "url": "https://bindarchitects.com/contact/",
      "headline": "Need help? Contact us now! - Studio Bind",
      "description": "GET IN TOUCH WITH US We are Super Friendly Registered Office No. 10, Anjugam St, Meenakshi Amman Nagar, Alwartirunagar, Valasaravakkam, Chennai, Tamil Nadu 600087 ..."
    },
    {
      "@type": "WPFooter",
      "url": "https://bindarchitects.com/contact/",
      "headline": "Need help? Contact us now! - Studio Bind",
      "description": "GET IN TOUCH WITH US We are Super Friendly Registered Office No. 10, Anjugam St, Meenakshi Amman Nagar, Alwartirunagar, Valasaravakkam, Chennai, Tamil Nadu 600087 ...",
      "copyrightYear": "2023"
    },
    {
      "@type": "Organization",
      "@id": "https://bindarchitects.com/#schema-publishing-organization",
      "url": "https://bindarchitects.com",
      "name": "Studio Bind"
    },
    {
      "@type": "WebSite",
      "@id": "https://bindarchitects.com/#schema-website",
      "url": "https://bindarchitects.com",
      "name": "Studio Bind",
      "encoding": "UTF-8",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://bindarchitects.com/projects/{search_term_string}/",
        "query-input": "required name=search_term_string"
      },
      "image": {
        "@type": "ImageObject",
        "@id": "https://bindarchitects.com/#schema-site-logo",
        "url": "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
        "height": 153,
        "width": 300,
        "caption": "design lab for engineering and architecture bind logo"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://bindarchitects.com/contact?page&pagename=contact/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://bindarchitects.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://bindarchitects.com/about/#schema-author",
      "name": "Studio Bind"
    },
    {
      "@type": "ContactPage",
      "@id": "https://bindarchitects.com/contact/#schema-webpage",
      "isPartOf": "https://bindarchitects.com/#schema-website",
      "hasPart": [
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/contact/#schema-nav-element-529",
          "name": "Home",
          "url": "https://bindarchitects.com/"
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/contact/#schema-nav-element-528",
          "name": "",
          "url": "https://bindarchitects.com/about/"
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/contact/#schema-nav-element-527",
          "name": "",
          "url": "https://bindarchitects.com/projects/"
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/contact/#schema-nav-element-525",
          "name": "",
          "url": "https://bindarchitects.com/contact/"
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/#schema-nav-element-2394",
          "name": "<img src=\"https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/facebook.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4\" title=\"facebook bind\"width=\"32px\">",
          "url": "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.bindarchitects.com%2Ffaq%3FquestionId%3Dbbe7072b-402e-4a9a-9fe1-cbf90f0c831e&appDefId=14c92d28-031e-7910-c9a8-a670011e062d"
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/#schema-nav-element-2395",
          "name": "<img src=\"https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/youtube.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4\" target=\"_blank\" title=\"youtube bind\"width=\"32px\">",
          "url": "https://www.youtube.com/channel/UCTI09wWkEJeNy7wXwD4zSCQ"
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindarchitects.com/#schema-nav-element-2396",
          "name": "<img src=\"https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/instagram.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4\" target=\"_blank\" title=\"instagram bind\" width=\"32px\">",
          "url": "https://www.instagram.com/studio_bind/"
        }
      ],
      "url": "https://bindarchitects.com/contact/",
      "author": {
        "@id": "https://bindarchitects.com/about/#schema-author"
      },
      "publisher": {
        "@id": "https://bindarchitects.com/#schema-publishing-organization"
      },
      "dateModified": "2023-11-22T11:30:56+05:30",
      "datePublished": "2023-10-29T05:29:19+05:30",
      "headline": "Need help? Contact us now! - Studio Bind",
      "description": "GET IN TOUCH WITH US We are Super Friendly Registered Office No. 10, Anjugam St, Meenakshi Amman Nagar, Alwartirunagar, Valasaravakkam, Chennai, Tamil Nadu 600087 ...",
      "name": "Contact",
      "image": {
        "@type": "ImageObject",
        "@id": "https://bindarchitects.com/contact/#schema-article-image",
        "url": "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
        "height": 153,
        "width": 300,
        "caption": "design lab for engineering and architecture bind logo"
      },
      "thumbnailUrl": "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d"
    }
  ]`}
        </script> */}

        <title>Need help? Contact us now! - Studio Bind</title>
        <link rel="canonical" href="https://bindarchitects.com/contact/" />
        <meta
          property="og:description"
          content="Connect with Studio Bind Architects, Chennai's premier architectural firm. Specializing in bespoke solutions for residential and commercial projects, our team blends aesthetics and functionality to redefine the cityscape. Elevate your vision — contact Chennai's leading architecture firm today."
        />
        <meta
          name="description"
          content="Connect with Studio Bind Architects, Chennai's premier architectural firm. Specializing in bespoke solutions for residential and commercial projects, our team blends aesthetics and functionality to redefine the cityscape. Elevate your vision — contact Chennai's leading architecture firm today."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bindarchitects.com/contact/" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Contact - Best Architects in Chennai | Top Architectural Firm"
        />
        <meta
          name="twitter:description"
          content="Welcome to Studio Bind, your premier architectural firm in Chennai. Transforming visions into stunning reality. Explore our innovative and sustainable architectural solutions, crafted by experienced architects and interior designers. From modern house designs to creative commercial spaces, our diverse portfolio showcases excellence in home, shop, and showroom design. Discover architectural dreams brought to life at Studio Bind, where every detail matters, and your unique vision takes center stage."
        />
        <meta
          property="og:title"
          content="Contact Us - Studio Bind Architects - Best Architects in Chennai"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Studio Bind Architects" />
        <meta
          name="keywords"
          content="best architects in chennai,, top architects, residential architecture, apartment design, villa design, restaurant architecture, interior design architects near me, cheap price architects, famous architects, interior designs, Architect in chennai, Interior designer in chennai, Top architects in chennai, Best architects in chennai, Home design in chennai, Shop design in chennai, Showroom designer in chennai, Residential architects, Commercial architects, best architects in chennai, top architects, residential architecture, apartment design, villa design, restaurant architecture, interior design, Modern home designs, Affordable home architects, Office interior designers, Trendy home plans, Innovative building designers, Local architects, Building design experts, Chennai architecture firms, Creative interior designs, Budget-friendly house architects, Local shop makeover, Renowned showroom renovators, Skilled construction designers, Contemporary building styles, Architecture and design services, Experienced architectural consultants"
        />
      </Head>
      <div className="flex flex-row mr-5 items-center justify-between space-x-2 mt-4 ">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P29J8CQM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>{" "}
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
      <div className="ml-5 md:mr-32 md:ml-32 flex justify-between">
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
      <div className="md:ml-32 md:mr-32 -mb-4">
        {" "}
        <ContactHead />
        <Contactform className="md:mt-20 mt-10" />
        <Contact />
        <SiteFooter />
      </div>
    </div>
  );
}

export default page;
