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
