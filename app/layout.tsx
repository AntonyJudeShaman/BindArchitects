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

export const metadata: Metadata = {
  metadataBase: new URL("https://bindhomes.com"),
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
  authors: [
    {
      name: "AJS",
      url: "www.bindhomes.com",
    },
  ],
  creator: "AJS",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    site: "",
    description: siteConfig.description,
    images: "/favicon.ico",
    creator: "@AJS",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // manifest: `${siteConfig.url}/site.webmanifest`,
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
      <Head>
        <link rel="canonical" href="https://www.bindhomes.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Welcome to Studio Bind, your premier architectural firm in Chennai. Transforming visions into stunning reality. Explore our innovative and sustainable architectural solutions, crafted by experienced architects and interior designers. From modern house designs to creative commercial spaces, our diverse portfolio showcases excellence in home, shop, and showroom design. Discover architectural dreams brought to life at Studio Bind, where every detail matters, and your unique vision takes center stage."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Studio Bind Architects" />
        <meta
          name="keywords"
          content="
    best architects in chennai,
    architects near me,
    cheap price architects,
    famous architects,
    interior designs,
    Architect in chennai,
    Interior designer in chennai,
    Top architects in chennai,
    Best architects in chennai,
    Home design in chennai,
    Shop design in chennai,
    Showroom designer in chennai,
    Residential architects,
    Commercial architects,
    best architects in chennai, 
    top architects, 
    residential architecture, 
    apartment design, 
    villa design, 
    restaurant architecture, 
    interior design
    Modern home designs,
    Affordable home architects,
    Office interior designers,
    Trendy home plans,
    Innovative building designers,
    Local architects,
    Building design experts,
    Chennai architecture firms,
    Creative interior designs,
    Budget-friendly house architects,
    Local shop makeover,
    Renowned showroom renovators,
    Skilled construction designers,
    Contemporary building styles,
    Architecture and design services,
    Experienced architectural consultants
  "
        />
      </Head>
      <head />
      <body
        id="section1"
        className={cn(
          "min-h-screen  bg-black dmsans text-white md:pl-32 md:pr-32 pr-0 pl-0 max-w-screen md:max-w-screen scroll-smooth  antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
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
