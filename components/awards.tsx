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
      </Head>
      <div className="">
        <section
          className="container mx-auto  items-center text-center bg-slate-50 mb-20 animate-fade-in dark:bg-transparent md:py-6"
          aria-label="about us section"
        >
          <div className="mx-auto  flex max-w-[88rem] flex-col space-y-4 text-center">
            <h2 className="font-heading text-3xl text-left dmsans font-medium leading-[1.1] mb-5 md:text-5xl">
              Our Awards
            </h2>
          </div>
          <div className="md:max-w-[58rem] md:grid-cols-1">
            <div className="flex md:flex-col flex-col">
              <div className="flex-1 text-3xl font-semibold dmsans leading-normal dmsans text-left text-muted-foreground sm:text-md sm:leading-8">
                Promising & Creative Architecture & Interior Design Firm of the
                Year 2023” Tamil Nadu Award under “Residential Projects &
                Commercial Projects” Category for the year 2023 (GLOBAL
                EDITION).
              </div>
              <br />
              <div className="flex-1 text-xl dmsans2 leading-normal dmsans text-left text-muted-foreground sm:text-md sm:leading-8">
                STUDIO BIND - National Architecture and Interior Design
                Excellence Awards and Conference, 2023, Global Edition.
              </div>{" "}
            </div>
          </div>
          <br />
          <br />
          <div className="md:max-w-[58rem] md:grid-cols-1">
            <div className="flex md:flex-col flex-col">
              <div className="flex-1 text-3xl font-semibold dmsans leading-normal dmsans text-left text-muted-foreground sm:text-md sm:leading-8">
                Top 30 Rising & Trendsetter Architect & Designer of the Year
                2023 , Tamil Nadu.
              </div>
              <br />
              <div className="flex-1 text-xl dmsans2 leading-normal dmsans text-left text-muted-foreground sm:text-md sm:leading-8">
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
