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
        <title>About Us - Bind Architects</title>
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
        className="flex justify-center md:p-0 -mt-20 p-0 min-h-screen items-center mx-auto "
        aria-label="about us section"
      >
        <div className="mx-auto p-4 md:p-0 flex flex-col items-center space-y-4 text-center">
          <h1
            className="text-5xl dmsans-semibold font-medium leading-[1.1] mb-5 md:text-8xl"
            aria-label="The Studio"
          >
            The Studio
          </h1>
          <article className="text-2xl dmsans leading-normal text-center md:text-center text-muted-foreground">
            Our in-house design team, consisting of top architects, skilled
            interior designers, creative visual designers, and efficient project
            managers, brings a diverse set of expertise to the table. This
            multidisciplinary approach empowers us to handle intricate projects
            with a comprehensive perspective, ensuring excellence in
            architectural design, interior aesthetics, and project management.
          </article>
        </div>
      </section>
      <section
        className=" md:mb-10 p-0 md:p-0 md:-ml-4 md:-mr-28 gap-x-24 grid md:grid-cols-1 grid-cols-1"
        aria-label="about us section"
      >
        <h1
            className="text-4xl md:text-6xl md:-ml-20 p-4 md:p-0 dmsans-semibold font-medium leading-[1.1] mb-5 md:text-4xl"
            aria-label="Our Values"
          >
            Our Story
            <hr className="mt-10" />
          </h1>
      </section>
      <section
        className="md:mb-10 min-h-[40rem] p-4 md:-ml-28 md:-mr-28 gap-x-24 grid md:grid-cols-3 grid-cols-1"
        aria-label="about us section"
      >
        <article className="flex flex-col pb-8 md:pb-0 max-w-[40rem] text-left">
          <article className="text-lg dmsans md:mt-2 mt-0 leading-normal text-justify text-muted-foreground">
            At Bind Architects, we seamlessly blend innovative design with
            captivating storytelling, bringing the essence and personality of
            architectural projects to vivid life. From conceptualization to
            completion, our hallmark is attentive listening, ensuring superior
            outcomes for our clients. Our approach combines artistic inspiration
            with thorough market research, resulting in a unique visual identity
            that transcends expectations. Whether it&apos;s architectural
            design, interior aesthetics, or project management, our diverse team
            guarantees exceptional results.
          </article>
        </article>
        <div className="pb-8 md:pb-0 flex max-w-[40rem] flex-col space-y-4 text-left">
          <h1
            className="text-4xl dmsans-semibold font-medium leading-[1.1] mb-5 md:text-4xl"
            aria-label="Our Values"
          >
            Our Values
            <hr className="mt-10 md:hidden" />
          </h1>
          <article className="max-w-full text-justify text-md text-lg dmsans leading-normal text-muted-foreground sm:text-md sm:leading-8">
            <div className="text-left space-y-4">
              <p className="text-lg dmsans flex md:flex-col flex-col text-muted-foreground">
                <span className="my-font text-white dmsans-semibold">
                  &bull; &nbsp; Innovate.
                </span>
                &nbsp;Pushing the boundaries of architectural design.
              </p>
              <p className="text-lg dmsans flex md:flex-col flex-col text-muted-foreground">
                <span className="my-font text-white dmsans-semibold font-semibold">
                  &bull; &nbsp; Inquire.
                </span>
                &nbsp;Discovering the nuances of each architectural challenge.
              </p>
              <p className="text-lg dmsans flex md:flex-col flex-col text-muted-foreground">
                <span className="my-font text-white dmsans-semibold font-semibold">
                  &bull; &nbsp; Draw Inspiration.
                </span>
                &nbsp;Crafting innovative and visually stunning architectural
                solutions.
              </p>
              <p className="text-lg dmsans flex md:flex-col flex-col text-muted-foreground">
                <span className="my-font text-white dmsans-semibold font-semibold">
                  &bull; &nbsp; Collaborate.
                </span>
                &nbsp;Leveraging collective expertise for impactful
                architectural outcomes.
              </p>
              <p className="text-lg dmsans flex md:flex-col  flex-col text-muted-foreground">
                <span className="my-font text-white dmsans-semibold font-semibold">
                  &bull; &nbsp; Create.
                </span>
                &nbsp;Balancing creativity and practicality in architectural
                solutions.
              </p>
            </div>
          </article>
        </div>
        <div className="flex flex-col space-y-4 max-w-[40rem] text-left">
          <h1
            className="text-4xl dmsans-semibold font-medium leading-[1.1] mb-5 md:text-4xl"
            aria-label="Our Team"
          >
            Our Team
            <hr className="mt-10 md:hidden" />
          </h1>
          <article className="text-lg dmsans leading-normal text-justify text-muted-foreground">
            Our dynamic team includes Architects, Interior Designers, Visual
            Designers, and Project Managers. From project inception to
            completion, our collaborative approach harnesses the team&apos;s
            diverse skills and expertise. This collective knowledge allows us to
            provide comprehensive and tailored solutions for architectural
            design, interior aesthetics, visual branding, and project
            management. At Studio Bind, our team combines their
            skills to deliver results that consistently exceed your
            architectural expectations.
          </article>
        </div>
      </section>{" "}
      <section
        className="container md:mb-10 p-4 md:p-0 md:-ml-24 md:-mr-28   bg-slate-50 mb-20  dark:bg-transparent md:py-6"
        aria-label="about us section"
      >
        <div className="mx-auto  flex max-w-[88rem] flex-col space-y-4 text-center">
          <h2
            className="dmsans-semibold text-4xl text-left dmsans font-medium leading-[1.1] mb-5 md:text-7xl"
            aria-label="Our Awards"
          >
            Our Awards
          </h2>
          <hr />
        </div>
        <article className="md:max-w-[58rem] md:grid-cols-1">
          <div className="flex md:flex-col flex-col">
            <div className="flex-1 text-3xl mt-10 font-semibold dmsans leading-normal dmsans-semibold text-left sm:text-md sm:leading-8">
              Promising & Creative Architecture & Interior Design Firm of the
              Year 2023” Tamil Nadu Award under “Residential Projects &
              Commercial Projects” Category for the year 2023 (GLOBAL EDITION).
            </div>
            <br />
            <div className="flex-1 text-xl dmsans leading-normal dmsans text-left text-muted-foreground sm:text-md sm:leading-8">
              Bind - National Architecture and Interior Design Excellence Awards
              and Conference, 2023, Global Edition.
            </div>{" "}
          </div>
        </article>
        <br />
        <br />
        <article className="md:max-w-[58rem] md:grid-cols-1">
          <div className="flex md:flex-col flex-col">
            <div className="flex-1 text-3xl font-semibold dmsans leading-normal dmsans-semibold text-left sm:text-md sm:leading-8">
              Top 30 Rising & Trendsetter Architect & Designer of the Year 2023
              , Tamil Nadu.
            </div>
            <br />
            <div className="flex-1 text-xl leading-normal dmsans text-left text-muted-foreground sm:text-md sm:leading-8">
              PARTHIBAN MOORTHY- National Architecture and Interior Design
              Excellence Awards and Conference, 2023, Global Edition{" "}
            </div>{" "}
          </div>
        </article>
      </section>
    </div>
  );
}

export default AboutSection;
