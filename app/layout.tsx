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
    "Bind - Top Architectural Firm - Best Architects in Chennai - Best Interior Designers",
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
      url: "https://bindhomes.com",
    },
  ],
  creator: "AJS",
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
      <Head>
        <script type="application/ld+json">
          {`
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Bind Architects",
      "logo": "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
      "url": "https://bindhomes.com",
      "sameAs": ["https://www.instagram.com/studio_bind/","https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.bindarchitects.com%2Ffaq%3FquestionId%3Dbbe7072b-402e-4a9a-9fe1-cbf90f0c831e&appDefId=14c92d28-031e-7910-c9a8-a670011e062d","https://www.youtube.com/channel/UCTI09wWkEJeNy7wXwD4zSCQ"],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91 8072701454",
          "contactType": "general inquiries",
          "availableLanguage": "Tamil, English",
          "email": "bindarchitects@gmail.com"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10, Anjugam Street, Meenakshi Amman Nagar, Alwarthirunagar",
        "addressLocality": "Chennai",
        "postalCode": "600087",
        "addressCountry": "India"
      }
    },
    {
      "@type": "BreadcrumbList",
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
          "name": "Projects",
          "item": "https://bindhomes.com/projects"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "About",
          "item": "https://bindhomes.com/about"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "FAQ",
          "item": "https://bindhomes.com/frequently-asked-questions"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Contact",
          "item": "https://bindhomes.com/contact"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Studio Bind - Best Architects in Chennai | Top Architectural Firm",
      "datePublished": "2023-11-22T12:00:00Z",
      "dateModified": "2023-11-22T14:30:00Z",
      "author": {
        "@type": "Person",
        "name": "Studio Bind"
      },
      "image": "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
      "publisher": {
        "@type": "Organization",
        "name": "Bind Architects",
        "logo": "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
        "url": "https://bindhomes.com/"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://bindhomes.com/"
      },
      "articleSection": "Best Architects in Chennai",
      "keywords": "best architects in chennai, top architects, ... (your other keywords)",
      "description": "Welcome to Studio Bind, your premier architectural firm in Chennai. Transforming visions into stunning reality. Explore our innovative and sustainable architectural solutions, crafted by experienced architects and interior designers. From modern house designs to creative commercial spaces, our diverse portfolio showcases excellence in home, shop, and showroom design. Discover architectural dreams brought to life at Studio Bind, where every detail matters, and your unique vision takes center stage.",
      "articleBody": "In the dynamic realm of architecture and interior design, achieving the delicate equilibrium between form and function is paramount. As a leading firm in the industry, Bind Homes is dedicated to delivering cutting-edge and enduring designs that not only captivate the eye but also enrich the living experience. Our team, comprised of skilled architects and designers, recognizes the significance of crafting spaces that mirror the distinctive identity of our clients. Whether it's residential projects redefining modern living or commercial spaces fostering creativity, our commitment lies in transforming visions into reality. Key Services: Architectural Design: Our architectural design services span a spectrum of styles, from contemporary to classic. We believe in creating spaces that seamlessly integrate with their surroundings while pushing the boundaries of creativity. Interior Design: Interior design at Bind Homes transcends aesthetics. We focus on creating interiors that narrate a story, reflecting the personality and aspirations of our clients. Each project is a unique journey, striving to make every space both functional and visually stunning. Sustainable Architecture: Embracing eco-friendly practices, we integrate sustainable design principles into our projects. From energy-efficient lighting to eco-conscious material choices, we are dedicated to reducing our environmental footprint while delivering top-notch designs. Project Showcase: Explore our portfolio to witness the diversity and excellence of our work. From residential homes to commercial complexes, each project showcases our commitment to quality craftsmanship and attention to detail. Why Bind Homes: Expert Team: Our team comprises experienced architects, interior designers, and project managers committed to surpassing client expectations. Innovative Solutions: Leveraging the latest trends and technologies, we bring innovative solutions to every project, ensuring a forward-thinking approach. Client-Centric Approach: Your vision is our priority. We work closely with clients to understand their needs and aspirations, tailoring our designs to match their unique requirements. Award-Winning Designs: Our commitment to excellence has been recognized through numerous awards in the architecture and interior design industry. At Bind Homes, we believe that great design has the power to transform lives. Whether you're embarking on a residential project or envisioning a commercial space that stands out, let us be your partner in turning dreams into reality. For inquiries and consultations, contact us. Transform your space with Bind Homes & where innovation meets inspiration."
}
    ]`}
        </script>

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
