"use client";
import { motion } from "framer-motion";
import { Metadata } from "next";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Bind - Best Architects in Chennai | Home & Interior Designers in Chennai",
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
        className="h-100 flex items-center max-w-screen overflow-y-auto"
        style={{ minHeight: "100vh" }}
      >
        <div className="md:p-0 p-4 max-w-full flex flex-col gap-8 md:-mt-10 ">
          {/* <h1 className="font-semibold ">
            <Image src={logo} alt="Jude" className="h-15 w-20" />
          </h1> */}
          <h1
            aria-label="Studio bind"
            className="2xl:text-8xl xl:text-8xl lg:text-8xl md:text-7xl sm:text-7xl  dmsans-home title-gradient2 flex flex-wrap max-w-full   z-30 text-6xl title-gradient    duration-1000   font-display   "
          >
            We shape
          </h1>

          <h1
            aria-label="Studio bind"
            className="2xl:text-8xl xl:text-8xl lg:text-8xl md:text-7xl sm:text-7xl dmsans-home title-gradient2 flex dmsans-home flex-wrap max-w-full   z-30 text-6xl dmsans-home title-gradient3    duration-1000   font-display   "
          >
            brands that
            <span className="sm:hidden dmsans-home hidden md:inline-block">
              &nbsp;need no
            </span>
          </h1>
          <h1
            aria-label="Studio bind"
            className="2xl:text-8xl xl:text-8xl lg:text-8xl md:text-7xl sm:text-7xl dmsans-home title-gradient2 sm:inline-block md:hidden flex dmsans-home flex-wrap max-w-full   z-30 text-6xl dmsans-home title-gradient    duration-1000   font-display   "
          >
            need no
          </h1>
          <h1
            aria-label="Studio bind"
            className="2xl:text-8xl xl:text-8xl lg:text-8xl md:text-7xl sm:text-7xl dmsans-home title-gradient2 flex dmsans-home flex-wrap   z-30 text-6xl dmsans-home title-gradient4    duration-1000   font-display   "
          >
             introduction
          </h1>
          <div className="md:max-w-full grid md:grid-cols-4 sm:grid-cols-4 grid-cols-2 md:gap-x-24  xl:gap-x-44 lg:gap-x-40 2xl:gap-x-44 gap-x-12  flex-row  sm:leading-8">
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
            <div className="flex flex-col md:ml-0 xs:ml-10 dmsans-home title-gradient3 mt-8">
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
            <div className="flex flex-col dmsans-home title-gradient4 md:ml-0 xs:ml-10 mt-8">
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
