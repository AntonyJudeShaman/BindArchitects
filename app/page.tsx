import Link from "next/link";
import { marketingConfig } from "config/marketing";
import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";
import IndexPage from "@/components/home-page";
import Aboutus from "@/components/about-us";
import { Metadata } from "next";
import { Projects } from "@/components/projects";
import Client from "@/components/client";
import Questions from "@/components/still-questions";
import Head from "next/head";
import SiteFooter from "@/components/site-footer";
import Script from "next/script";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Studio Bind - Best Architects in Chennai | Top Architectural Firm",
  description:
    "Discover the Leading Architects in Chennai - Unveiling Unparalleled Design Excellence. Explore the portfolio of top-tier architects and architectural firms in Chennai, renowned for crafting innovative, sustainable, and aesthetically captivating designs. Elevate your architectural visions with our exceptional expertise and dedication to transforming spaces. Whether you're seeking modern house designs, sustainable architecture, or creative commercial spaces, our top architects in Chennai are here to exceed your expectations. Explore our portfolio for residential and commercial architects, and witness the fusion of functionality and aesthetic appeal. Elevate your architectural dreams with the best architects in Chennai, dedicated to delivering excellence in every project.",
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WPHeader",
      url: "https://www.bindarchitects.com/",
      headline:
        "Studio Bind - Best Architects in Chennai | Top Architectural Firm",
      description:
        "Award-winning Best architects in Chennai, we cater our top architect's services on residential buildings, Interior Designs, Villa, Apartment, Institutional and commercial mall, hotel, restaurant in Chennai & all over Tamilnadu. A leading and best interior designer in Chennai",
    },
    {
      "@type": "WPFooter",
      url: "https://www.bindarchitects.com/",
      headline:
        "Studio Bind - Best Architects in Chennai | Top Architectural Firm",
      description:
        "Award-winning Best architects in Chennai, we cater our top architect's services on residential buildings, Interior Designs, Villa, Apartment, Institutional and commercial mall, hotel, restaurant in Chennai & all over Tamilnadu. A leading and best interior designer in Chennai",
      copyrightYear: "2023",
    },
    {
      "@type": "Organization",
      "@id": "https://www.bindarchitects.com/#schema-publishing-organization",
      url: "https://www.bindarchitects.com",
      name: "Studio Bind",
      description:
        "We are the team of Best architects in Chennai and cater our top architects services on residential buildings, Interior Designs, Villa, Urban, Institutional and commercial places in Chennai and all over Tamilnadu.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+91-8072701454",
        url: "https://www.bindarchitects.com/contact/",
        availableLanguage: "Tamil, English",
        email: "bindarchitects@gmail.com",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "10, Anjugam Street, Meenakshi Amman Nagar, Alwarthirunagar",
        addressLocality: "Chennai",
        postalCode: "600087",
        addressCountry: "India",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.bindarchitects.com/#schema-website",
      url: "https://www.bindarchitects.com",
      name: "Studio Bind",
      encoding: "UTF-8",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.bindarchitects.com/projects/{search_term_string}/",
        "query-input": "required name=search_term_string",
      },
      image: {
        "@type": "ImageObject",
        "@id": "https://www.bindarchitects.com/#schema-site-logo",
        url: "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
        height: 153,
        width: 300,
        caption: "design lab for engineering and architecture bind logo",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.bindarchitects.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.bindarchitects.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: "https://www.bindarchitects.com/contact",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best architects in chennai",
          item: "https://www.bindarchitects.com",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Top architects in chennai",
          item: "https://www.bindarchitects.com",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.bindarchitects.com/about/#schema-author",
      name: "Studio Bind",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.bindarchitects.com/#schema-webpage",
      isPartOf: {
        "@id": "https://www.bindarchitects.com/#schema-website",
      },
      publisher: {
        "@id": "https://www.bindarchitects.com/#schema-publishing-organization",
      },
      url: "https://www.bindarchitects.com/",
      inLanguage: "en-US",
      hasPart: [
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.bindarchitects.com/#schema-nav-element-529",
          name: "Home",
          url: "https://www.bindarchitects.com/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.bindarchitects.com/#schema-nav-element-528",
          name: "",
          url: "https://www.bindarchitects.com/about/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.bindarchitects.com/#schema-nav-element-527",
          name: "",
          url: "https://www.bindarchitects.com/projects/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.bindarchitects.com/#schema-nav-element-525",
          name: "",
          url: "https://www.bindarchitects.com/contact/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.bindarchitects.com/#schema-nav-element-2394",
          name: '<img src="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/facebook.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4" title="facebook bind"width="32px">',
          url: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.bindarchitects.com%2Ffaq%3FquestionId%3Dbbe7072b-402e-4a9a-9fe1-cbf90f0c831e&appDefId=14c92d28-031e-7910-c9a8-a670011e062d",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.bindarchitects.com/#schema-nav-element-2395",
          name: '<img src="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/youtube.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4" target="_blank" title="youtube bind"width="32px">',
          url: "https://www.youtube.com/channel/UCTI09wWkEJeNy7wXwD4zSCQ",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.bindarchitects.com/#schema-nav-element-2396",
          name: '<img src="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/instagram.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4" target="_blank" title="instagram bind" width="32px">',
          url: "https://www.instagram.com/studio_bind/",
        },
      ],
    },
    {
      "@type": "Article",
      mainEntityOfPage: {
        "@id": "https://www.bindarchitects.com/#schema-webpage",
      },
      author: {
        "@id": "https://www.bindarchitects.com/about/#schema-author",
      },
      publisher: {
        "@id": "https://www.bindarchitects.com/#schema-publishing-organization",
      },
      dateModified: "2023-11-22T14:29:49",
      datePublished: "2023-09-24T08:32:28",
      headline:
        "Studio Bind - Best Architects in Chennai | Top Architectural Firm",
      description:
        "Award-winning Best architects in Chennai, we cater our top architect's services on residential buildings, Interior Designs, Villa, Apartment, Institutional and commercial mall, hotel, restaurant in Chennai & all over Tamilnadu. A leading and best interior designer in Chennai",
      name: "Best architects in chennai",
      image: {
        "@type": "ImageObject",
        "@id": "https://www.bindarchitects.com/#schema-article-image",
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

export default function HomeLayout() {
  return (
    <div className="min-h-screen max-w-screen mt-4">
      <Script
        id="structured-data"
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />

      <Head>
        <title>
          Studio Bind - Best Architects in Chennai | Top Architectural Firm
        </title>
        <link rel="canonical" href="https://www.bindarchitects.com/" />
        <meta
          name="twitter:image:alt"
          property="og:image:alt"
          content="Studio Bind Architects Logo"
        />
        <script type="application/ld+json">
          {`"@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WPHeader",
      url: "https://www.bindarchitects.com/",
      headline:
        "Studio Bind - Best Architects in Chennai | Top Architectural Firm",
      description:
        "Award-winning Best architects in Chennai, we cater our top architect's services on residential buildings, Interior Designs, Villa, Apartment, Institutional and commercial mall, hotel, restaurant in Chennai & all over Tamilnadu. A leading and best interior designer in Chennai",
    },
    {
      "@type": "WPFooter",
      url: "https://www.bindarchitects.com/",
      headline:
        "Studio Bind - Best Architects in Chennai | Top Architectural Firm",
      description:
        "Award-winning Best architects in Chennai, we cater our top architect's services on residential buildings, Interior Designs, Villa, Apartment, Institutional and commercial mall, hotel, restaurant in Chennai & all over Tamilnadu. A leading and best interior designer in Chennai",
      copyrightYear: "2023",
    },
    {
      "@type": "Organization",
      "@id": "https://www.bindarchitects.com/#schema-publishing-organization",
      url: "https://www.bindarchitects.com",
      name: "Studio Bind",
      description:
        "We are the team of Best architects in Chennai and cater our top architects services on residential buildings, Interior Designs, Villa, Urban, Institutional and commercial places in Chennai and all over Tamilnadu.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+91-8072701454",
        url: "https://www.bindarchitects.com/contact/",
        availableLanguage: "Tamil, English",
        email: "bindarchitects@gmail.com",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "10, Anjugam Street, Meenakshi Amman Nagar, Alwarthirunagar",
        addressLocality: "Chennai",
        postalCode: "600087",
        addressCountry: "India",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.bindarchitects.com/#schema-website",
      url: "https://www.bindarchitects.com",
      name: "Studio Bind",
      encoding: "UTF-8",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.bindarchitects.com/projects/{search_term_string}/",
        "query-input": "required name=search_term_string",
      },
      image: {
        "@type": "ImageObject",
        "@id": "https://www.bindarchitects.com/#schema-site-logo",
        url: "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
        height: 153,
        width: 300,
        caption: "design lab for engineering and architecture bind logo",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.bindarchitects.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.bindarchitects.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: "https://www.bindarchitects.com/contact",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best architects in chennai",
          item: "https://www.bindarchitects.com",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Top architects in chennai",
          item: "https://www.bindarchitects.com",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.bindarchitects.com/about/#schema-author",
      name: "Studio Bind",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.bindarchitects.com/#schema-webpage",
      isPartOf: {
        "@id": "https://www.bindarchitects.com/#schema-website",
      },
      publisher: {
        "@id": "https://www.bindarchitects.com/#schema-publishing-organization",
      },
      url: "https://www.bindarchitects.com/",
      inLanguage: "en-US",
      hasPart: [
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.bindarchitects.com/#schema-nav-element-529",
          name: "Home",
          url: "https://www.bindarchitects.com/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.bindarchitects.com/#schema-nav-element-528",
          name: "",
          url: "https://www.bindarchitects.com/about/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.bindarchitects.com/#schema-nav-element-527",
          name: "",
          url: "https://www.bindarchitects.com/projects/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.bindarchitects.com/#schema-nav-element-525",
          name: "",
          url: "https://www.bindarchitects.com/contact/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.bindarchitects.com/#schema-nav-element-2394",
          name: '<img src="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/facebook.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4" title="facebook bind"width="32px">',
          url: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.bindarchitects.com%2Ffaq%3FquestionId%3Dbbe7072b-402e-4a9a-9fe1-cbf90f0c831e&appDefId=14c92d28-031e-7910-c9a8-a670011e062d",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.bindarchitects.com/#schema-nav-element-2395",
          name: '<img src="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/youtube.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4" target="_blank" title="youtube bind"width="32px">',
          url: "https://www.youtube.com/channel/UCTI09wWkEJeNy7wXwD4zSCQ",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.bindarchitects.com/#schema-nav-element-2396",
          name: '<img src="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/instagram.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4" target="_blank" title="instagram bind" width="32px">',
          url: "https://www.instagram.com/studio_bind/",
        },
      ],
    },
    {
      "@type": "Article",
      mainEntityOfPage: {
        "@id": "https://www.bindarchitects.com/#schema-webpage",
      },
      author: {
        "@id": "https://www.bindarchitects.com/about/#schema-author",
      },
      publisher: {
        "@id": "https://www.bindarchitects.com/#schema-publishing-organization",
      },
      dateModified: "2023-11-22T14:29:49",
      datePublished: "2023-09-24T08:32:28",
      headline:
        "Studio Bind - Best Architects in Chennai | Top Architectural Firm",
      description:
        "Award-winning Best architects in Chennai, we cater our top architect's services on residential buildings, Interior Designs, Villa, Apartment, Institutional and commercial mall, hotel, restaurant in Chennai & all over Tamilnadu. A leading and best interior designer in Chennai",
      name: "Best architects in chennai",
      image: {
        "@type": "ImageObject",
        "@id": "https://www.bindarchitects.com/#schema-article-image",
        url: "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
        height: 153,
        width: 300,
        caption: "design lab for engineering and architecture bind logo",
      },
      thumbnailUrl:
        "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
    },
  ]`}
        </script>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" sizes="16x16" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image"
          sizes="any"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="generator" content="Site Kit by Google 1.104.0" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bindarchitects.com/" />
        <meta
          property="og:title"
          content="Studio Bind - Best Architects in Chennai | Top Architectural Firm"
        />
        <meta
          property="og:description"
          content="Discover the portfolio of Best Architects in Chennai. Explore a showcase of innovative and inspiring residential and commercial spaces. From conceptualization to realization, immerse yourself in the artistry and functionality of our architectural designs. Elevate your vision of modern living with Chennai's leading architectural firm, Studio Bind Architects."
        />

        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d"
        />
        <meta
          name="keywords"
          content="best architects in chennai,, top architects, residential architecture, apartment design, villa design, restaurant architecture, interior design architects near me, cheap price architects, famous architects, interior designs, Architect in chennai, Interior designer in chennai, Top architects in chennai, Best architects in chennai, Home design in chennai, Shop design in chennai, Showroom designer in chennai, Residential architects, Commercial architects, best architects in chennai, top architects, residential architecture, apartment design, villa design, restaurant architecture, interior design, Modern home designs, Affordable home architects, Office interior designers, Trendy home plans, Innovative building designers, Local architects, Building design experts, Chennai architecture firms, Creative interior designs, Budget-friendly house architects, Local shop makeover, Renowned showroom renovators, Skilled construction designers, Contemporary building styles, Architecture and design services, Experienced architectural consultants"
        />
        <meta
          name="description"
          content="Welcome to Studio Bind, your premier architectural firm in Chennai. Transforming visions into stunning reality. Explore our innovative and sustainable architectural solutions, crafted by experienced architects and interior designers. From modern house designs to creative commercial spaces, our diverse portfolio showcases excellence in home, shop, and showroom design. Discover architectural dreams brought to life at Studio Bind, where every detail matters, and your unique vision takes center stage."
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Studio Bind - Best Architects in Chennai | Top Architectural Firm"
        />
        <meta
          name="twitter:description"
          content="Welcome to Studio Bind, your premier architectural firm in Chennai. Transforming visions into stunning reality. Explore our innovative and sustainable architectural solutions, crafted by experienced architects and interior designers. From modern house designs to creative commercial spaces, our diverse portfolio showcases excellence in home, shop, and showroom design. Discover architectural dreams brought to life at Studio Bind, where every detail matters, and your unique vision takes center stage."
        />
      </Head>
      <div className="flex flex-row mr-5 items-center justify-between space-x-2 bg">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P29J8CQM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <p
          className="logo-font select-none md:hidden pl-2 md:ml-0 flex-1 text-4xl font-bold"
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
                  "after:mt-2"
                )}
              >
                <span className="">{item.title}</span>
              </Link>
            ))}
        </nav>
      </div>

      <IndexPage />
      <Projects />
      <Client />
      <Aboutus />
      <Questions />
      <SiteFooter />
    </div>
  );
}
