import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import { siteConfig } from "config/site";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import Particles from "@/components/particles";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { fontSans } from "./fontSans";
import { NextSeo } from "next-seo";

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
    "Top architects in chennnai",
    "Best architects in chennai",
    "Home design in chennai",
    "Shop design in chennai",
    "Showroom designer in chennai",
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
    description: siteConfig.description,
    images: "/favicon.ico",
    creator: "@AJS",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
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
      {/* <NextSeo
        title="Studio Bind Architects - Best Architects in Chennai, Tamil Nadu | Top Architectural Firm"
        description="Explore the excellence of Studio Bind Architects, the best architectural firm in Chennai, Tamil Nadu. Our innovative designs and commitment to quality make us stand out as the top choice for your architectural needs."
        canonical="https://www.studiobindarchitects.com/about"
        openGraph={{
          url: "https://www.studiobindarchitects.com",
          title:
            "Studio Bind Architects - Innovating Spaces, Creating Masterpieces",
          description:
            "Discover the visionary designs and architectural brilliance of Studio Bind. We are the leading architectural firm in Chennai, Tamil Nadu, dedicated to creating timeless and sustainable spaces.",
          images: [
            {
              url: "https://www.studiobindarchitects.com/logo.png",
              width: 1200,
              height: 630,
              alt: "Studio Bind Architects - Creating Architectural Masterpieces",
            },
          ],
          site_name: "Studio Bind Architects",
        }}
      /> */}

      <head>
        <link rel="canonical" href="https://www.bindhomes.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Welcome to Studio Bind, Your Premier Architectural Firm in Chennai. Transforming Visions into Stunning Reality. As a top architectural firm based in Chennai, we specialize in crafting innovative and sustainable architectural solutions. Explore our portfolio of breathtaking designs and discover how we bring your architectural dreams to life."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Studio Bind Architects" />
        <meta
          name="keywords"
          content="best architects in chennai, architects near me, cheap price architects, famous architects, interior designs, Architect in chennai, Interior designer in chennai, Top architects in chennnai, Best architects in chennai, Home design in chennai, Shop design in chennai, Showroom designer in chennai"
        />
      </head>
      <head />
      <body
        id="section1"
        className={cn(
          "min-h-screen  bg-black dmsans md:pl-32 md:pr-32 pr-0 pl-0 max-w-screen md:max-w-full scroll-smooth  antialiased",
          fontSans.variable,
          fontHeading.variable,
          titleHeading.variable
        )}
        style={{ fontWeight: "300" }}
      >
        <Suspense
          data-speed="1.5"
          fallback={<div style={fallbackStyle}>Loading Please wait...</div>}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
            <Analytics />
            <Toaster />
            {/* <Particles
            className="animate-fade-in h-full absolute inset-0 -z-10"
            quantity={100}
          /> */}
            <TailwindIndicator />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
