import Image from "next/image";
import React from "react";
import cover from "../assets/contact-cover.svg";

function ContactHead() {
  return (
    <div className="flex min-h-screen flex-row mt-28 md:mt-52 max-w-100">
      <div className=" flex max-w-[50rem]  flex-col m-4 text-left">
        <p
          className="md:text-2xl  text-muted-foreground text-3xl  text-left mb-4"
          aria-label="Contact us"
        >
          Let&apos;s create something special
        </p>
        <p
          className="text-8xl  md:block  hidden dmsans-bold  md:mt-0 mt-10  mb-4  text-left"
          aria-label="Contact us"
        >
          Transform your idea into pixel-perfect design
        </p>
        <p
          className="text-6xl md:hidden max-w-full dmsans-bold md:mt-0 mt-10  mb-4  text-left"
          aria-label="Contact us"
        >
          Transform your idea into pixel-perfect design
        </p>
      </div>
      <div>
        <Image
          src={cover}
          alt="contact cover image"
          className="mt-12 md:block hidden"
          width={450}
          height={450}
        />
      </div>
    </div>
  );
}

export default ContactHead;
