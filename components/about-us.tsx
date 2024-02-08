import React from "react";
import Head from "next/head";

export function Aboutus() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Explore our services and learn more about our approach to branding and product design."
        />{" "}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Bind Architects" />
        <meta
          name="keywords"
          content="best architects in chennai,, top architects, residential architecture, apartment design, villa design, restaurant architecture, interior design architects near me, cheap price architects, famous architects, interior designs, Architect in chennai, Interior designer in chennai, Top architects in chennai, Best architects in chennai, Home design in chennai, Shop design in chennai, Showroom designer in chennai, Residential architects, Commercial architects, best architects in chennai, top architects, residential architecture, apartment design, villa design, restaurant architecture, interior design, Modern home designs, Affordable home architects, Office interior designers, Trendy home plans, Innovative building designers, Local architects, Building design experts, Chennai architecture firms, Creative interior designs, Budget-friendly house architects, Local shop makeover, Renowned showroom renovators, Skilled construction designers, Contemporary building styles, Architecture and design services, Experienced architectural consultants"
        />
      </Head>
      <section
        id="about-us"
        className="md:-ml-1 mx-auto space-y-6 items-center text-left bg-slate-50 -z-20 mb-20  dark:bg-transparent md:py-6"
        aria-label="about us section"
      >
        <div className=" mt-20 flex flex-col md:items-start items-center space-y-4 text-left">
          <h2
            aria-label="About us"
            className="dmsans text-5xl title-gradient4  leading-[1.1] mb-10  md:text-6xl"
          >
            About Us
          </h2>
        </div>
        <article className="mx-auto flex-col flex grid justify-center gap-4 sm:grid-cols-2 justify-between md:grid-cols-1">
          <div className="flex md:flex-row flex-col ">
            <div className="flex-1 text-4xl dmsans-semibold title-gradient md:text-left md:mr-10 mr-0 text-center">
            Top architects, unbeatable prices.
            </div>
            <div className="flex-1 md:text-md fs-3 font-extralight dmsans text-md text-muted-foreground text-md md:text-left text-center md:p-0 p-3 md:justify-items-center md:ml-0 md:ml-24 md:mt-0 mt-10">
              At Studio Bind, we pride ourselves on being the best architects
              offering affordable solutions. Our commitment to cost-effective
              design ensures that excellence in architecture is accessible to
              all. We don&apos;t just create spaces; we create value.
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:mt-5">
            <div className="flex-1 text-4xl dmsans-semibold title-gradient md:text-left md:mr-10 mr-0 text-center md:mt-0 mt-6">
              Budget-Friendly Kick-Offs
            </div>
            <div className="flex-1 md:text-md fs-3 font-extralight dmsans text-md text-muted-foreground text-md md:text-left text-center md:p-0 p-3 md:justify-items-center md:ml-0 md:ml-24 md:mt-0 mt-10">
              Studio Bind believes in initiating architectural projects with
              cost-effective kick-offs. Our cheap architectural solutions don&apos;t
              compromise on quality, providing you with budget-friendly options
              without sacrificing excellence.
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:mt-5">
            <div className="flex-1 text-4xl dmsans-semibold title-gradient md:text-left md:mr-10 mr-0 text-center md:mt-0 mt-6">
              Best Architectural Practices
            </div>
            <div className="flex-1 md:text-md fs-3 font-extralight dmsans text-md text-muted-foreground text-md md:text-left text-center md:p-0 p-3 md:justify-items-center md:ml-0 md:ml-24 md:mt-0 mt-6">
              Studio Bind excels in delivering best-in-class architectural
              practices even within budget constraints. Our cost-effective
              approach ensures that you get the best architectural solutions
              without breaking the bank.
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:mt-5">
            <div className="flex-1 text-4xl dmsans-semibold title-gradient md:text-left md:mr-10 mr-0 text-center md:mt-0 mt-6">
              Direct Collaboration
            </div>
            <div className="flex-1 md:text-md fs-3 font-extralight dmsans text-md text-muted-foreground text-md md:text-left text-center md:p-0 p-3 md:justify-items-center md:ml-0 md:ml-24 md:mt-0 mt-10">
              At Studio Bind, we believe in direct communication with those
              holding the final say. We&apos;ve successfully executed awe-inspiring
              projects by engaging directly with CEOs and decision-makers. Let&apos;s
              discuss your architectural vision with the individuals who shape
              its destiny.
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Aboutus;
