import Image from "next/image";
import React from "react";
import cover from "../assets/contact-cover.svg";

function ContactHead() {
  return (
    <div className="flex min-h-screen flex-row justify-center max-w-screen">
      <div className=" flex max-w-[50rem] justify-center  flex-col md:m-0 m-6 text-left">
        <p
          className="md:text-2xl  text-muted-foreground text-3xl  text-left mb-"
          aria-label="Lets create something special"
        >
          Let&apos;s create something special
        </p>
        <p
          className="contact-title max-w-screen  dmsans-bold  md:mt-0 mt-5  mb-4  text-left"
          aria-label="Transform your idea into pixel-perfect design"
        >
          Transform your idea into pixel-perfect design
        </p>
       
      </div>
      <div className="flex justify-center">
        <Image
          src={cover}
          alt="contact cover image"
          className=" 2xl:block xl:block lg:block hidden"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
}

export default ContactHead;
