import React from "react";

export function AboutSection() {
  return (
    <div className="">
      <section
        className="container mx-auto space-y-3 items-center text-center bg-slate-50 mb-20 animate-fade-right dark:bg-transparent md:py-6"
        aria-label="about us section"
      >
        <div className="mx-auto mt-20 flex max-w-[88rem] flex-col space-y-4 text-center">
          <h2 className="font-heading text-3xl text-left dmsans font-medium leading-[1.1] mb-5 md:text-5xl">
            The Studio
          </h2>
        </div>
        <div className="md:max-w-full md:grid-cols-1">
          <div className="flex md:flex-col flex-col">
            <div className="flex-1 text-xl dmsans leading-normal dmsans text-left text-muted-foreground sm:text-md sm:leading-8">
              Our in-house design team comprises professionals with diverse
              backgrounds, including architects, interior designers, visual
              designers, and project managers. This multidisciplinary approach
              ensures that we can tackle complex projects from various angles.
            </div>
            <div className="flex-1 text-xl dmsans leading-normal dmsans text-left text-muted-foreground sm:text-md sm:leading-8">
              We assemble cross-functional teams that can address all aspects of
              a project. This means our experts work in harmony to cover every
              facet, from architectural aspects to interior design and branding.
            </div>{" "}
          </div>
        </div>
      </section>

      <section
        className="container mx-auto space-y- items-center text-center bg-slate-50 mb-20 animate-fade-right dark:bg-transparent md:py"
        aria-label="about us section"
      >
        <div className="mx-auto mt-20 flex max-w-[88rem] flex-col space-y-4 text-center">
          <h2 className="font-heading text-3xl text-left dmsans font-medium leading-[1.1] mb-5 md:text-5xl">
            Our Story
          </h2>
        </div>
        <div className=" text-left max-w-full">
          <p className="text-xl dmsans  leading-normal text-left text-muted-foreground sm:text-md sm:leading-8">
            We believe good design and powerful storytelling can bring a
            brand&apos;s essence and personality to life. From conception to
            project completion, listening is our top priority to ensure we
            deliver the best possible results for our clients. Our approach
            combines design inspiration from the art world with market research
            and analysis to provide a truly unique visual identity for our
            clients.
          </p>
          <br />
          <div>
            <div className="mx-auto mt-20 flex max-w-[88rem] flex-col space-y-4 text-center">
              <h2 className="font-heading text-3xl text-left dmsans font-medium leading-[1.1] mb-8 md:text-5xl">
                Our Values
              </h2>
            </div>
            <div className="max-w-full text-justify text-md text-xl dmsans leading-normal text-muted-foreground sm:text-md sm:leading-8">
              <div className="text-left space-y-4">
                <p className="text-xl dmsans flex md:flex-row flex-col text-muted-foreground">
                  <span className="my-font flex md:flex-row flex-col text-white font-semibold">
                    &bull; &nbsp; Think.
                  </span>
                  &nbsp;This is 90% of the job.
                </p>
                <p className="text-xl dmsans flex md:flex-row flex-col text-muted-foreground">
                  <span className="my-font flex md:flex-row flex-col text-white font-semibold">
                    &bull; &nbsp; Ask.
                  </span>
                  &nbsp;Discover the things you don&apos;t know.
                </p>
                <p className="text-xl dmsans flex md:flex-row flex-col text-muted-foreground">
                  <span className="my-font flex md:flex-row flex-col text-white font-semibold">
                    &bull; &nbsp; Get Inspired.
                  </span>
                  &nbsp;Create something new.
                </p>
                <p className="text-xl dmsans flex md:flex-row flex-col text-muted-foreground">
                  <span className="my-font flex md:flex-row flex-col text-white font-semibold">
                    &bull; &nbsp; Colloborate.
                  </span>
                  &nbsp;Big things can&apos;t be done alone.
                </p>
                <p className="text-xl dmsans flex md:flex-row flex-col text-muted-foreground">
                  <span className="my-font flex md:flex-row flex-col text-white font-semibold">
                    &bull; &nbsp; Create.
                  </span>
                  &nbsp;Don&apos;t fall in love with your creation.
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="mx-auto mt-20 flex max-w-[88rem] flex-col space-y-4 text-center">
            <h2 className="font-heading text-3xl text-left dmsans font-medium leading-[1.1] mb-8 md:text-5xl">
              Our Team
            </h2>
          </div>
          <div>
            <p className="text-md text-xl dmsans  leading-normal text-left text-muted-foreground sm:text-md sm:leading-8">
              Our diverse team is comprised of Architects, Interior Designers,
              Visual Designers, and Project Managers. From A to Z, our
              collaborative approach draws on the team&apos;s diverse skills and
              expertise. This collective knowledge allows us to provide
              comprehensive and tailored solutions for your projects. Whether
              it&apos;s architectural design, interior aesthetics, visual branding,
              or project management, our team combines their skills to deliver
              results that exceed your expectations.
            </p>
            <br />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
