"use client";
import { motion } from "framer-motion";
import { Metadata } from "next";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Studio Bind | Best Architects in Chennai | Home & Interior Designers in Chennai",
  description:
    "Welcome to Studio Bind, Your Premier Architectural Firm in Chennai. Transforming Visions into Stunning Reality. As a top architectural firm based in Chennai, we specialize in crafting innovative and sustainable architectural solutions. Explore our portfolio of breathtaking designs and discover how we bring your architectural dreams to life.",
};

export default function IndexPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <section
        className="h-100   "
        style={{ minHeight: "100vh" }}
      >
        <div className="md:p-0 p-4 text-wrapper flex flex-col gap-4 ">
          {/* <h1 className="font-semibold ">
            <Image src={logo} alt="Jude" className="h-15 w-20" />
          </h1> */}
          <h1
            aria-label="Studio bind"
            className="2xl:text-8xl  dmsans-home title-gradient2 mt-20  flex flex-wrap md:max-w-[98rem] max-w-[28rem]  z-30 text-6xl lg:text-7xl md:text-6xl xl:text-8xl title-gradient    duration-1000   font-display   whitespace-nowrap bg-clip-text"
          >
            We shape
          </h1>

          <h1
            aria-label="Studio bind"
            className="2xl:text-8xl dmsans-home title-gradient2 flex dmsans-home flex-wrap md:max-w-[98rem] max-w-[28rem]  z-30 text-6xl lg:text-7xl md:text-6xl xl:text-8xl dmsans-home title-gradient3    duration-1000   font-display   whitespace-nowrap bg-clip-text"
          >
            brands that
            <span className="sm:hidden dmsans-home hidden md:inline-block">
              &nbsp; need no
            </span>
          </h1>
          <h1
            aria-label="Studio bind"
            className="2xl:text-8xl dmsans-home title-gradient2 sm:inline-block md:hidden flex dmsans-home flex-wrap md:max-w-[98rem] max-w-[28rem]  z-30 text-6xl lg:text-7xl md:text-6xl xl:text-8xl dmsans-home title-gradient    duration-1000   font-display   whitespace-nowrap bg-clip-text"
          >
            need no
          </h1>
          <h1
            aria-label="Studio bind"
            className="2xl:text-8xl dmsans-home title-gradient2 flex dmsans-home flex-wrap   z-30 text-6xl lg:text-7xl md:text-6xl xl:text-8xl dmsans-home title-gradient4    duration-1000   font-display   whitespace-nowrap bg-clip-text"
          >
            introduction
          </h1>
          <div className="md:max-w-[88rem] grid md:grid-cols-4 grid-cols-2 max-w-[28rem]  flex-row flex-wrap justify-between mt-8 leading-normal   sm:leading-8">
            <div className="flex flex-col title-gradient4 mt-8">
              <span className="dmsans title-gradient title-gradient4   text-4xl mb-3">
                10{" "}
              </span>
              <span className="dmsans text-muted-foreground dmsans  text-sm">
                Years leading
              </span>
              <span className="dmsans text-muted-foreground dmsans text-sm">
                transformations
              </span>
            </div>
            <div className="flex flex-col md:ml-0 ml-10 dmsans-home title-gradient3 mt-8">
              <span className=" dmsans title-gradient  title-gradient3 text-4xl mb-3">
                60
              </span>
              <span className="dmsans text-muted-foreground dmsans text-sm">
                Successful{" "}
              </span>
              <span className="dmsans text-muted-foreground dmsans text-sm">
                clients
              </span>
            </div>
            <div className="flex flex-col title-gradient3  mt-8">
              <span className=" dmsans title-gradient title-gradient3 text-4xl mb-3">
                03{" "}
              </span>
              <span className="dmsans text-muted-foreground dmsans text-sm">
                Unicorns leading
              </span>

              <span className="dmsans text-muted-foreground dmsans text-sm">
                the market
              </span>
            </div>
            <div className="flex flex-col dmsans-home title-gradient4 md:ml-0 ml-10 mt-8">
              <span className="title-gradient dmsans title-gradient4 text-4xl mb-3">
                11
              </span>
              <span className="dmsans text-muted-foreground dmsans text-sm">
                Multicultural
              </span>

              <span className="dmsans text-muted-foreground dmsans text-sm">
                team players
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
