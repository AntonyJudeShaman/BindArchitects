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
        />{" "}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Studio Bind Architects" />
        <meta
          name="keywords"
          content="best architects in chennai,, top architects, residential architecture, apartment design, villa design, restaurant architecture, interior design architects near me, cheap price architects, famous architects, interior designs, Architect in chennai, Interior designer in chennai, Top architects in chennai, Best architects in chennai, Home design in chennai, Shop design in chennai, Showroom designer in chennai, Residential architects, Commercial architects, best architects in chennai, top architects, residential architecture, apartment design, villa design, restaurant architecture, interior design, Modern home designs, Affordable home architects, Office interior designers, Trendy home plans, Innovative building designers, Local architects, Building design experts, Chennai architecture firms, Creative interior designs, Budget-friendly house architects, Local shop makeover, Renowned showroom renovators, Skilled construction designers, Contemporary building styles, Architecture and design services, Experienced architectural consultants"
        />
      </Head>
      <section
        className="flex justify-center md:p-0 -mt-20 p-4 min-h-screen items-center mx-auto "
        aria-label="about us section"
      >
        <div className="mx-auto p-4 md:p-0 flex flex-col items-center space-y-4 max-w-[40rem] text-center">
          <h1
            className="text-5xl dmsans-semibold font-medium leading-[1.1] mb-5 md:text-8xl"
            aria-label="The Studio"
          >
            The Studio
          </h1>
          <article className="text-2xl  dmsans leading-normal text-justify md:text-center text-muted-foreground">
            Our in-house design team comprises professionals with diverse
            backgrounds, including architects, interior designers, visual
            designers, and project managers. This multidisciplinary approach
            ensures that we can tackle complex projects from various angles.
          </article>
        </div>
      </section>
      <section
        className=" md:mb-10 p-0 md:p-4 md:-ml-4 md:-mr-28 gap-x-24 grid md:grid-cols-1 grid-cols-1"
        aria-label="about us section"
      >
        <h1
          className="text-5xl md:-ml-20 ml-7 text-left dmsans-semibold font-medium leading-[1.1] mb-5 md:text-7xl"
          aria-label="Our Story"
        >
          Our Story
          <hr className="mt-10 md:mr-10 mr-0" />
        </h1>
      </section>
      <section
        className=" md:mb-10 min-h-[40rem] p-4 md:-ml-28 md:-mr-28 gap-x-24 grid md:grid-cols-3 grid-cols-1"
        aria-label="about us section"
      >
        <article className="flex flex-col p-4  max-w-[40rem] text-left">
          <article className="text-lg dmsans md:mt-2 mt-0 leading-normal text-justify  text-muted-foreground">
            Embracing the synergy of innovative design and captivating
            storytelling, we bring a brand's essence and personality to vivid
            life. From concept to completion, attentive listening is our
            hallmark, guaranteeing superior outcomes for our clients. Our
            approach melds artistic inspiration with thorough market research,
            crafting a truly unique visual identity. Whether it's architectural
            design, interior aesthetics, or project management, our diverse team
            ensures results that transcend expectations.
          </article>
        </article>
        <div className="p-4 flex max-w-[40rem] flex-col space-y-4 text-left">
          <h1
            className="text-4xl dmsans-semibold font-medium leading-[1.1] mb-5 md:text-4xl"
            aria-label="Our Values"
          >
            Our Values
            <hr className="mt-10 md:hidden" />
          </h1>
          <article className="max-w-full text-justify text-md text-lg dmsans leading-normal text-muted-foreground sm:text-md sm:leading-8">
            <div className="text-left space-y-4">
              <p className="text-lg dmsans flex  md:flex-col 2xl:flex-row flex-col text-muted-foreground">
                <span className="my-font flex  flex-row text-white  dmsans-semibold">
                  &bull; &nbsp; Think.
                </span>
                &nbsp;This is 90% of the job.
              </p>
              <p className="text-lg dmsans flex  md:flex-col 2xl:flex-row flex-col text-muted-foreground">
                <span className="my-font flex  flex-row text-white dmsans-semibold font-semibold">
                  &bull; &nbsp; Ask.
                </span>
                &nbsp;Discover the things you don&apos;t know.
              </p>
              <p className="text-lg dmsans flex  md:flex-col 2xl:flex-row flex-col text-muted-foreground">
                <span className="my-font flex  flex-row text-white dmsans-semibold font-semibold">
                  &bull; &nbsp; Get Inspired.
                </span>
                &nbsp;Create something new.
              </p>
              <p className="text-lg dmsans flex  md:flex-col 2xl:flex-row flex-col text-muted-foreground">
                <span className="my-font flex  flex-row text-white dmsans-semibold font-semibold">
                  &bull; &nbsp; Colloborate.
                </span>
                &nbsp;Big things can&apos;t be done alone.
              </p>
              <p className="text-lg dmsans flex  md:flex-col 2xl:flex-row  flex-col text-muted-foreground">
                <span className="my-font flex  flex-row text-white dmsans-semibold font-semibold">
                  &bull; &nbsp; Create.
                </span>
                &nbsp;Don&apos;t fall in love with your creation.
              </p>
            </div>
          </article>
        </div>
        <div className="flex flex-col p-4 space-y-4 max-w-[40rem] text-left">
          <h1
            className="text-4xl dmsans-semibold font-medium leading-[1.1] mb-5 md:text-4xl"
            aria-label="Our Team"
          >
            Our Team
            <hr className="mt-10 md:hidden" />
          </h1>
          <article className="text-lg dmsans leading-normal text-justify text-muted-foreground">
            Our diverse team is comprised of Architects, Interior Designers,
            Visual Designers, and Project Managers. From A to Z, our
            collaborative approach draws on the team&apos;s diverse skills and
            expertise. This collective knowledge allows us to provide
            comprehensive and tailored solutions for your projects. Whether
            it&apos;s architectural design, interior aesthetics, visual
            branding, or project management, our team combines their skills to
            deliver results that exceed your expectations.
          </article>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
