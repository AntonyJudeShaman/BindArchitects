"use client"
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
    <div className="items-center md:mt-20 mt-0 flex md:flex-row gap-20 flex-col p-6 mb-20 justify-center md:justify-between max-w-screen">
      <div className="flex flex-col mt-20 max-w-[25rem]">
        <h2
          className="text-5xl dmsans leading-[1.1] mb-5 md:text-6xl"
          aria-label="Selected Clients"
        >
          Selected Clients
        </h2>
        <p className="text-muted-foreground text-lg text-left">
          We play hard so they can win fast. We build new worlds together.
          Worlds where user value is unprecedented and where it paves the way
          for even more.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 max-w-[50rem] mx-auto mt-10 mb-10 justify-between">
        <div className="mx-auto mt-10 ">
          <Image
            height={130}
            width={130}
            alt="logo"
            src={client1}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ filter: isHovered ? "grayscale(0%)" : "grayscale(100%)" }}
          />
        </div>
        <div className="mx-auto mt-10 ">
          <Image
            height={130}
            width={130}
            alt="logo"
            src={client2}
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
            style={{ filter: isHovered1 ? "grayscale(0%)" : "grayscale(100%)" }}
          />
        </div>
        <div className="mx-auto mt-10 ">
          <Image
            height={130}
            width={130}
            alt="logo"
            src={client3}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            style={{ filter: isHovered2 ? "grayscale(0%)" : "grayscale(100%)" }}
          />
        </div>
        <div className="mx-auto mt-10 ">
          <Image
            height={130}
            width={130}
            alt="logo"
            src={client4}
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
            style={{ filter: isHovered3 ? "grayscale(0%)" : "grayscale(100%)" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Client;
