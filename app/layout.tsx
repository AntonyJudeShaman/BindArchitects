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
import { SpeedInsights } from "@vercel/speed-insights/next";
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
      name: "Studio Bind Architects",
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
      name: "Studio Bind Architects",
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
          name: "Contact Us",
          item: "https://www.bindarchitects.com/contact",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Projects",
          item: "https://www.bindarchitects.com/projects",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "About Studio Bind",
          item: "https://www.bindarchitects.com/about",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Best architects in chennai",
          item: "https://www.bindarchitects.com",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Top architects in chennai",
          item: "https://www.bindarchitects.com",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.bindarchitects.com/about/#schema-author",
      name: "Studio Bind Architects",
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
      <body
        id="section1"
        className={cn(
          "min-h-screen dmsans bg md:pl-28 md:pr-32 pr-0 pl-0 max-w-screen md:max-w-screen scroll-smooth  antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <Analytics />
        <SpeedInsights />
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
