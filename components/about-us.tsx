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
        <meta name="author" content="Studio Bind Architects" />
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
        <div className="mx-auto flex-col flex grid justify-center gap-4 sm:grid-cols-2  justify-between md:grid-cols-1">
          <div className="flex md:flex-row flex-col ">
            <div className="flex-1 text-4xl dmsans-semibold   title-gradient md:text-left md:mr-10 mr-0 text-center">
              We shape brands that need no introduction.
            </div>
            <div className="flex-1 md:text-md  fs-3  font-extralight dmsans text-md text-muted-foreground text-md md:text-left text-center  md:p-0 p-3 md:justify-items-center md:ml-0 md:ml-24 md:mt-0 mt-10 ">
              We get market-carving brands to that next step and beyond through
              forward-thinking product design and a helluva clean process. And
              yes, we do branding too.
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:mt-5">
            <div className="flex-1 text-4xl dmsans-semibold  title-gradient md:text-left  md:mr-10 mr-0  text-center md:mt-0 mt-6">
              No-kidding kick-offs
            </div>
            <div className="flex-1 md:text-md  fs-3 font-extralight dmsans text-md   text-muted-foreground text-md md:text-left text-center  md:p-0 p-3 md:justify-items-center md:ml-0 md:ml-24 md:mt-0 mt-10">
              We don&apos;t believe in multiplying calls, workshops or other
              overly introspective agency habits. To us, reality is the real
              deal. So we always start with a really strong problem-oriented
              kick-off.
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:mt-5">
            <div className="flex-1 text-4xl dmsans-semibold  title-gradient md:text-left md:mr-10 mr-0  text-center md:mt-0 mt-6">
              Try fast. Faster.
            </div>
            <div className="flex-1 md:text-md  fs-3 font-extralight dmsans text-md   text-muted-foreground text-md md:text-left text-center  md:p-0 p-3 md:justify-items-center md:ml-0 md:ml-24 md:mt-0 mt-6">
              And harder too. We are iteration junkies and fine-tuning mavens.
              Also, we always encourage trying several, if not many, brandings
              on your product. Never the other way round.
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:mt-5">
            <div className="flex-1 text-4xl dmsans-semibold  title-gradient md:text-left md:mr-10 mr-0  text-center md:mt-0 mt-6">
              Talk to the boss
            </div>
            <div className="flex-1 md:text-md fs-3  font-extralight dmsans text-md text-muted-foreground text-md md:text-left text-center  md:p-0 p-3 md:justify-items-center md:ml-0 md:ml-24 md:mt-0 mt-10">
              We believe we should be talking with the ones who have the final
              call on the matter. It is just obvious to us. We&apos;ve made some
              pretty dazzling tests working only with the CEO we are more than
              happy to duplicate.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
