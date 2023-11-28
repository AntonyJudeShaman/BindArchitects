import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import { siteConfig } from "config/site";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { fontSans } from "./fontSans";
import Head from "next/head";
import { Graph } from "schema-dts";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

const titleHeading = localFont({
  src: "../assets/fonts/BAUHS93.ttf",
  variable: "--title-heading",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

const graph = `
  
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WPHeader",
      "url": "https://www.bindhomes.com/",
      "headline": "Studio Bind - Best Architects in Chennai | Top Architectural Firm",
      "description": "Award-winning Best architects in Chennai, we cater our top architect's services on residential buildings, Interior Designs, Villa, Apartment, Institutional and commercial mall, hotel, restaurant in Chennai & all over Tamilnadu. A leading and best interior designer in Chennai"
    },
    {
      "@type": "WPFooter",
      "url": "https://www.bindhomes.com/",
      "headline": "Studio Bind - Best Architects in Chennai | Top Architectural Firm",
      "description": "Award-winning Best architects in Chennai, we cater our top architect's services on residential buildings, Interior Designs, Villa, Apartment, Institutional and commercial mall, hotel, restaurant in Chennai & all over Tamilnadu. A leading and best interior designer in Chennai",
      "copyrightYear": "2023"
    },
    {
      "@type": "Organization",
      "@id": "https://www.bindhomes.com/#schema-publishing-organization",
      "url": "https://www.bindhomes.com",
      "name": "Studio Bind",
      "description": "We are the team of Best architects in Chennai and cater our top architects services on residential buildings, Interior Designs, Villa, Urban, Institutional and commercial places in Chennai and all over Tamilnadu.",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "telephone": "+91-8072701454",
        "url": "https://bindhomes.com/contact/",
        "availableLanguage": "Tamil, English",
        "email": "bindarchitects@gmail.com"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10, Anjugam Street, Meenakshi Amman Nagar, Alwarthirunagar",
        "addressLocality": "Chennai",
        "postalCode": "600087",
        "addressCountry": "India"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.bindhomes.com/#schema-website",
      "url": "https://www.bindhomes.com",
      "name": "Studio Bind",
      "encoding": "UTF-8",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://bindhomes.com/projects/{search_term_string}/",
        "query-input": "required name=search_term_string"
      },
      "image": {
        "@type": "ImageObject",
        "@id": "https://www.bindhomes.com/#schema-site-logo",
        "url": "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
        "height": 153,
        "width": 300,
        "caption": "design lab for engineering and architecture bind logo"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.bindhomes.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.bindhomes.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://bindhomes.com/contact"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Best architects in chennai",
          "item": "https://www.bindhomes.com"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Top architects in chennai",
          "item": "https://www.bindhomes.com"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://bindhomes.com/about/#schema-author",
      "name": "Studio Bind"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.bindhomes.com/#schema-webpage",
      "isPartOf": {
        "@id": "https://www.bindhomes.com/#schema-website"
      },
      "publisher": {
        "@id": "https://www.bindhomes.com/#schema-publishing-organization"
      },
      "url": "https://www.bindhomes.com/",
      "inLanguage": "en-US",
      "hasPart": [
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.bindhomes.com/#schema-nav-element-529",
          "name": "Home",
          "url": "https://www.bindhomes.com/"
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.bindhomes.com/#schema-nav-element-528",
          "name": "",
          "url": "https://bindhomes.com/about/"
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.bindhomes.com/#schema-nav-element-527",
          "name": "",
          "url": "https://bindhomes.com/projects/"
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.bindhomes.com/#schema-nav-element-525",
          "name": "",
          "url": "https://bindhomes.com/contact/"
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://bindhomes.com/#schema-nav-element-2394",
          "name": "<img src=\"https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/facebook.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4\" title=\"facebook bind\"width=\"32px\">",
          "url": "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.bindarchitects.com%2Ffaq%3FquestionId%3Dbbe7072b-402e-4a9a-9fe1-cbf90f0c831e&appDefId=14c92d28-031e-7910-c9a8-a670011e062d"
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.bindhomes.com/#schema-nav-element-2395",
          "name": "<img src=\"https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/youtube.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4\" target=\"_blank\" title=\"youtube bind\"width=\"32px\">",
          "url": "https://www.youtube.com/channel/UCTI09wWkEJeNy7wXwD4zSCQ"
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.bindhomes.com/#schema-nav-element-2396",
          "name": "<img src=\"https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/instagram.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4\" target=\"_blank\" title=\"instagram bind\" width=\"32px\">",
          "url": "https://www.instagram.com/studio_bind/"
        }
      ]
    },
    {
      "@type": "Article",
      "mainEntityOfPage": {
        "@id": "https://www.bindhomes.com/#schema-webpage"
      },
      "author": {
        "@id": "https://bindhomes.com/about/#schema-author"
      },
      "publisher": {
        "@id": "https://www.bindhomes.com/#schema-publishing-organization"
      },
      "dateModified": "2023-11-22T14:29:49",
      "datePublished": "2023-09-24T08:32:28",
      "headline": "Studio Bind - Best Architects in Chennai | Top Architectural Firm",
      "description": "Award-winning Best architects in Chennai, we cater our top architect's services on residential buildings, Interior Designs, Villa, Apartment, Institutional and commercial mall, hotel, restaurant in Chennai & all over Tamilnadu. A leading and best interior designer in Chennai",
      "name": "Best architects in chennai",
      "image": {
        "@type": "ImageObject",
        "@id": "https://www.bindhomes.com/#schema-article-image",
        "url": "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
        "height": 153,
        "width": 300,
        "caption": "design lab for engineering and architecture bind logo"
      },
      "thumbnailUrl": "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d"
    }
  ]`;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bindhomes.com"),
  title:
    "Studio Bind - Top Architectural Firm - Best Architects in Chennai - Best Interior Designers",
  description: siteConfig.description,
  keywords: [
    "best architects in chennai",
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

const fallbackStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "black",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Script
        id="structured-data"
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <Head>
        <GoogleTagManager gtmId="GTM-P29J8CQM" />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P29J8CQM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* <script type="application/ld+json">
  {`
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WPHeader",
        "url": "https://bindhomes.com/",
        "headline": "Studio Bind - Best Architects in Chennai | Top Architectural Firm",
        "description": "Award-winning Best architects in Chennai, we cater our top architect's services on residential buildings, Interior Designs, Villa, Apartment, Institutional and commercial mall, hotel, restaurant in Chennai & all over Tamilnadu. A leading and best interior designer in Chennai"
      },
      {
        "@type": "WPFooter",
        "url": "https://bindhomes.com/",
        "headline": "Studio Bind - Best Architects in Chennai | Top Architectural Firm",
        "description": "Award-winning Best architects in Chennai, we cater our top architect's services on residential buildings, Interior Designs, Villa, Apartment, Institutional and commercial mall, hotel, restaurant in Chennai & all over Tamilnadu. A leading and best interior designer in Chennai",
        "copyrightYear": "2023"
      },
      {
        "@type": "Organization",
        "@id": "https://bindhomes.com/#schema-publishing-organization",
        "url": "https://bindhomes.com",
        "name": "Studio Bind",
        "description": "We are the team of Best architects in Chennai and cater our top architects services on residential buildings, Interior Designs, Villa, Urban, Institutional and commercial places in Chennai and all over Tamilnadu.",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "telephone": "+91-8072701454",
          "url": "https://bindhomes.com/contact/",
          "availableLanguage": "Tamil, English",
          "email": "bindarchitects@gmail.com"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "10, Anjugam Street, Meenakshi Amman Nagar, Alwarthirunagar",
          "addressLocality": "Chennai",
          "postalCode": "600087",
          "addressCountry": "India"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://bindhomes.com/#schema-website",
        "url": "https://bindhomes.com",
        "name": "Studio Bind",
        "encoding": "UTF-8",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://bindhomes.com/projects/{search_term_string}/",
          "query-input": "required name=search_term_string"
        },
        "image": {
          "@type": "ImageObject",
          "@id": "https://bindhomes.com/#schema-site-logo",
          "url": "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
          "height": 153,
          "width": 300,
          "caption": "design lab for engineering and architecture bind logo"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://bindhomes.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://bindhomes.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact",
            "item": "https://bindhomes.com/contact"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Best architects in chennai",
            "item": "https://bindhomes.com"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Top architects in chennai",
            "item": "https://bindhomes.com"
          }
        ]
      },
      {
        "@type": "Person",
        "@id": "https://bindhomes.com/about/#schema-author",
        "name": "Studio Bind"
      },
      {
        "@type": "WebPage",
        "@id": "https://bindhomes.com/#schema-webpage",
        "isPartOf": {
          "@id": "https://bindhomes.com/#schema-website"
        },
        "publisher": {
          "@id": "https://bindhomes.com/#schema-publishing-organization"
        },
        "url": "https://bindhomes.com/",
        "inLanguage": "en-US",
        "hasPart": [
          {
            "@type": "SiteNavigationElement",
            "@id": "https://bindhomes.com/#schema-nav-element-529",
            "name": "Home",
            "url": "https://bindhomes.com/"
          },
          {
            "@type": "SiteNavigationElement",
            "@id": "https://bindhomes.com/#schema-nav-element-528",
            "name": "",
            "url": "https://bindhomes.com/about/"
          },
          {
            "@type": "SiteNavigationElement",
            "@id": "https://bindhomes.com/#schema-nav-element-527",
            "name": "",
            "url": "https://bindhomes.com/projects/"
          },
          {
            "@type": "SiteNavigationElement",
            "@id": "https://bindhomes.com/#schema-nav-element-525",
            "name": "",
            "url": "https://bindhomes.com/contact/"
          },
          {
            "@type": "SiteNavigationElement",
            "@id": "https://bindhomes.com/#schema-nav-element-2394",
            "name": "<img src=\"https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/facebook.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4\" title=\"facebook bind\"width=\"32px\">",
            "url": "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.bindarchitects.com%2Ffaq%3FquestionId%3Dbbe7072b-402e-4a9a-9fe1-cbf90f0c831e&appDefId=14c92d28-031e-7910-c9a8-a670011e062d"
          },
          {
            "@type": "SiteNavigationElement",
            "@id": "https://bindhomes.com/#schema-nav-element-2395",
            "name": "<img src=\"https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/youtube.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4\" target=\"_blank\" title=\"youtube bind\"width=\"32px\">",
            "url": "https://www.youtube.com/channel/UCTI09wWkEJeNy7wXwD4zSCQ"
          },
          {
            "@type": "SiteNavigationElement",
            "@id": "https://bindhomes.com/#schema-nav-element-2396",
            "name": "<img src=\"https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/instagram.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4\" target=\"_blank\" title=\"instagram bind\" width=\"32px\">",
            "url": "https://www.instagram.com/studio_bind/"
          }
        ]
      },
      {
        "@type": "Article",
        "mainEntityOfPage": {
          "@id": "https://bindhomes.com/#schema-webpage"
        },
        "author": {
          "@id": "https://bindhomes.com/about/#schema-author"
        },
        "publisher": {
          "@id": "https://bindhomes.com/#schema-publishing-organization"
        },
        "dateModified": "2023-11-22T14:29:49+05:30",
        "datePublished": "2023-09-24T08:32:28+05:30",
        "headline": "Studio Bind - Best Architects in Chennai | Top Architectural Firm",
        "description": "Award-winning Best architects in Chennai, we cater our top architect's services on residential buildings, Interior Designs, Villa, Apartment, Institutional and commercial mall, hotel, restaurant in Chennai & all over Tamilnadu. A leading and best interior designer in Chennai",
        "name": "Best architects in chennai",
        "image": {
          "@type": "ImageObject",
          "@id": "https://bindhomes.com/#schema-article-image",
          "url": "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
          "height": 153,
          "width": 300,
          "caption": "design lab for engineering and architecture bind logo"
        },
        "thumbnailUrl": "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d"
      }
    ]`
  }
</cript> */}
        <meta
          name="twitter:image:alt"
          property="og:image:alt"
          content="Studio Bind Architects Logo"
        />

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
        <meta
          name="description"
          content="Welcome to Studio Bind, your premier architectural firm in Chennai. Transforming visions into stunning reality. Explore our innovative and sustainable architectural solutions, crafted by experienced architects and interior designers. From modern house designs to creative commercial spaces, our diverse portfolio showcases excellence in home, shop, and showroom design. Discover architectural dreams brought to life at Studio Bind, where every detail matters, and your unique vision takes center stage."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Studio Bind Architects" />
        <meta
          name="keywords"
          content="best architects in chennai,, top architects, residential architecture, apartment design, villa design, restaurant architecture, interior design architects near me, cheap price architects, famous architects, interior designs, Architect in chennai, Interior designer in chennai, Top architects in chennai, Best architects in chennai, Home design in chennai, Shop design in chennai, Showroom designer in chennai, Residential architects, Commercial architects, best architects in chennai, top architects, residential architecture, apartment design, villa design, restaurant architecture, interior design, Modern home designs, Affordable home architects, Office interior designers, Trendy home plans, Innovative building designers, Local architects, Building design experts, Chennai architecture firms, Creative interior designs, Budget-friendly house architects, Local shop makeover, Renowned showroom renovators, Skilled construction designers, Contemporary building styles, Architecture and design services, Experienced architectural consultants"
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
      <body
        id="section1"
        className={cn(
          "min-h-screen dmsans bg md:pl-28 md:pr-32 pr-0 pl-0 max-w-screen md:max-w-screen scroll-smooth  antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P29J8CQM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Suspense
          data-speed="1.5"
          fallback={<div style={fallbackStyle}>Loading Please wait...</div>}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
            <Toaster />
            <TailwindIndicator />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
