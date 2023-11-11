import React from "react";
import Head from "next/head";

export function Aboutus() {
  return (
    <>
    <Head>
        <title>About Us - Studio Bind Architects</title>
        <meta
          name="description"
          content="Explore our services and learn more about our approach to branding and product design."
        />
      </Head>
      <section
        id="about-us"
        className="container mx-auto space-y-6 items-center text-center bg-slate-50 -z-20 mb-20  dark:bg-transparent md:py-6"
        aria-label="about us section"
      >
        <div className="mx-auto mt-20 flex max-w-[88rem] flex-col items-center space-y-4 text-center">
          <h2 className="dmsans text-5xl title-gradient4  leading-[1.1] mb-10  md:text-6xl">
            About Us
          </h2>
          {/* <p className="max-w-[42rem] leading-normal text-2xl text-muted-foreground sm:text-md sm:leading-8">
            We have worked with some of the best brands in the industry.
          </p> */}
        </div>
        <div className="mx-auto flex-col flex grid justify-center gap-4 sm:grid-cols-2 md:max-w-[80rem] justify-between md:grid-cols-1">
          <div className="flex md:flex-row flex-col ">
            <div className="flex-1 text-3xl dmsans   title-gradient md:text-left md:mr-10 mr-0 text-center">
              We shape brands that need no introduction.
            </div>
            <div className="flex-1 md:text-md  fs-3  font-extralight dmsans text-md text-muted-foreground text-md md:text-left text-center  md:p-0 p-3 md:justify-items-center md:ml-0 md:ml-24 md:mt-0 mt-10 ">
              We get market-carving brands to that next step and beyond through
              forward-thinking product design and a helluva clean process. And
              yes, we do branding too.
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:mt-5">
            <div className="flex-1 text-3xl dmsans  title-gradient md:text-left  md:mr-10 mr-0  text-center md:mt-0 mt-6">
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
            <div className="flex-1 text-3xl dmsans  title-gradient md:text-left md:mr-10 mr-0  text-center md:mt-0 mt-6">
              Try fast. Faster.
            </div>
            <div className="flex-1 md:text-md  fs-3 font-extralight dmsans text-md   text-muted-foreground text-md md:text-left text-center  md:p-0 p-3 md:justify-items-center md:ml-0 md:ml-24 md:mt-0 mt-6">
              And harder too. We are iteration junkies and fine-tuning mavens.
              Also, we always encourage trying several, if not many, brandings
              on your product. Never the other way round.
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:mt-5">
            <div className="flex-1 text-3xl dmsans  title-gradient md:text-left md:mr-10 mr-0  text-center md:mt-0 mt-6">
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
