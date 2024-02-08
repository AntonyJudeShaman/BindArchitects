import Image from "next/image";
import React from "react";
import cover from "../assets/contact-cover.svg";

function ContactHead() {
  return (
    <div className="flex max-w-full min-h-screen flex-row md:-mt-0 mt-0 justify-center max-w-screen">
      <div className="flex max-w-[50rem] justify-center flex-col md:m-0 m-6 text-left">
        <h1
          className="md:text-2xl text-muted-foreground text-2xl  text-left mb-"
          aria-label="Craft your dream spaces with us"
        >
          Let&apos;s bring your architectural vision to life
        </h1>
        <h2
          className=" text-[3rem] md:text-[4rem] max-w-screen 2xl:text-[4.5rem] dmsans-bold md:mt-0 mt-5 mb-4 text-left"
          aria-label="Design spaces that inspire and transform"
        >
          Transform ideas into functional, inspiring structures
        </h2>
      </div>

      <div className="flex justify-center">
        <Image
          src={cover}
          alt="contact cover image"
          className=" 2xl:block m-10 xl:block lg:block hidden"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
}

export default ContactHead;
