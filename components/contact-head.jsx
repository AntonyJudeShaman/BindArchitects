import Image from "next/image";
import React from "react";
import cover from "../assets/contact-cover.svg";

function ContactHead() {
  return (
    <div className="flex min-h-screen flex-row mt-28 md:mt-52 max-w-screen">
      <div className=" flex max-w-[50rem]  flex-col m-4 text-left">
        <p
          className="md:text-2xl  text-muted-foreground text-3xl  text-left mb-"
          aria-label="Contact us"
        >
          Let&apos;s create something special
        </p>
        <p
          className="contact-title max-w-screen  dmsans-bold  md:mt-0 mt-5  mb-4  text-left"
          aria-label="Contact us"
        >
          Transform your idea into pixel-perfect design
        </p>
       
      </div>
      <div>
        <Image
          src={cover}
          alt="contact cover image"
          className="mt-12 2xl:block xl:block hidden"
          width={450}
          height={450}
        />
      </div>
    </div>
  );
}

export default ContactHead;
