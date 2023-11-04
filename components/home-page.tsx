"use client";
import { LightBox } from "./light-box";
import Particles from "./particles";
import { motion, useScroll } from "framer-motion";
import { Metadata } from "next";
import tilt from "react-parallax-tilt";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page of best architects in chennai",
};

export default function IndexPage() {
  return (
    <div className="">
      <motion.section
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.85 }}
        animate={{ y: "0%", opacity: 1 }}
        className="h-100   "
        style={{ minHeight: "100vh" }}
      >
        <div className="container text-wrapper p-4 flex flex-col gap-4 ">
          {/* <h1 className="font-semibold ">
            <Image src={logo} alt="Jude" className="h-15 w-20" />
          </h1> */}
          <h1
            aria-label="Studio bind"
            className="2xl:text-8xl  title-gradient2 mt-28 font-heading flex flex-wrap md:max-w-[78rem] max-w-[28rem]  z-30 text-6xl lg:text-7xl md:text-6xl xl:text-8xl title-gradient    duration-1000  cursor-default text-edge-outline animate-title font-display   whitespace-nowrap bg-clip-text"
            style={{ fontWeight: "400" }}
          >
            We shape
          </h1>

          <h1
            aria-label="Studio bind"
            className="2xl:text-8xl title-gradient2 flex font-heading flex-wrap md:max-w-[78rem] max-w-[28rem]  z-30 text-6xl lg:text-7xl md:text-6xl xl:text-8xl title-gradient3    duration-1000  cursor-default text-edge-outline animate-title font-display   whitespace-nowrap bg-clip-text"
          >
            brands that
            <span className="sm:hidden hidden md:inline-block">
              &nbsp; need no
            </span>
          </h1>
          <h1
            aria-label="Studio bind"
            className="2xl:text-8xl title-gradient2 sm:inline-block md:hidden flex font-heading flex-wrap md:max-w-[78rem] max-w-[28rem]  z-30 text-6xl lg:text-7xl md:text-6xl xl:text-8xl title-gradient    duration-1000  cursor-default text-edge-outline animate-title font-display   whitespace-nowrap bg-clip-text"
          >
            need no
          </h1>
          <h1
            aria-label="Studio bind"
            className="2xl:text-8xl title-gradient2 flex font-heading flex-wrap   z-30 text-6xl lg:text-7xl md:text-6xl xl:text-8xl title-gradient4    duration-1000  cursor-default text-edge-outline animate-title font-display   whitespace-nowrap bg-clip-text"
          >
            introduction
          </h1>
          <div className="md:max-w-[58rem] grid md:grid-cols-4 grid-cols-2 max-w-[28rem]  flex-row flex-wrap justify-between mt-8 leading-normal   sm:leading-8">
            
            <div className="flex flex-col title-gradient mt-8">
              <span className="font-heading title-gradient    text-4xl mb-3">10 </span>
              <span className=" text-gray-300 my-font  text-sm">Years leading</span>
              <span className=" text-gray-300 my-font text-sm">transformations</span>
            </div>
            <div className="flex flex-col md:ml-0 ml-10 title-gradient3 mt-8">
              <span className="font-heading title-gradient title-gradient3 text-4xl mb-3">60</span>
              <span className=" text-gray-300 my-font text-sm">Successful </span>
              <span className=" text-gray-300 my-font text-sm">clients</span>
            </div>
            <div className="flex flex-col title-gradient  mt-8">
              <span className="font-heading title-gradient text-4xl mb-3">03 </span>
              <span className=" text-gray-300 my-font text-sm">
                Unicorns leading
              </span>

              <span className=" text-gray-300 my-font text-sm">the market</span>
            </div>
            <div className="flex flex-col title-gradient4 md:ml-0 ml-10 mt-8">
              <span className="font-heading title-gradient title-gradient4 text-4xl mb-3">11</span>
              <span className=" text-gray-300 my-font text-sm">
                Multicultural 
              </span>

              <span className=" text-gray-300 my-font text-sm">team players</span>
            </div>
          </div>

        </div>
      </motion.section>
    </div>
  );
}
