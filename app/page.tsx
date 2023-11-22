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
import Footer from "@/components/footer";
import SiteFooter from "@/components/site-footer";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Studio Bind - Best Architects in Chennai | Top Architectural Firm",
  description:
    "Discover the Leading Architects in Chennai - Unveiling Unparalleled Design Excellence. Explore the portfolio of top-tier architects and architectural firms in Chennai, renowned for crafting innovative, sustainable, and aesthetically captivating designs. Elevate your architectural visions with our exceptional expertise and dedication to transforming spaces. Whether you're seeking modern house designs, sustainable architecture, or creative commercial spaces, our top architects in Chennai are here to exceed your expectations. Explore our portfolio for residential and commercial architects, and witness the fusion of functionality and aesthetic appeal. Elevate your architectural dreams with the best architects in Chennai, dedicated to delivering excellence in every project.",
};

export default function HomeLayout() {
  return (
    <div className="min-h-screen max-w-screen mt-4">
      <Head>
        <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P29J8CQM');
          `}
        </script>
        <title>
          Studio Bind - Best Architects in Chennai | Top Architectural Firm
        </title>
        <link rel="canonical" href="https://bindhomes.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bindhomes.com/" />
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
          className="logo-font select-none md:hidden ml-5 md:ml-0 flex-1 text-4xl font-bold"
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

      <IndexPage />
      <Projects />
      <Client />
      <Aboutus />
      <Questions />
      <SiteFooter />
    </div>
  );
}
