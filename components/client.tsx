"use client";
import React, { useState } from "react";
import logo from "./logo.png";
import Image from "next/image";
import client1 from "../assets/iyer.jpg";
import client2 from "../assets/rahmanicon.jpg";
import client3 from "../assets/ttdc.jpg";
import client4 from "../assets/Delphi.jpg";

function Client() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);

  return (
    <div className="items-center md:mt-20 mt-0 flex md:flex-row gap-20 flex-col md:p-0 p-6 mb-3 md:mb-20 justify-center md:justify-between max-w-screen">
      <div className="flex flex-col mt-20 max-w-[35rem]">
        <h1
          className="text-5xl dmsans text-left leading-[1.1] mb-5 md:text-6xl"
          aria-label="Architecture Studio's Distinguished Clients"
        >
          Distinguished Clients
        </h1>
        <p className="text-muted-foreground text-lg text-left">
          Elevating architectural experiences with our curated list of clients.
          We collaborate tirelessly to shape innovative environments. Together,
          we redefine user value, creating unprecedented worlds that pave the
          way for even greater achievements.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-16 md:grid-cols-4 max-w-[50rem] mx-auto mt-0 md:mt-10 mb-10 justify-between">
        <div className="mx-auto md:mt-20">
          <Image
            height={130}
            width={130}
            className=" rounded-2xl"
            alt="Iyer's Delight"
            src={client1}
          />
        </div>
        <div className="mx-auto md:mt-20">
          <Image
            height={130}
            width={130}
            className=" rounded-2xl"
            alt="AR Rahman Cafe"
            src={client2}
          />
        </div>
        <div className="mx-auto md:mt-20">
          <Image
            height={130}
            width={130}
            className=" rounded-2xl"
            alt="TTDC"
            src={client3}
          />
        </div>
        <div className="mx-auto md:mt-20">
          <Image
            height={130}
            width={130}
            className=" rounded-2xl"
            alt="Delphi Clinic"
            src={client4}
          />
        </div>
      </div>
    </div>
  );
}

export default Client;
