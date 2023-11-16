"use client";
import Head from "next/head";
import React, { useEffect } from "react";
import Awards from "./awards";

export function AboutSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-2">
      <Head>
        <title>About Us - Studio Bind Architects</title>
        <meta
          name="description"
          content="Explore our services and learn more about our approach to branding and product design."
        />
      </Head>
      <section
        className="flex justify-center md:p-0 -mt-20 p-4 min-h-screen items-center mx-auto "
        aria-label="about us section"
      >
        <div className="mx-auto p-4 md:p-0 flex flex-col items-center space-y-4 max-w-[40rem] text-center">
          <h2
            className="text-5xl dmsans-semibold font-medium leading-[1.1] mb-5 md:text-8xl"
            aria-label="The Studio"
          >
            The Studio
          </h2>
          <div className="text-2xl  dmsans leading-normal text-justify md:text-center text-muted-foreground">
            Our in-house design team comprises professionals with diverse
            backgrounds, including architects, interior designers, visual
            designers, and project managers. This multidisciplinary approach
            ensures that we can tackle complex projects from various angles.
          </div>
        </div>
      </section>
      <section
        className=" md:mb-10 p-0 md:p-4 md:-ml-4 md:-mr-28 gap-x-24 grid md:grid-cols-1 grid-cols-1"
        aria-label="about us section"
      >
        <h2
          className="text-4xl md:-ml-20 ml-7 text-left dmsans-semibold font-medium leading-[1.1] mb-5 md:text-6xl"
          aria-label="Our Story"
        >
          Our Story
          <hr className="mt-10 md:mr-10 mr-0" />
        </h2>
      </section>
      <section
        className=" md:mb-10 min-h-[40rem] p-4 md:-ml-28 md:-mr-28 gap-x-24 grid md:grid-cols-3 grid-cols-1"
        aria-label="about us section"
      >
        {/* <h2
          className="text-4xl dmsans-semibold font-medium leading-[1.1] mb-5 md:text-6xl"
          aria-label="Our Story"
        >
          Our Story
          <hr className="mt-10 md:hidden" />
        </h2> */}
        <div className="flex flex-col p-4  max-w-[40rem] text-left">
          <div className="text-lg dmsans md:mt-24 mt-0 leading-normal text-justify  text-muted-foreground">
            We believe good design and powerful storytelling can bring a
            brand&apos;s essence and personality to life. From conception to
            project completion, listening is our top priority to ensure we
            deliver the best possible results for our clients. Our approach
            combines design inspiration from the art world with market research
            and analysis to provide a truly unique visual identity for our
            clients.
          </div>
        </div>
        <div className="p-4 flex max-w-[40rem] flex-col space-y-4 text-left">
          <h2
            className="text-4xl dmsans-semibold font-medium leading-[1.1] mb-5 md:text-6xl"
            aria-label="Our Values"
          >
            Our Values
            <hr className="mt-10 md:hidden" />
          </h2>
          <div className="max-w-full text-justify text-md text-lg dmsans leading-normal text-muted-foreground sm:text-md sm:leading-8">
            <div className="text-left space-y-4">
              <p className="text-lg dmsans flex  md:flex-row flex-col text-muted-foreground">
                <span className="my-font flex  flex-row text-white font-semibold">
                  &bull; &nbsp; Think.
                </span>
                &nbsp;This is 90% of the job.
              </p>
              <p className="text-lg dmsans flex  md:flex-row flex-col text-muted-foreground">
                <span className="my-font flex  flex-row text-white font-semibold">
                  &bull; &nbsp; Ask.
                </span>
                &nbsp;Discover the things you don&apos;t know.
              </p>
              <p className="text-lg dmsans flex  md:flex-row flex-col text-muted-foreground">
                <span className="my-font flex  flex-col text-white font-semibold">
                  &bull; &nbsp; Get Inspired.
                </span>
                &nbsp;Create something new.
              </p>
              <p className="text-lg dmsans flex  md:flex-row flex-col text-muted-foreground">
                <span className="my-font flex  flex-col text-white font-semibold">
                  &bull; &nbsp; Colloborate.
                </span>
                &nbsp;Big things can&apos;t be done alone.
              </p>
              <p className="text-lg dmsans flex  md:flex-row  flex-col text-muted-foreground">
                <span className="my-font flex  flex-col text-white font-semibold">
                  &bull; &nbsp; Create.
                </span>
                &nbsp;Don&apos;t fall in love with your creation.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 space-y-4 max-w-[40rem] text-left">
          <h2
            className="text-4xl dmsans-semibold font-medium leading-[1.1] mb-5 md:text-6xl"
            aria-label="Our Team"
          >
            Our Team
            <hr className="mt-10 md:hidden" />
          </h2>
          <div className="text-lg dmsans leading-normal text-justify text-muted-foreground">
            Our diverse team is comprised of Architects, Interior Designers,
            Visual Designers, and Project Managers. From A to Z, our
            collaborative approach draws on the team&apos;s diverse skills and
            expertise. This collective knowledge allows us to provide
            comprehensive and tailored solutions for your projects. Whether
            it&apos;s architectural design, interior aesthetics, visual
            branding, or project management, our team combines their skills to
            deliver results that exceed your expectations.
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
