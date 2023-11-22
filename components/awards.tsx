import React from "react";
import Head from "next/head";

export function Awards() {
  return (
    <>
      <Head>
        <title>Awards - Studio Bind Architects</title>
        <meta
          name="description"
          content="Explore the awards and recognition received by our architecture and interior design firm in 2023."
        />
         <meta name="robots" content="index, follow" />
        <meta name="author" content="Studio Bind Architects" />
        <meta
          name="keywords"
          content="best architects in chennai,, top architects, residential architecture, apartment design, villa design, restaurant architecture, interior design architects near me, cheap price architects, famous architects, interior designs, Architect in chennai, Interior designer in chennai, Top architects in chennai, Best architects in chennai, Home design in chennai, Shop design in chennai, Showroom designer in chennai, Residential architects, Commercial architects, best architects in chennai, top architects, residential architecture, apartment design, villa design, restaurant architecture, interior design, Modern home designs, Affordable home architects, Office interior designers, Trendy home plans, Innovative building designers, Local architects, Building design experts, Chennai architecture firms, Creative interior designs, Budget-friendly house architects, Local shop makeover, Renowned showroom renovators, Skilled construction designers, Contemporary building styles, Architecture and design services, Experienced architectural consultants"
        />
      </Head>
      <div className="md:-mt-28 md:-ml-28 md:p-4 p-1 lg:-ml-28 -ml-4 xl:-ml-28 2xl:-ml-48 md:-mr-20 mt-10">
        <section
          className="container   bg-slate-50 mb-20  dark:bg-transparent md:py-6"
          aria-label="about us section"
        >
          <div className="mx-auto  flex max-w-[88rem] flex-col space-y-4 text-center">
            <h2 className="dmsans-semibold text-4xl text-left dmsans font-medium leading-[1.1] mb-5 md:text-7xl" aria-label="Our Awards">
              Our Awards
            </h2>
            <hr/>
          </div>
          <div className="md:max-w-[58rem] md:grid-cols-1">
            <div className="flex md:flex-col flex-col">
              <div className="flex-1 text-3xl mt-10 font-semibold dmsans leading-normal dmsans-semibold text-left sm:text-md sm:leading-8">
                Promising & Creative Architecture & Interior Design Firm of the
                Year 2023” Tamil Nadu Award under “Residential Projects &
                Commercial Projects” Category for the year 2023 (GLOBAL
                EDITION).
              </div>
              <br />
              <div className="flex-1 text-xl dmsans leading-normal dmsans text-left text-muted-foreground sm:text-md sm:leading-8">
                STUDIO BIND - National Architecture and Interior Design
                Excellence Awards and Conference, 2023, Global Edition.
              </div>{" "}
            </div>
          </div>
          <br />
          <br />
          <div className="md:max-w-[58rem] md:grid-cols-1">
            <div className="flex md:flex-col flex-col">
              <div className="flex-1 text-3xl font-semibold dmsans leading-normal dmsans-semibold text-left sm:text-md sm:leading-8">
                Top 30 Rising & Trendsetter Architect & Designer of the Year
                2023 , Tamil Nadu.
              </div>
              <br />
              <div className="flex-1 text-xl leading-normal dmsans text-left text-muted-foreground sm:text-md sm:leading-8">
                PARTHIBAN MOORTHY- National Architecture and Interior Design
                Excellence Awards and Conference, 2023, Global Edition{" "}
              </div>{" "}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Awards;
